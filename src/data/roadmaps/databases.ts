import { createNode, createOrganicEdge, RoadmapData } from '../types';

const dbNodes = [
  createNode('db-sql', '🌱 Seed: Relational Databases (SQL)', 'Basics', 'The foundation of data storage.', 'Understanding tables, rows, columns, and relationships. SQL is the universal language of data.', ['SELECT, INSERT, UPDATE, DELETE', 'Primary & Foreign Keys', 'Joins (INNER, LEFT, RIGHT)', 'Normalization (1NF, 2NF, 3NF)'], ['DBeaver', 'pgAdmin'], [], ['SQLBolt', 'Mode SQL Tutorial']),
  createNode('db-pg', '🌿 Sprout: PostgreSQL DBA', 'Core', 'The world\'s most advanced open-source relational database.', 'Mastering PostgreSQL administration, performance tuning, and advanced features like JSONB.', ['Indexes (B-Tree, GIN)', 'Transactions & ACID', 'Replication & High Availability', 'Query Optimization (EXPLAIN)'], ['psql', 'pg_stat_statements'], ['PostgreSQL Associate'], ['PostgreSQL Official Docs', 'Use The Index, Luke']),
  createNode('db-mongo', '🪴 Roots: MongoDB (NoSQL)', 'Core', 'Document-oriented database.', 'Storing data as flexible JSON-like documents. Ideal for rapid development and unstructured data.', ['Collections & Documents', 'Aggregation Pipeline', 'Replica Sets', 'Sharding'], ['MongoDB Compass', 'Mongoose (Node.js)'], ['MongoDB Certified Developer'], ['MongoDB University', 'Mongoose Docs']),
  createNode('db-redis', '🪵 Trunk: Redis', 'Advanced', 'In-memory data structure store.', 'Used as a database, cache, and message broker. Essential for high-performance applications.', ['Key-Value Store', 'Hashes, Lists, Sets', 'Pub/Sub Messaging', 'Eviction Policies (LRU)'], ['Redis CLI', 'RedisInsight'], [], ['Redis University', 'Try Redis']),
  createNode('db-es', '🍃 Branch: Elasticsearch', 'Expert', 'Distributed search and analytics engine.', 'Built on Apache Lucene. Used for full-text search, log analytics, and complex querying at scale.', ['Inverted Index', 'Nodes & Clusters', 'REST APIs', 'Logstash & Kibana (ELK Stack)'], ['Kibana', 'Elastic Cloud'], ['Elastic Certified Engineer'], ['Elastic Documentation', 'Complete Guide to Elasticsearch (Udemy)'])
];

const dbEdges = [
  createOrganicEdge('db-sql', 'db-pg'),
  createOrganicEdge('db-pg', 'db-mongo'),
  createOrganicEdge('db-mongo', 'db-redis'),
  createOrganicEdge('db-redis', 'db-es'),
];

export const databasesRoadmap: RoadmapData = {
  id: 'databases',
  title: 'Databases',
  description: 'A guide to modern databases, from PostgreSQL and MongoDB to Redis and Elasticsearch with organic growth metaphors.',
  nodes: dbNodes,
  edges: dbEdges,
};
