import { createNode, createOrganicEdge, RoadmapData } from '../types';

const blockchainNodes = [
  // ---------------------------------------------------------
  // TIER 1: THE FOUNDATION (START HERE)
  // ---------------------------------------------------------
  createNode(
    'b-start', '🌱 Seed: Blockchain Basics', 'Basics', 
    'The seed of decentralization. The foundational concepts of decentralized networks.', 
    'Before writing smart contracts, you must understand how blockchains work under the hood. Learn cryptography, consensus mechanisms, and distributed ledgers to plant your roots.', 
    ['Cryptography (Hashes, Signatures)', 'Public/Private Keys', 'Consensus Mechanisms (PoW, PoS)', 'Distributed Ledgers', 'Wallets & Transactions'], 
    ['MetaMask', 'Bitcoin Core'], 
    [], 
    ['roadmap.sh/blockchain', 'Bitcoin Whitepaper', 'Ethereum Whitepaper']
  ),
  createNode(
    'b-prog', '🌿 Sprout: General Programming', 'Basics', 
    'Sprouting programming skills. Learn a traditional programming language first.', 
    'Blockchain development requires a strong foundation in general programming. JavaScript/TypeScript are essential for Web3 frontends, while Python/Go are great for backend and infrastructure.', 
    ['JavaScript / TypeScript', 'Python', 'Go', 'Rust', 'C++'], 
    ['Node.js', 'VS Code'], 
    [], 
    ['freeCodeCamp', 'MDN Web Docs']
  ),
  createNode(
    'b-eth', '🪴 Roots: Ethereum & EVM Fundamentals', 'Core', 
    'The roots of Web3. Understanding the world\'s largest smart contract platform.', 
    'Learn how the Ethereum Virtual Machine (EVM) executes code, how gas fees work, and the lifecycle of a transaction.', 
    ['Ethereum Virtual Machine (EVM)', 'Gas & Fees', 'Accounts (EOA vs Contract)', 'Nodes & RPCs', 'Testnets (Sepolia, Holesky)'], 
    ['Infura', 'Alchemy', 'Etherscan'], 
    [], 
    ['Ethereum.org Developer Docs', 'Mastering Ethereum (Book)']
  ),

  // ---------------------------------------------------------
  // TIER 2: SMART CONTRACTS & WEB3
  // ---------------------------------------------------------
  createNode(
    'b-sol', '🪵 Trunk: Solidity & Smart Contracts', 'Core', 
    'The sturdy trunk of smart contracts. Writing the logic that runs on the blockchain.', 
    'Solidity is the primary language for Ethereum smart contracts. Master its syntax, security considerations, and token standards.', 
    ['Solidity Syntax', 'ERC-20 (Fungible Tokens)', 'ERC-721 / ERC-1155 (NFTs)', 'Modifiers & Events', 'Interfaces & Inheritance'], 
    ['Remix IDE', 'OpenZeppelin'], 
    [], 
    ['CryptoZombies', 'Solidity by Example']
  ),
  createNode(
    'b-env', '🍃 Branch: Development Environments', 'Core', 
    'Branching into professional tools. Tools for compiling, testing, and deploying contracts.', 
    'Move away from browser-based IDEs and set up a professional local development environment.', 
    ['Hardhat', 'Foundry', 'Truffle', 'Local Nodes (Hardhat Network, Anvil)'], 
    ['Hardhat', 'Foundry', 'Slither'], 
    [], 
    ['Hardhat Documentation', 'Foundry Book']
  ),
  createNode(
    'b-web3', '🌸 Bloom: Web3 Integration (Frontend)', 'Advanced', 
    'Blooming into dApps. Connecting web applications to the blockchain.', 
    'Learn how to build decentralized applications (dApps) by connecting a React/Next.js frontend to your smart contracts.', 
    ['Ethers.js', 'Web3.js', 'Viem', 'Wagmi', 'Wallet Connection (RainbowKit)'], 
    ['React', 'Viem', 'Wagmi', 'RainbowKit'], 
    [], 
    ['Buildspace', 'Wagmi Docs']
  ),
  createNode(
    'b-infra', '🍄 Mycelium: Web3 Infrastructure (Backend)', 'Advanced', 
    'The hidden mycelium of Web3. Indexing blockchain data and listening to events.', 
    'Smart contracts cannot easily query historical data. Learn to build Subgraphs (The Graph) using GraphQL, and set up Webhooks to listen for on-chain events.', 
    ['The Graph (Subgraphs)', 'GraphQL', 'Alchemy/Infura Webhooks', 'Moralis', 'IPFS / Arweave'], 
    ['The Graph', 'Apollo', 'IPFS'], 
    [], 
    ['The Graph Docs', 'Moralis Web3']
  ),

  // ---------------------------------------------------------
  // TIER 3: ADVANCED SMART CONTRACTS & SECURITY
  // ---------------------------------------------------------
  createNode(
    'b-sol-adv', '🌲 Deep Roots: Advanced Smart Contracts', 'Expert', 
    'Deep roots in EVM. Mastering EVM internals and complex architectures.', 
    'Dive deep into EVM memory layout, storage slots, Proxy Patterns (EIP-1967), Diamond Standard (EIP-2535), and writing inline assembly (Yul) for hyper-optimized gas usage.', 
    ['EVM Memory & Storage Layout', 'Upgradeable Contracts (Proxies)', 'Diamond Pattern (EIP-2535)', 'Yul & Inline Assembly', 'Gas Optimization Techniques'], 
    ['OpenZeppelin Upgrades', 'Yul'], 
    [], 
    ['EVM Codes', 'OpenZeppelin Docs']
  ),
  createNode(
    'b-test', '🛡️ Bark: Advanced Testing & CI/CD', 'Expert', 
    'The protective bark of testing. Catching edge cases before deployment.', 
    'Move beyond simple unit tests. Master Property-based testing, Fuzzing, and Invariant testing using Foundry to catch edge cases before deployment.', 
    ['Fuzz Testing', 'Invariant Testing', 'Property-Based Testing', 'CI/CD for Smart Contracts (GitHub Actions)', 'Mainnet Forking'], 
    ['Foundry (Forge)', 'Echidna'], 
    [], 
    ['Foundry Book - Testing', 'Trail of Bits Blog']
  ),
  createNode(
    'b-sec', '🦅 Predator Defense: Smart Contract Security', 'Expert', 
    'Predator defense for smart contracts. Protecting millions of dollars in value from hackers.', 
    'Smart contracts are immutable and hold real value. You must learn common attack vectors and how to audit code.', 
    ['Reentrancy Attacks', 'Front-Running (MEV)', 'Integer Overflow/Underflow', 'Access Control Flaws', 'Auditing Tools'], 
    ['Slither', 'MythX', 'Echidna'], 
    [], 
    ['Smart Contract Security Registry (SWC)', 'Ethernaut (OpenZeppelin)']
  ),

  // ---------------------------------------------------------
  // TIER 4: DEFI & ALTERNATIVE ECOSYSTEMS
  // ---------------------------------------------------------
  createNode(
    'b-defi', '🍯 Nectar: DeFi Mechanics & Architecture', 'Expert', 
    'The sweet nectar of DeFi. The math and code behind Decentralized Finance.', 
    'Understand the math and code behind Automated Market Makers (AMMs), Constant Product Formula (x*y=k), Flash Loans, and Collateralized Debt Positions (CDPs).', 
    ['Automated Market Makers (AMMs)', 'Liquidity Pools', 'Flash Loans', 'Yield Farming & Staking', 'Lending Protocols (Aave, Compound)'], 
    ['Uniswap V2/V3 Core', 'Aave V3'], 
    [], 
    ['DeFi Developer Roadmap', 'Uniswap Docs']
  ),
  createNode(
    'b-alt-l1', '🌴 Exotic Flora: Alternative L1s (Solana, Move)', 'Advanced', 
    'Exotic flora of alternative chains. Exploring non-EVM blockchains.', 
    'Ethereum isn\'t the only player. Learn Rust and the Solana Account Model (PDAs, CPIs) or Move (Aptos/Sui) to build high-throughput, low-latency programs.', 
    ['Solana Architecture (Accounts, PDAs)', 'Rust for Solana', 'Anchor Framework', 'Move Language (Aptos/Sui)', 'Cosmos SDK (Go)'], 
    ['Rust', 'Anchor', 'Solana CLI'], 
    [], 
    ['Solana Cookbook', 'Move Book']
  ),
  createNode(
    'b-zk', '🕸️ Spiderweb: Zero-Knowledge Proofs (ZKPs)', 'Expert', 
    'A spiderweb of cryptography. The holy grail of scaling and privacy.', 
    'Learn the math behind zk-SNARKs/STARKs, write circuits in Circom, and explore zkEVMs (Scroll, zkSync) and Cairo (Starknet).', 
    ['zk-SNARKs & zk-STARKs', 'Circom & SnarkJS', 'zkEVMs (Polygon zkEVM, Scroll)', 'Cairo (Starknet)', 'Privacy-Preserving dApps'], 
    ['Circom', 'Cairo', 'SnarkJS'], 
    [], 
    ['ZK Hack', 'Circom Documentation']
  ),

  // ---------------------------------------------------------
  // TIER 5: THE END GOAL
  // ---------------------------------------------------------
  createNode(
    'b-end', '🌳 Canopy: Principal Web3 / Blockchain Engineer', 'Expert', 
    'The canopy of Web3 architecture. Architecting decentralized protocols and ecosystems.', 
    'You design secure, scalable decentralized applications, create novel tokenomics, and contribute to protocol-level blockchain development.', 
    ['Protocol Architecture', 'Tokenomics Design', 'Cross-Chain Bridges', 'Enterprise Blockchain Solutions', 'Technical Leadership'], 
    ['Rust', 'Go', 'Solidity', 'Yul'], 
    [], 
    ['Real-world Web3 Experience', 'Ethereum Improvement Proposals (EIPs)']
  )
];

