import { createNode, createOrganicEdge, RoadmapData } from '../types';

const iotNodes = [
  // ---------------------------------------------------------
  // TIER 1: THE FOUNDATION (START HERE)
  // ---------------------------------------------------------
  createNode(
    'io-start', '🌱 Seed: Basic Electronics', 'Basics', 
    'The seed of hardware. Understand the physical components that make up IoT devices.', 
    'IoT bridges the physical and digital worlds. You must start by understanding electricity, circuits, and electronic components to plant your roots.', 
    ['Ohm\'s Law (Voltage, Current, Resistance)', 'Circuit Diagrams', 'Resistors, Capacitors, Diodes', 'Breadboarding & Soldering', 'Multimeter Usage'], 
    ['Multimeter', 'Breadboard', 'Soldering Iron'], 
    [], 
    ['SparkFun Tutorials', 'Adafruit Learning System', 'Make: Electronics (Book)']
  ),
  createNode(
    'io-lab', '🌿 Sprout: Build an IoT Hardware Lab', 'Basics', 
    'Sprout your hardware lab. Set up a hardware workbench and local server.', 
    'Create a physical space to build circuits and a local digital environment to process the data they generate.', 
    ['Workbench Setup (ESD Safety)', 'Local MQTT Broker (Mosquitto)', 'Home Assistant Setup', 'Node-RED for Automation'], 
    ['Home Assistant', 'Node-RED', 'Mosquitto MQTT', 'Raspberry Pi'], 
    [], 
    ['Home Assistant Docs', 'Node-RED Tutorials']
  ),
  createNode(
    'io-mcu', '🪴 Roots: Microcontrollers & Sensors', 'Basics', 
    'The roots of control. The brains of simple IoT devices (Arduino, ESP32).', 
    'Microcontrollers are tiny computers that read sensors and control motors. Learn how to interface with the physical world.', 
    ['Microcontroller Architecture', 'GPIO Pins', 'Analog vs Digital Signals', 'PWM (Pulse Width Modulation)', 'ADC/DAC'], 
    ['Arduino IDE', 'ESP32', 'Raspberry Pi Pico'], 
    [], 
    ['Random Nerd Tutorials', 'DroneBot Workshop (YouTube)']
  ),
  createNode(
    'io-cpp', '🪵 Trunk: Embedded C/C++ & Python', 'Core', 
    'The sturdy trunk of embedded software. Writing code that runs directly on hardware.', 
    'Hardware is useless without software. Learn the languages used to program microcontrollers efficiently.', 
    ['C/C++ for Embedded Systems', 'MicroPython / CircuitPython', 'Reading Sensors (I2C, SPI, UART)', 'Controlling Actuators (Motors, Relays)', 'Interrupts & Timers'], 
    ['C/C++', 'MicroPython', 'PlatformIO'], 
    [], 
    ['PlatformIO Documentation', 'Fastbit Embedded Brain Academy']
  ),
  createNode(
    'io-net', '🪵 Trunk: Connectivity & Protocols', 'Core', 
    'The trunk of connectivity. How IoT devices talk to each other and the internet.', 
    'The "Internet" part of IoT. Learn the lightweight protocols designed for devices with low power and low bandwidth.', 
    ['WiFi & Ethernet', 'Bluetooth Low Energy (BLE)', 'MQTT (Message Queuing Telemetry Transport)', 'HTTP/REST APIs', 'LoRaWAN & Zigbee'], 
    ['Mosquitto MQTT', 'Postman', 'Wireshark'], 
    ['Cisco Certified Network Associate (CCNA)'], 
    ['HiveMQ MQTT Essentials', 'Bluetooth SIG']
  ),

  // ---------------------------------------------------------
  // TIER 2: PATH DIVERGENCE (CHOOSE YOUR SPECIALIZATION)
  // ---------------------------------------------------------

  // --- PATH A: HARDWARE & FIRMWARE ENGINEERING ---
  createNode(
    'io-fw1', '🌲 Deep Roots: Advanced Firmware & RTOS', 'Specialization', 
    'Deep roots in real-time processing. Writing complex, real-time software for microcontrollers.', 
    'When simple loops aren\'t enough, you need a Real-Time Operating System to manage multiple tasks concurrently.', 
    ['FreeRTOS', 'Task Scheduling & Priorities', 'Mutexes & Semaphores', 'Memory Management on Bare Metal', 'Low-Power Optimization (Deep Sleep)'], 
    ['FreeRTOS', 'Zephyr RTOS', 'JTAG/SWD Debuggers'], 
    [], 
    ['Mastering RTOS (Udemy)', 'Zephyr Project Docs']
  ),
  createNode(
    'io-fw2', '🕸️ Spiderweb: PCB Design & Manufacturing', 'Expert', 
    'A spiderweb of circuits. Designing custom circuit boards for mass production.', 
    'Moving from a messy breadboard to a professional Printed Circuit Board (PCB).', 
    ['Schematic Capture', 'PCB Layout & Routing', 'Gerber Files', 'Surface Mount Technology (SMT)', 'Design for Manufacturing (DFM)'], 
    ['KiCad', 'Altium Designer', 'EasyEDA'], 
    [], 
    ['Phil\'s Lab (YouTube)', 'Contextual Electronics']
  ),

  // --- PATH B: EDGE COMPUTING & AI ---
  createNode(
    'io-edge1', '🌸 Bloom: Single Board Computers (SBCs)', 'Specialization', 
    'Blooming into edge computing. More powerful devices capable of running full operating systems.', 
    'When a microcontroller isn\'t enough, you use an SBC like a Raspberry Pi to act as an edge gateway.', 
    ['Raspberry Pi Setup', 'Linux Command Line Basics', 'Python for IoT', 'Running Background Services (Systemd)', 'Interfacing GPIO with Python'], 
    ['Raspberry Pi', 'Raspberry Pi OS', 'Python'], 
    [], 
    ['Raspberry Pi Foundation', 'ExplainingComputers (YouTube)']
  ),
  createNode(
    'io-edge2', '🍯 Nectar: Edge AI & TinyML', 'Expert', 
    'The sweet nectar of TinyML. Running machine learning models directly on IoT devices.', 
    'Processing data locally to save bandwidth, reduce latency, and preserve privacy (e.g., wake-word detection, predictive maintenance).', 
    ['TinyML Concepts', 'Model Quantization & Pruning', 'TensorFlow Lite for Microcontrollers', 'Audio/Vision Processing on Edge', 'Anomaly Detection'], 
    ['TensorFlow Lite', 'Edge Impulse', 'Arduino Nano 33 BLE Sense'], 
    [], 
    ['TinyML (Book by Pete Warden)', 'Edge Impulse Coursera']
  ),

  // --- PATH C: CLOUD & IOT SECURITY ---
  createNode(
    'io-cloud', '🌴 Exotic Flora: IoT Cloud Architecture', 'Specialization', 
    'Exotic flora of the cloud. Managing fleets of devices and processing their data in the cloud.', 
    'Enterprise IoT requires managing thousands of devices securely. Learn how to ingest telemetry data and build dashboards.', 
    ['Device Provisioning & Registry', 'Telemetry Data Ingestion', 'Rules Engines & Routing', 'Data Visualization', 'Digital Twins'], 
    ['AWS IoT Core', 'Azure IoT Hub', 'ThingsBoard', 'Grafana'], 
    ['AWS Certified IoT Specialty'], 
    ['AWS IoT Documentation', 'ThingsBoard Tutorials']
  ),
  createNode(
    'io-sec', '🦅 Predator Defense: IoT Security & Hardware Hacking', 'Expert', 
    'Predator defense for hardware. Protecting devices from physical and network attacks.', 
    'IoT devices are notoriously insecure. Learn how to lock down hardware, encrypt communications, and securely update firmware.', 
    ['Hardware Root of Trust', 'Secure Boot', 'TLS/SSL for IoT (mTLS)', 'Firmware Over-The-Air (OTA) Security', 'UART/JTAG Exploitation'], 
    ['OpenSSL', 'TPM', 'Logic Analyzer', 'Bus Pirate'], 
    ['Certified IoT Security Practitioner (CIoTSP)'], 
    ['OWASP Internet of Things', 'Hardware Hacking Handbook']
  ),

  // ---------------------------------------------------------
  // TIER 3: THE END GOALS
  // ---------------------------------------------------------
  createNode(
    'io-end-hw', '🌳 Canopy: Embedded Systems Engineer', 'Expert', 
    'The canopy of embedded engineering. Designing the physical hardware and low-level firmware.', 
    'You design custom PCBs, write highly optimized C/C++ code, and bring physical products to life for mass manufacturing.', 
    ['Hardware Architecture', 'Firmware Architecture', 'Compliance Testing (FCC/CE)', 'Supply Chain Management'], 
    ['Oscilloscopes', 'Logic Analyzers', 'KiCad'], 
    [], 
    ['Real-world Engineering Experience']
  ),
  createNode(
    'io-end-arch', '🌳 Canopy: Chief IoT Solutions Architect', 'Expert', 
    'The canopy of IoT architecture. Designing end-to-end IoT systems from sensor to cloud.', 
    'You design complex systems that span custom hardware, edge computing gateways, and massive cloud data pipelines.', 
    ['End-to-End System Architecture', 'Fleet Management at Scale', 'Data Pipeline Design', 'Security Posture Management'], 
    ['AWS/Azure IoT', 'Kubernetes', 'Enterprise Architecture Tools'], 
    ['AWS Certified Solutions Architect - Professional'], 
    ['Real-world Architecture Experience', 'IoT Architecture Patterns']
  )
];

