import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  Panel,
  BackgroundVariant,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { X, Wrench, Award, BookOpen, ListChecks, ExternalLink, Maximize, Minimize, Eye, EyeOff, BrainCircuit } from 'lucide-react';

import CustomNode from './CustomNode';
import { getLayoutedElements } from '../utils/layout';
import { RoadmapData, NodeData } from '../data/roadmaps';
import QuizModal from './QuizModal';

const nodeTypes = {
  custom: CustomNode,
};

interface RoadmapGraphProps {
  roadmap: RoadmapData;
}

function RoadmapGraphInner({ roadmap }: RoadmapGraphProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeData, setSelectedNodeData] = useState<NodeData | null>(null);
  const [isUIVisible, setIsUIVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { fitView } = useReactFlow();

  useEffect(() => {
    // Layout the nodes using dagre
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      roadmap.nodes,
      roadmap.edges,
      'TB' // Top to Bottom
    );

    setNodes([...layoutedNodes]);
    setEdges([...layoutedEdges]);
    // Close panel if roadmap changes
    setSelectedNodeData(null);
    
    // Fit view after a short delay to ensure nodes are rendered
    setTimeout(() => {
      fitView({ padding: 0.2, duration: 800, minZoom: 0.1, maxZoom: 1 });
    }, 100);
  }, [roadmap, setNodes, setEdges, fitView]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeData(node.data as unknown as NodeData);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-zinc-50 dark:bg-zinc-950 rounded-none lg:rounded-2xl overflow-hidden border-0 lg:border border-zinc-200 dark:border-zinc-800 shadow-none lg:shadow-sm relative flex">
      
      {/* Graph Area */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          minZoom={0.1}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
          className="bg-zinc-50 dark:bg-zinc-950"
        >
          {isUIVisible && (
            <Panel position="top-left" className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm m-4 max-w-sm hidden sm:block pointer-events-none">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{roadmap.title}</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{roadmap.description}</p>
            </Panel>
          )}

          <Panel position="top-right" className="flex flex-col gap-2 m-4 z-50">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 active:scale-95 mb-2"
            >
              <BrainCircuit className="w-5 h-5" />
              Take Quiz
            </button>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setIsUIVisible(!isUIVisible)}
                className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md shadow-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center"
                title={isUIVisible ? "Hide UI" : "Show UI"}
              >
                {isUIVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md shadow-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </Panel>
          
          <Controls position="bottom-right" className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 fill-zinc-600 dark:fill-zinc-400 m-4 z-50" />
          
          {isUIVisible && (
            <MiniMap 
              nodeColor={(node) => {
                switch (node.data?.category) {
                  case 'Basics': return '#10b981'; // emerald-500
                  case 'Core': return '#3b82f6'; // blue-500
                  case 'Specialization': return '#a855f7'; // purple-500
                  case 'Advanced': return '#f97316'; // orange-500
                  case 'Expert': return '#f43f5e'; // rose-500
                  default: return '#71717a'; // zinc-500
                }
              }}
              maskColor="rgba(0, 0, 0, 0.1)"
              position="bottom-right"
              className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hidden md:block !m-4 !mb-40 z-40"
            />
          )}

          <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#a1a1aa" className="opacity-30" />
          
          {isUIVisible && (
            <Panel position="bottom-left" className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm m-4 max-w-xs hidden sm:block pointer-events-none z-40">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">Organic Index</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5"><span className="text-base">🌱</span> Seed (Start)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🌿</span> Sprout (Basics)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🪴</span> Roots (Core)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🪵</span> Trunk (Main Tech)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🍃</span> Branch (Tools)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🌸</span> Bloom (Frontend)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🍄</span> Mycelium (Backend)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🌲</span> Deep Roots (Adv.)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🛡️</span> Bark (Testing/CI)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🦅</span> Defense (Security)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🍯</span> Nectar (Specialized)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🌴</span> Exotic Flora (Alt)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🕸️</span> Spiderweb (Complex)</div>
              <div className="flex items-center gap-1.5"><span className="text-base">🌳</span> Canopy (End Goal)</div>
            </div>
          </Panel>
          )}
        </ReactFlow>
      </div>

      {/* Slide-over Details Panel */}
      {selectedNodeData && (
        <>
          {/* Overlay for mobile */}
          <div 
            className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setSelectedNodeData(null)}
          />
          
          <div className="absolute top-0 right-0 h-full w-full md:w-96 bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                  {selectedNodeData.category}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                  {selectedNodeData.label}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedNodeData(null)}
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Description */}
              <section>
                <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold">Overview</h4>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedNodeData.details || selectedNodeData.description}
                </p>
              </section>

              {/* Topics */}
              {selectedNodeData.topics && selectedNodeData.topics.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100">
                    <ListChecks className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-semibold">Key Topics to Learn</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedNodeData.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Tools */}
              {selectedNodeData.tools && selectedNodeData.tools.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100">
                    <Wrench className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold">Tools & Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNodeData.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Certifications */}
              {selectedNodeData.certifications && selectedNodeData.certifications.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100">
                    <Award className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold">Relevant Certifications</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNodeData.certifications.map((cert, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 rounded-md"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Resources */}
              {selectedNodeData.resources && selectedNodeData.resources.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100">
                    <ExternalLink className="w-5 h-5 text-sky-500" />
                    <h4 className="font-semibold">Learning Resources</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    {selectedNodeData.resources.map((resource, idx) => (
                      <div 
                        key={idx}
                        className="px-3 py-2 text-sm bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 rounded-lg flex items-center gap-2"
                      >
                        <span className="truncate">{resource}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>
          </div>
        </>
      )}

      {isQuizOpen && (
        <QuizModal 
          categoryId={roadmap.id} 
          categoryName={roadmap.title} 
          onClose={() => setIsQuizOpen(false)} 
        />
      )}
    </div>
  );
}

export default function RoadmapGraph({ roadmap }: RoadmapGraphProps) {
  return (
    <ReactFlowProvider>
      <RoadmapGraphInner roadmap={roadmap} />
    </ReactFlowProvider>
  );
}
