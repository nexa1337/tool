import { createNode, createOrganicEdge, RoadmapData } from '../types';

const threeDNodes = [
  // Phase 1: Pre-Production
  createNode(
    '3d-concept', '🌱 Seed: Concept & Pre-vis', 'Basics', 
    'The blueprint of 3D creation.', 
    'Before modeling begins, artists gather references, create 2D concept art, and build low-detail blockouts (pre-visualization) to plan scale, composition, and design.', 
    ['Reference Gathering', '2D Concept Art', 'Color Theory', 'Composition', 'Blockouts / Whiteboxing', 'Storyboarding'], 
    ['PureRef', 'Photoshop', 'Krita', 'Procreate', 'Miro'], 
    [], 
    ['FZD School of Design', 'ArtStation Learning', 'Ctrl+Paint']
  ),

  // Phase 2: Asset Creation
  createNode(
    '3d-mod', '🌿 Sprout: 3D Modeling', 'Core', 
    'Building the digital structure.', 
    '3D Modeling is the process of creating digital 3D objects using polygons, vertices, and edges. It is used in games, films, product design, architecture, and advertising.', 
    ['Polygon modeling', 'Hard surface modeling', 'Organic modeling', 'Topology (clean edge flow)', 'Retopology', 'UV unwrapping', 'Mesh optimization', 'Real-world scale & measurements', 'Box modeling', 'Boolean operations', 'Non-destructive workflows'], 
    ['Blender', 'Autodesk Maya', '3ds Max', 'Cinema 4D', 'ZBrush'], 
    ['Autodesk Certified Professional: Maya', 'Autodesk Certified Professional: 3ds Max', 'Adobe Substance 3D Certification'], 
    ['CGCookie', 'Blender Guru', 'Gnomon Workshop', 'FlippedNormals', 'Polygon Runway']
  ),
  createNode(
    '3d-sculpt', '🌿 Sprout: 3D Sculpting', 'Core', 
    'Digital clay for organic forms.', 
    '3D Sculpting is used to create highly detailed characters, creatures, and organic forms similar to digital clay sculpting.', 
    ['Anatomy', 'Dynamesh workflow', 'Retopology', 'Sculpting brushes', 'High-poly detailing', 'Displacement maps', 'Character design', 'Alpha maps'], 
    ['ZBrush (industry standard)', 'Blender Sculpt', 'Mudbox', 'Nomad Sculpt'], 
    ['(No major official certifications, portfolio matters more)'], 
    ['FlippedNormals', 'ZBrush Guides', 'Gnomon Workshop', 'Character Creation for Games (course)']
  ),
  createNode(
    '3d-uv', '🪴 Roots: UV Mapping & Retopology', 'Core', 
    'Bridging geometry and textures.', 
    'Retopology converts high-poly sculpts into optimized low-poly meshes. UV Unwrapping flattens 3D models into 2D space so textures can be applied accurately.', 
    ['Manual Retopology', 'Automated Retopology', 'Edge Flow & Topology', 'UV Seams & Unwrapping', 'Texel Density', 'Packing UVs'], 
    ['RizomUV', 'Maya', 'Blender', 'Topogun', 'ZBrush ZRemesher'], 
    [], 
    ['FlippedNormals Retopology Guide', 'CGCookie UV Mapping']
  ),
  createNode(
    '3d-tex', '🪴 Roots: 3D Texturing & Shading', 'Core', 
    'Adding surface detail and realism.', 
    'Texturing is the process of adding surface detail to 3D models, making them look realistic using maps like color, roughness, and normals.', 
    ['PBR workflow', 'UV mapping', 'Texture baking', 'Procedural texturing', 'Material creation', 'Substance workflow', 'Texture optimization', 'Hand-painted textures', 'Material node graphs'], 
    ['Substance 3D Painter', 'Substance 3D Designer', 'Quixel Mixer', 'Mari', 'Photoshop'], 
    ['Adobe Substance 3D Certification'], 
    ['Substance Academy', 'FlippedNormals', 'ArtStation Learning', 'CGMA']
  ),

  // Phase 3: Setup & Movement
  createNode(
    '3d-rig', '🪵 Trunk: Rigging & Tech Art', 'Advanced', 
    'Adding the digital skeleton.', 
    'Rigging is the process of creating a controllable skeleton (joints, controllers, IK/FK) for a 3D model so it can be animated.', 
    ['Character rigging basics', 'Joint placement', 'Skin weighting', 'Weight painting', 'Forward/Inverse Kinematics (FK/IK)', 'Blendshapes / Morph targets', 'Facial rigging', 'Constraints & Drivers'], 
    ['Maya (Industry Standard)', 'Blender Rigify', 'Advanced Skeleton', 'mGear'], 
    [], 
    ['Rigging Dojo', 'AntCGI', 'CGCircuit Rigging']
  ),
  createNode(
    '3d-anim', '🪵 Trunk: 3D Animation', 'Advanced', 
    'Bringing models to life.', 
    '3D Animation is the art of bringing 3D models to life by creating movement through keyframes or motion capture. Used in movies, games, advertising, and virtual production.', 
    ['The 12 Principles of Animation', 'Keyframe animation', 'Character rigging basics', 'Weight painting', 'Motion capture workflow', 'Facial animation', 'Timing and spacing', 'Body mechanics', 'Graph Editor / Splines'], 
    ['Autodesk Maya (industry standard)', 'Blender', 'Cinema 4D', 'MotionBuilder', 'Unreal Engine', 'Cascadeur'], 
    ['Autodesk Maya Certified Professional', 'Unreal Engine Certified Developer'], 
    ['Animation Mentor', 'iAnimate', 'CGMA (Computer Graphics Master Academy)', 'Aaron Blaise Animation Courses']
  ),

  // Phase 4: Look Development & Output
  createNode(
    '3d-light', '🍃 Branch: Lighting & LookDev', 'Advanced', 
    'Setting the mood and atmosphere.', 
    'Lighting artists use virtual lights to enhance the mood, direct the viewer\'s eye, and make materials look realistic.', 
    ['Lighting techniques', '3-Point Lighting', 'HDRI Lighting', 'Cinematic Lighting', 'Color Temperature', 'Light linking', 'Volumetrics & Fog'], 
    ['Katana', 'Unreal Engine', 'Maya', 'Blender'], 
    [], 
    ['Cinematography for CG Artists', 'Gnomon Lighting Courses']
  ),
  createNode(
    '3d-ren', '🍃 Branch: 3D Rendering', 'Advanced', 
    'Generating the final image.', 
    'Rendering is the process of generating the final image or animation from a 3D scene, including lighting, materials, and camera settings.', 
    ['Lighting techniques', 'Physically based rendering (PBR)', 'Global illumination', 'HDRI lighting', 'Camera composition', 'Render optimization', 'Color management', 'Raytracing vs Path Tracing', 'Render Passes (AOV)', 'Sampling & Noise reduction'], 
    ['V-Ray', 'Arnold', 'Octane Render', 'Redshift', 'Cycles (Blender)'], 
    ['Chaos V-Ray Certification', 'Autodesk Arnold Certification'], 
    ['Chaos Academy', 'Learn Squared', 'Greyscalegorilla', 'CGCircuit']
  ),
  createNode(
    '3d-comp', '🌸 Bloom: Compositing & Post', 'Advanced', 
    'The final polish.', 
    'Compositing combines 3D render passes, live-action footage, and 2D effects into a seamless final image, adjusting colors and adding lens effects.', 
    ['Compositing', 'Node-based compositing', 'Alpha channels & Mattes', 'Color grading', 'Depth of Field & Motion Blur', 'Integrating CG with Live Action'], 
    ['Nuke', 'After Effects', 'DaVinci Resolve / Fusion', 'Blender Compositor'], 
    ['Foundry Nuke Certification'], 
    ['FXPHD', 'Hugo\'s Desk', 'Compositing Academy']
  ),

  // Phase 5: Industry Specializations
  createNode(
    '3d-game', '🌳 Canopy: Game 3D (Game Assets)', 'Expert', 
    'Optimized models for real-time engines.', 
    'Game artists create optimized 3D models for real-time engines used in video games.', 
    ['Low-poly modeling', 'Game topology', 'Baking high → low poly', 'PBR materials', 'LOD systems', 'Game engine integration', 'Asset optimization', 'Modular environments', 'Real-time shaders'], 
    ['Blender', 'Maya', 'Substance Painter', 'Unreal Engine', 'Unity', 'Marmoset Toolbag'], 
    ['Unreal Engine Certification', 'Unity Certified 3D Artist'], 
    ['Vertex School', 'GameDev.tv', 'CGMA', 'FastTrack Tutorials']
  ),
  createNode(
    '3d-vfx', '🌳 Canopy: VFX (Visual Effects)', 'Expert', 
    'Explosions, magic, and destruction.', 
    'VFX is used in film production to create effects that cannot be filmed in real life, such as explosions, smoke, and destruction.', 
    ['Particle simulation', 'Fluid simulation', 'Smoke & fire', 'Rigid body dynamics', 'Compositing', 'Green screen workflow', 'Cloth & Hair simulation'], 
    ['Houdini (industry standard)', 'Blender', 'Maya', 'Nuke', 'After Effects', 'EmberGen', 'Bifrost (Maya)'], 
    ['Houdini FX Certification'], 
    ['Rebelway', 'Houdini School', 'FXPHD', 'CGMA']
  ),
  createNode(
    '3d-motion', '🌳 Canopy: 3D Motion Graphics', 'Expert', 
    'Animated visual designs.', 
    '3D Motion Graphics is used in advertising, branding, social media, and commercials to create animated visual designs.', 
    ['Motion design principles', 'Typography animation', 'Product motion', 'Procedural animation', 'Abstract animation', 'Camera animation', 'Mograph effectors', 'Abstract looping animations', 'Product reveals'], 
    ['Cinema 4D (industry standard)', 'Blender', 'After Effects', 'Redshift', 'Octane'], 
    ['Maxon Cinema 4D Certification'], 
    ['School of Motion', 'Greyscalegorilla', 'Motion Design School', 'Eyedesyn']
  ),
  createNode(
    '3d-arch', '🌳 Canopy: Architectural Visualization (ArchViz)', 'Expert', 
    'Photorealistic architecture.', 
    'ArchViz is the creation of photorealistic architectural images and animations used by real estate developers and architects.', 
    ['Interior lighting', 'Exterior lighting', 'Architectural composition', 'CAD workflow', 'Material realism', 'Camera framing', 'Scene optimization', 'Foliage scattering'], 
    ['3ds Max', 'Corona Renderer', 'V-Ray', 'Blender', 'SketchUp', 'Lumion'], 
    ['Autodesk 3ds Max Certification', 'Chaos V-Ray Certification'], 
    ['RenderCamp', 'ArchViz Artist', 'Chaos Academy', 'Udemy ArchViz courses']
  ),
  createNode(
    '3d-prod', '🌳 Canopy: Product Visualization', 'Expert', 
    'High-end commercial renders.', 
    'Product visualization creates high-end images and animations for marketing and advertising. Companies use it to showcase products like phones, watches, cars, cosmetics, and electronics.', 
    ['Studio lighting', 'Product composition', 'Photorealistic materials', 'Macro rendering', 'Product animation', 'Brand presentation', 'Perfect surface reflections', 'Turntable animations'], 
    ['Blender', 'Cinema 4D', 'KeyShot', 'Octane', 'Redshift'], 
    ['KeyShot Certification', 'Adobe Substance Certification'], 
    ['Greyscalegorilla', 'Learn Squared', 'School of Motion', 'CG Shortcuts']
  ),
  createNode(
    '3d-print', '🍄 Mycelium: 3D Printing', 'Specialization', 
    'Bringing digital into the physical world.', 
    'Preparing 3D models for physical fabrication using FDM or Resin 3D printers. Requires knowledge of real-world physics and tolerances.', 
    ['Watertight meshes (Manifold)', 'Supports & Overhangs', 'Hollowing & Drain holes', 'Tolerances & Clearances', 'Slicing software'], 
    ['UltiMaker Cura', 'PrusaSlicer', 'Lychee Slicer', 'ZBrush', 'Fusion 360'], 
    [], 
    ['Maker\'s Muse', 'CNC Kitchen', 'Thomas Sanladerer']
  ),
  createNode(
    '3d-xr', '🕸️ Spiderweb: AR / VR / XR', 'Specialization', 
    'Spatial computing and immersion.', 
    'Optimizing 3D assets for virtual reality, augmented reality, and spatial computing platforms (like Meta Quest or Apple Vision Pro).', 
    ['Extreme optimization', 'Mobile rendering pipelines', 'Stereoscopic design', 'WebXR', 'Spatial audio integration'], 
    ['Unity', 'Unreal Engine', 'Spark AR', 'Lens Studio', 'Spline'], 
    ['Meta Spark Certification'], 
    ['Circuit Stream', 'Unity Learn XR', 'Oculus Developer Docs']
  )
];

