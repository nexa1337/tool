import { Edge, Node } from '@xyflow/react';

export type RoadmapCategory = 'cybersecurity' | 'it' | 'cs' | 'ai' | 'iot' | 'blockchain' | 'game' | 'mobile' | 'devops' | 'languages' | 'frameworks' | 'webdev' | 'databases' | 'design' | 'management' | 'best-practices' | '3d-design';

export interface NodeData {
  label: string;
  category: string;
  description: string;
  details?: string;
  topics?: string[];
  tools?: string[];
  certifications?: string[];
  resources?: string[];
}

export interface RoadmapData {
  id: RoadmapCategory;
  title: string;
  description: string;
  nodes: Node[];
  edges: Edge[];
}

export const createNode = (
  id: string, 
  label: string, 
  category: string, 
  description: string = '',
  details: string = '',
  topics: string[] = [],
  tools: string[] = [],
  certifications: string[] = [],
  resources: string[] = []
): Node => ({
  id,
  type: 'custom',
  position: { x: 0, y: 0 },
  data: { label, category, description, details, topics, tools, certifications, resources },
});

export const createEdge = (source: string, target: string, animated = false): Edge => ({
  id: `e-${source}-${target}`,
  source,
  target,
  animated,
  type: 'smoothstep',
  style: { stroke: '#64748b', strokeWidth: 2 },
});

export const createOrganicEdge = (source: string, target: string, animated = true): Edge => {
  const edge = createEdge(source, target, animated);
  edge.type = 'default'; // Bezier curve for an organic look
  edge.style = { stroke: '#10b981', strokeWidth: 2.5 }; // Emerald green color
  return edge;
};
