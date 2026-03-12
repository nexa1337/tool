import { RoadmapData, createNode, createOrganicEdge } from '../types';

export const mobileRoadmap: RoadmapData = {
  id: 'mobile',
  title: 'Mobile Development',
  description: 'A complete roadmap to becoming a Mobile App Developer, covering Android, iOS, and cross-platform frameworks with organic growth metaphors.',
  nodes: [
    createNode('m-1', '🌱 Seed: Programming Fundamentals', 'Basics', 'Learn the basics of programming, data structures, and algorithms.', 'The foundation for any mobile developer. Master variables, loops, and object-oriented programming.', ['Variables', 'Control Flow', 'OOP', 'Data Structures', 'Algorithms'], ['VS Code', 'IntelliJ IDEA'], [], ['CS50', 'freeCodeCamp']),
    createNode('m-2', '🌿 Sprout: UI/UX Design Principles', 'Basics', 'Understand how to design intuitive and beautiful mobile interfaces.', 'Before coding, understand what makes a good app. Learn about touch targets, typography, and spacing.', ['Material Design', 'Human Interface Guidelines', 'Wireframing', 'Prototyping'], ['Figma', 'Adobe XD', 'Sketch'], [], ['Refactoring UI', 'Apple HIG', 'Google Material Design']),
    createNode('m-3', '🪴 Roots: Choose Your Path', 'Core', 'Decide between Native (iOS/Android) or Cross-Platform development.', 'Native offers best performance; cross-platform offers faster development. Choose the root system for your career.', ['Native vs Cross-Platform', 'Platform Guidelines', 'App Lifecycles'], [], [], ['Mobile Dev Path Comparison']),
    
    // Native Paths
    createNode('m-4', '🍃 Branch: Android Development', 'Specialization', 'Build native apps for Android using Kotlin.', 'The dominant mobile OS globally. Deep dive into the Android ecosystem.', ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Activities/Fragments', 'Coroutines'], ['Android Studio', 'Gradle'], ['Associate Android Developer'], ['Android Developers Documentation', 'Kotlin Koans']),
    createNode('m-5', '🍃 Branch: iOS Development', 'Specialization', 'Build native apps for Apple devices using Swift.', 'Highly lucrative and standardized ecosystem. Master the Apple way.', ['Swift', 'Xcode', 'SwiftUI', 'UIKit', 'Combine'], ['Xcode', 'CocoaPods', 'SwiftPM'], ['Apple Certified iOS Developer'], ['100 Days of SwiftUI', 'Ray Wenderlich']),
    
    // Cross-Platform Paths
    createNode('m-6', '🍃 Branch: Flutter', 'Specialization', 'Build natively compiled applications for mobile from a single codebase using Dart.', 'Google\'s UI toolkit for beautiful, fast apps. Everything is a widget.', ['Dart', 'Widgets', 'State Management (Riverpod/Provider)', 'Animations'], ['Flutter SDK', 'VS Code', 'Android Studio'], [], ['Flutter Documentation', 'Reso Coder']),
    createNode('m-7', '🍃 Branch: React Native', 'Specialization', 'Build mobile apps using React and JavaScript/TypeScript.', 'Meta\'s framework, great for web developers transitioning to mobile.', ['JavaScript/TypeScript', 'React Hooks', 'Native Modules', 'React Navigation'], ['Expo', 'Metro', 'React Native CLI'], [], ['React Native Docs', 'William Candillon (YouTube)']),
    
    // Common Advanced Topics
    createNode('m-8', '🪵 Trunk: State Management', 'Advanced', 'Managing data flow and UI state in complex applications.', 'Crucial for maintainable mobile apps. The trunk that holds your app\'s data together.', ['Redux', 'MobX', 'BLoC', 'Provider', 'ViewModel', 'Zustand'], ['Redux DevTools'], [], ['State Management Comparisons']),
    createNode('m-9', '🌲 Deep Roots: Networking & APIs', 'Advanced', 'Connecting your app to the internet and backend services.', 'Fetching and sending data securely. Reaching out to external sources.', ['REST APIs', 'GraphQL', 'WebSockets', 'JSON Parsing', 'OAuth'], ['Retrofit', 'Alamofire', 'Dio', 'Axios', 'Postman'], [], ['API Integration Guides']),
    createNode('m-10', '🌲 Deep Roots: Local Storage & Databases', 'Advanced', 'Storing data on the device for offline use and caching.', 'Improving app performance and user experience by keeping data close.', ['SQLite', 'Room', 'CoreData', 'Realm', 'SharedPreferences/UserDefaults', 'Hive'], ['DB Browser for SQLite'], [], ['Offline-First App Architecture']),
    
    createNode('m-11', '🍯 Nectar: Animations & Gestures', 'Advanced', 'Adding delight with smooth animations and intuitive touch gestures.', 'The sweet nectar that makes an app feel premium and responsive.', ['Lottie', 'Reanimated', 'MotionLayout', 'CoreAnimation', 'Gesture Handlers'], ['LottieFiles', 'Rive'], [], ['React Native Reanimated Docs', 'SwiftUI Animations']),
    createNode('m-12', '🛡️ Bark: Background Processing & Services', 'Advanced', 'Running tasks when the app is not in the foreground.', 'Protecting the user experience while downloading data or playing audio in the background.', ['WorkManager', 'Background Tasks', 'Push Notifications', 'Location Services'], ['Firebase Cloud Messaging (FCM)', 'APNs'], [], ['Android Background Processing Guide']),
    createNode('m-13', '🌴 Exotic Flora: Wearables & IoT Integration', 'Specialization', 'Extending your app to smartwatches and connected devices.', 'Branching out into exotic new hardware ecosystems.', ['WatchOS', 'Wear OS', 'Bluetooth Low Energy (BLE)', 'HealthKit/Google Fit'], ['CoreBluetooth'], [], ['Apple WatchOS Docs', 'Wear OS Guides']),
    
    // Expert
    createNode('m-14', '🦅 Predator Defense: Mobile App Security', 'Expert', 'Securing your app against reverse engineering and data theft.', 'Defending against malicious actors trying to exploit your app.', ['Certificate Pinning', 'Keystore/Keychain', 'Code Obfuscation', 'Biometrics', 'Root/Jailbreak Detection'], ['ProGuard', 'R8', 'Frida (for testing)'], [], ['OWASP Mobile Top 10']),
    createNode('m-15', '🕸️ Spiderweb: Testing & QA', 'Expert', 'Ensuring your app is bug-free across thousands of devices.', 'Weaving a safety net of tests to catch bugs before users do.', ['Unit Testing', 'UI Testing', 'Integration Testing', 'Mocking'], ['JUnit', 'XCTest', 'Detox', 'Appium', 'Mockito'], [], ['Testing Fundamentals']),
    createNode('m-16', '🌳 Canopy: CI/CD & App Store Deployment', 'Expert', 'Automating the build process and publishing to app stores.', 'The towering achievement: getting your app into the hands of millions of users.', ['App Store Connect', 'Google Play Console', 'Code Signing', 'Over-The-Air (OTA) Updates'], ['Fastlane', 'Bitrise', 'GitHub Actions', 'CodePush'], [], ['Fastlane Documentation', 'Continuous Delivery for Mobile']),
  ],
  edges: [
    createOrganicEdge('m-1', 'm-2'),
    createOrganicEdge('m-2', 'm-3'),
    
    // Branches
    createOrganicEdge('m-3', 'm-4'),
    createOrganicEdge('m-3', 'm-5'),
    createOrganicEdge('m-3', 'm-6'),
    createOrganicEdge('m-3', 'm-7'),
    
    // Convergence to State Management
    createOrganicEdge('m-4', 'm-8'),
    createOrganicEdge('m-5', 'm-8'),
    createOrganicEdge('m-6', 'm-8'),
    createOrganicEdge('m-7', 'm-8'),
    
    // Core App Features
    createOrganicEdge('m-8', 'm-9'),
    createOrganicEdge('m-9', 'm-10'),
    createOrganicEdge('m-10', 'm-11'),
    createOrganicEdge('m-11', 'm-12'),
    
    // Specializations & Security
    createOrganicEdge('m-12', 'm-13'),
    createOrganicEdge('m-12', 'm-14'),
    
    // Testing & Deployment
    createOrganicEdge('m-14', 'm-15'),
    createOrganicEdge('m-15', 'm-16'),
  ],
};