const blockchainEdges = [
  // Tier 1
  createOrganicEdge('b-start', 'b-prog'),
  createOrganicEdge('b-prog', 'b-eth'),
  
  // Branching from EVM
  createOrganicEdge('b-eth', 'b-sol'),
  createOrganicEdge('b-eth', 'b-alt-l1'), // Alternative L1s branch

  // Tier 2: Solidity & Dev Env
  createOrganicEdge('b-sol', 'b-env'),
  
  // Branching from Dev Env
  createOrganicEdge('b-env', 'b-web3'), // Frontend
  createOrganicEdge('b-env', 'b-infra'), // Backend
  createOrganicEdge('b-env', 'b-sol-adv'), // Advanced Solidity

  // Tier 3: Advanced Smart Contracts & Security
  createOrganicEdge('b-sol-adv', 'b-test'),
  createOrganicEdge('b-test', 'b-sec'),
  
  // Tier 4: DeFi & ZK
  createOrganicEdge('b-sec', 'b-defi'),
  createOrganicEdge('b-defi', 'b-zk'),

  // Converging to End Goal
  createOrganicEdge('b-zk', 'b-end'),
  createOrganicEdge('b-alt-l1', 'b-end'),
  createOrganicEdge('b-web3', 'b-end'),
  createOrganicEdge('b-infra', 'b-end'),
];

export const blockchainRoadmap: RoadmapData = {
  id: 'blockchain',
  title: 'Blockchain & Web3 Development',
  description: 'A comprehensive guide to becoming a Blockchain Developer. Covers cryptography, smart contracts, Solidity, Web3 integration, DeFi, ZKPs, and security with organic growth metaphors.',
  nodes: blockchainNodes,
  edges: blockchainEdges,
};