const iotEdges = [
  // Foundations
  createOrganicEdge('io-start', 'io-lab'),
  createOrganicEdge('io-lab', 'io-mcu'),
  createOrganicEdge('io-mcu', 'io-cpp'),
  createOrganicEdge('io-cpp', 'io-net'),

  // Branching to Paths
  createOrganicEdge('io-net', 'io-fw1'),    // To Firmware/Hardware
  createOrganicEdge('io-net', 'io-edge1'),  // To Edge/AI
  createOrganicEdge('io-net', 'io-cloud'),  // To Cloud/Security

  // Firmware Path
  createOrganicEdge('io-fw1', 'io-fw2'),
  createOrganicEdge('io-fw2', 'io-end-hw'), // End Goal 1

  // Edge/AI Path
  createOrganicEdge('io-edge1', 'io-edge2'),
  createOrganicEdge('io-edge2', 'io-end-arch'), // End Goal 2

  // Cloud/Security Path
  createOrganicEdge('io-cloud', 'io-sec'),
  createOrganicEdge('io-sec', 'io-end-arch'), // End Goal 2
];

export const iotRoadmap: RoadmapData = {
  id: 'iot',
  title: 'Internet of Things',
  description: 'A comprehensive guide featuring distinct paths for Hardware/Firmware, Edge AI, and Cloud Architecture with organic growth metaphors.',
  nodes: iotNodes,
  edges: iotEdges,
};
