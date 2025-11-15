
import type { LucideIcon } from 'lucide-react';

export interface RoadmapNode {
  name: string;
  color: string;
  children?: RoadmapNode[];
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  details?: string;
  resources?: { name: string; url: string }[];
  certifications?: { name: string; url: string }[];
}

export type ToolStatus = 'Free' | 'Premium' | 'Freemium' | 'Beta' | 'Paid';

export interface Tool {
  name:string;
  description: string;
  link: string;
  category: string;
  status: ToolStatus;
  tags: string[];
  logo: string;
}

export interface Category {
  name: string;
  Icon: LucideIcon;
}

export interface Ebook {
  title: string;
  coverImage: string;
  rating: number; // e.g., 4.5
  price: number; // e.g., 29.99
  buyLink: string;
  summaryLink: string;
  pages: number;
  category: string;
}

export type EbookCategory = Category;

export type PlatformCategory = 'Free with Certificate' | 'Free without Certificate' | 'Paid with Certificate' | 'Open Courseware';

export interface LearningPlatform {
  name: string;
  description: string;
  link: string;
  logo: string;
  category: PlatformCategory;
  tags: string[];
}

export interface LearningCategory {
    name: PlatformCategory;
    Icon: LucideIcon;
}
