import { RoadmapCategory, RoadmapData, NodeData } from './types';
import { cybersecurityRoadmap } from './roadmaps/cybersecurity';
import { itRoadmap } from './roadmaps/it';
import { csRoadmap } from './roadmaps/cs';
import { aiRoadmap } from './roadmaps/ai';
import { iotRoadmap } from './roadmaps/iot';
import { blockchainRoadmap } from './roadmaps/blockchain';
import { gameRoadmap } from './roadmaps/game';
import { mobileRoadmap } from './roadmaps/mobile';
import { devopsRoadmap } from './roadmaps/devops';
import { languagesRoadmap } from './roadmaps/languages';
import { frameworksRoadmap } from './roadmaps/frameworks';
import { webdevRoadmap } from './roadmaps/webdev';
import { databasesRoadmap } from './roadmaps/databases';
import { designRoadmap } from './roadmaps/design';
import { managementRoadmap } from './roadmaps/management';
import { bestPracticesRoadmap } from './roadmaps/best-practices';
import { threeDDesignRoadmap } from './roadmaps/3d-design';

export type { RoadmapCategory, RoadmapData, NodeData };

export const roadmaps: Record<RoadmapCategory, RoadmapData> = {
  cybersecurity: cybersecurityRoadmap,
  it: itRoadmap,
  cs: csRoadmap,
  ai: aiRoadmap,
  iot: iotRoadmap,
  blockchain: blockchainRoadmap,
  game: gameRoadmap,
  mobile: mobileRoadmap,
  devops: devopsRoadmap,
  languages: languagesRoadmap,
  frameworks: frameworksRoadmap,
  webdev: webdevRoadmap,
  databases: databasesRoadmap,
  design: designRoadmap,
  management: managementRoadmap,
  'best-practices': bestPracticesRoadmap,
  '3d-design': threeDDesignRoadmap,
};
