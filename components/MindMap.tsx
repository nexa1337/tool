import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import * as d3 from 'd3';
import type { RoadmapNode } from '../types.ts';
import { Modal } from './Modal.tsx';

interface MindMapProps {
  data: RoadmapNode;
}

export const MindMap: React.FC<MindMapProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);

  const drawChart = () => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const { width, height } = containerRef.current.getBoundingClientRect();
    
    svg.attr('width', width).attr('height', height)
       .style('font-family', "'Poppins', sans-serif"); // Ensure font consistency

    const g = svg.append("g");
    
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    const isHorizontal = width > height * 1.2; // Prefer vertical on portrait screens
    const treeLayout = d3.tree<RoadmapNode>();
    
    if (isHorizontal) {
      treeLayout.nodeSize([40, 220]);
    } else {
      treeLayout.nodeSize([80, 180]);
    }


    const root = d3.hierarchy(data, d => d.children);
    
    // Assign unique IDs to each node for stable transitions
    let nodeId = 0;
    root.each(d => {
      (d as any).id = nodeId++;
    });
    
    // Store original children and collapse
    root.descendants().forEach((d: any) => {
        d._children = d.children;
        if (d.depth > 1) {
            d.children = null;
        }
    });

    const update = (source: d3.HierarchyPointNode<RoadmapNode> | d3.HierarchyNode<RoadmapNode>, initial: boolean = false) => {
        const duration = initial ? 0 : 400;
        
        treeLayout(root);
        
        const nodes = root.descendants();
        const links = root.links();
        
        const nodePosition = (d: any) => isHorizontal ? `translate(${d.y},${d.x})` : `translate(${d.x},${d.y})`;
        const sourcePosition = (d: any) => isHorizontal ? `translate(${source.y || d.y},${source.x || d.x})` : `translate(${source.x || d.x},${source.y || d.y})`;

        const linkGenerator = d3.link(isHorizontal ? d3.curveBumpX : d3.curveBumpY)
            .x((d: any) => isHorizontal ? d.y : d.x)
            .y((d: any) => isHorizontal ? d.x : d.y);
        
        const sourceLinkGenerator = d3.link(isHorizontal ? d3.curveBumpX : d3.curveBumpY)
            .x(() => isHorizontal ? (source as any).y : (source as any).x)
            .y(() => isHorizontal ? (source as any).x : (source as any).y);

        g.selectAll('.link')
            .data(links, (d: any) => d.target.id)
            .join(
                enter => enter.append('path')
                    .attr('class', 'link')
                    .attr('d', sourceLinkGenerator as any)
                    .transition().duration(duration)
                    .attr('d', linkGenerator as any),
                update => update.transition().duration(duration)
                    .attr('d', linkGenerator as any),
                exit => exit.transition().duration(duration)
                    .attr('d', sourceLinkGenerator as any)
                    .remove()
            );

        const node = g.selectAll<SVGGElement, d3.HierarchyNode<RoadmapNode>>('.node')
            .data(nodes, d => (d as any).id)
            .join(
                enter => {
                    const nodeEnter = enter.append('g')
                        .attr('class', 'node')
                        .attr('transform', sourcePosition)
                        .on('click', (event, d) => {
                            if (d.data.details || d.data.certifications || d.data.resources || d.data.level) {
                                setSelectedNode(d.data);
                            }
                            if ((d as any)._children || d.children) {
                                toggle(d);
                                update(d);
                            }
                        });

                    nodeEnter.append('circle')
                        .attr('r', 0)
                        .attr('fill', d => d.data.color)
                        .attr('stroke', d => d3.color(d.data.color)?.darker(1).toString() || '#000')
                        .transition().duration(duration)
                        .attr('r', 8);

                    const textSelection = nodeEnter.append('text')
                        .attr('dy', '.35em')
                        .attr('x', d => (d.children || (d as any)._children) ? (isHorizontal ? -14 : 0) : (isHorizontal ? 14 : 0))
                        .attr('y', d => (d.children || (d as any)._children) ? (isHorizontal ? 0 : -18) : (isHorizontal ? 0 : 18))
                        .attr('text-anchor', d => (d.children || (d as any)._children) ? (isHorizontal ? 'end' : 'middle') : (isHorizontal ? 'start' : 'middle'))
                        .text(d => d.data.name)
                        .style('fill-opacity', 0);
                    
                    // Add halo for readability
                    textSelection.clone(true)
                      .lower()
                      .attr('stroke-linejoin', 'round')
                      .attr('stroke-width', 3)
                      .attr('stroke', 'white')
                      .classed('text-halo-light', true);

                    textSelection.clone(true)
                      .lower()
                      .attr('stroke-linejoin', 'round')
                      .attr('stroke-width', 3)
                      .attr('stroke', '#1e293b') // slate-800
                      .classed('text-halo-dark', true);

                    // Apply transition to original text
                    textSelection.transition().duration(duration)
                        .style('fill-opacity', 1);

                    return nodeEnter;
                },
                update => update,
                exit => exit.transition().duration(duration)
                    .attr('transform', sourcePosition)
                    .remove()
            );

        node.transition().duration(duration)
            .attr('transform', nodePosition);
    };

    const toggle = (d: d3.HierarchyNode<RoadmapNode>) => {
        if (d.children) {
            (d as any)._children = d.children;
            d.children = undefined;
        } else {
            d.children = (d as any)._children;
            (d as any)._children = undefined;
        }
    };
    
    treeLayout(root);
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    root.each(d => {
      let dx = isHorizontal ? (d as any).y : d.x;
      let dy = isHorizontal ? d.x : (d as any).y;
      if (dx < x0) x0 = dx;
      if (dx > x1) x1 = dx;
      if (dy < y0) y0 = dy;
      if (dy > y1) y1 = dy;
    });

    const treeWidth = x1 - x0;
    const treeHeight = y1 - y0;
    const scale = Math.min(1, Math.min(width / (treeWidth + 100), height / (treeHeight + 100)));
    
    let translateX, translateY;
    if (isHorizontal) {
        translateX = 60 - x0 * scale;
        translateY = height / 2 - (y0 + treeHeight / 2) * scale;
    } else {
        translateX = width / 2 - (x0 + treeWidth / 2) * scale;
        translateY = 60 - y0 * scale;
    }

    const initialTransform = d3.zoomIdentity.translate(translateX, translateY).scale(scale);
    svg.call(zoom.transform, initialTransform);

    update(root, true);
  };
  
  useLayoutEffect(() => {
    drawChart();
    const observer = new ResizeObserver(drawChart);
    if(containerRef.current) {
        observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <style>{`
        .text-halo-light { display: none; }
        .dark .text-halo-light { display: none; }
        .text-halo-dark { display: none; }
        .dark .text-halo-dark { display: block; }
        html:not(.dark) .text-halo-light { display: block; }
      `}</style>
      <div ref={containerRef} className="w-full h-full">
        <svg ref={svgRef}></svg>
      </div>
      <Modal isOpen={!!selectedNode} onClose={() => setSelectedNode(null)}>
        {selectedNode && (
          <div className="p-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: selectedNode.color }}>{selectedNode.name}</h3>
            {selectedNode.level && (
              <p className="text-sm font-semibold bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 inline-block px-3 py-1 rounded-full mb-4">Level: {selectedNode.level}</p>
            )}
            {selectedNode.details && (
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedNode.details}</p>
            )}
            {selectedNode.certifications && selectedNode.certifications.length > 0 && (
              <div className="mb-4">
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">Certifications</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {selectedNode.certifications.map(cert => (
                    <li key={cert.name}><a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{cert.name}</a></li>
                  ))}
                </ul>
              </div>
            )}
            {selectedNode.resources && selectedNode.resources.length > 0 && (
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">Learning Resources</h4>
                 <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {selectedNode.resources.map(res => (
                    <li key={res.name}><a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{res.name}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};