const threeDEdges = [
  // Pipeline Flow
  createOrganicEdge('3d-concept', '3d-mod'),
  createOrganicEdge('3d-concept', '3d-sculpt'),
  
  createOrganicEdge('3d-mod', '3d-uv'),
  createOrganicEdge('3d-sculpt', '3d-uv'),
  
  createOrganicEdge('3d-uv', '3d-tex'),
  createOrganicEdge('3d-uv', '3d-rig'),
  
  createOrganicEdge('3d-rig', '3d-anim'),
  
  createOrganicEdge('3d-tex', '3d-light'),
  createOrganicEdge('3d-anim', '3d-light'),
  
  createOrganicEdge('3d-light', '3d-ren'),
  createOrganicEdge('3d-ren', '3d-comp'),

  // Specializations branching off from the pipeline
  createOrganicEdge('3d-comp', '3d-vfx'),
  createOrganicEdge('3d-comp', '3d-motion'),
  createOrganicEdge('3d-comp', '3d-arch'),
  createOrganicEdge('3d-comp', '3d-prod'),
  
  // Games and XR branch off earlier (real-time rendering)
  createOrganicEdge('3d-tex', '3d-game'),
  createOrganicEdge('3d-anim', '3d-game'),
  createOrganicEdge('3d-game', '3d-xr'),
  
  // 3D Printing branches off from modeling/sculpting
  createOrganicEdge('3d-mod', '3d-print'),
  createOrganicEdge('3d-sculpt', '3d-print'),
];

export const threeDDesignRoadmap: RoadmapData = {
  id: '3d-design',
  title: '3D Design & Graphics',
  description: 'A smart, industry-standard pipeline guide to 3D. Follow the flow from Concept to Compositing, or branch off into specialized fields like Games, VFX, or 3D Printing.',
  nodes: threeDNodes,
  edges: threeDEdges,
};
