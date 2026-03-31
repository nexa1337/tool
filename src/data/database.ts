export type PricingType = 'Free' | 'Paid' | 'Freemium';

export interface DatabaseEntry {
  title: string;
  url: string;
  description: string;
  pricing: PricingType;
  iconUrl?: string;
  tags?: string[];
}

export interface DatabaseSubcategory {
  title: string;
  entries: DatabaseEntry[];
}

export interface DatabaseCategoryData {
  id: string;
  title: string;
  description: string;
  subcategories: DatabaseSubcategory[];
}

export const databaseCategories: Record<string, DatabaseCategoryData> = {
  'accounts': {
    id: 'accounts',
    title: 'Accounts',
    description: 'Various account resources.',
    subcategories: [
      {
        title: 'Accounts',
        entries: [
          {
            title: "AccMoon",
            url: "https://accmoon.com",
            description: "Platform That Provides High Quality Social Media Accounts",
            pricing: "Free",
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-NbpX10OnWpdjAoMVRnGC0YpNxmd4TOy5Q&s"
          },
          {
            title: "AccsMarket",
            url: "https://accsmarket.com",
            description: "Platform That Provides High Quality Social Media Accounts",
            pricing: "Free",
            iconUrl: "https://accsmarket.com/apple-touch-icon.png"
          }
]
      }
    ]
  },
  'social-media': {
    id: 'social-media',
    title: 'Social Media',
    description: 'Social media tools and resources.',
    subcategories: [
      {
        title: 'Social Media',
        entries: [
          {
            title: "Pomelli",
            url: "https://labs.google.com/pomelli/about/",
            description: "Pomelli is an experimental, AI powered marketing tool designed to build scalable, on-brand content to help you connect with your audience faster.",
            pricing: "Free",
            iconUrl: "https://blog-cdn.skywork.ai/wp-content/uploads/2025/11/1280x1280-2-1762337677-1024x520.png"
          },
          {
            title: "Creashort",
            url: "https://creashort.ai",
            description: "Creashort brings together the most powerful and viral AI videos from TikTok, Instagram, and YouTube. No more juggling multiple subscriptions or spending hours ...",
            pricing: "Free",
            iconUrl: "https://creashort.ai/_next/image?url=%2Fcreashort-logo-updated.png&w=3840&q=75"
          },
          {
            title: "Heygen",
            url: "https://klingai.com/global/",
            description: "HeyGen is the best online AI video generator and video creator for professionals and marketers who value ease of use. It helps you create engaging and engaging ...",
            pricing: "Free",
            iconUrl: "https://img.icons8.com/fluent/1200/heygen.jpg"
          },
          {
            title: "kling",
            url: "https://klingai.com/global/",
            description: "Kling AI, tools for creating imaginative images and videos, based on state-of-art generative AI methods.",
            pricing: "Free",
            iconUrl: "https://play-lh.googleusercontent.com/JOfjXqsShK8j1aGBc1xlHBnatoRKRwLsGuoFZUAvKksaEPvK71eLwSg4FbKlky9Es-s"
          },
          {
            title: "Arcads",
            url: "https://www.arcads.ai",
            description: "Create winning ads with AI, Use our library of 1,000+ Captivating AI Actors, or create your own AI Avatar",
            pricing: "Free",
            iconUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQH1GveYMRUL1g/company-logo_200_200/B4EZp_N7agKkAI-/0/1763070949507/arcads_ai_logo?e=2147483647&v=beta&t=dZilBnGNh2KsBbfeec63WyLQ9mwFQI7X1AH6wwG2T6c"
          },
          {
            title: "Weavy",
            url: "https://www.weavy.ai",
            description: "Transform your creative vision into scalable workflows with Weavy. Integrate AI models and editing tools in one seamless, node-based platform.",
            pricing: "Free",
            iconUrl: "https://pbs.twimg.com/profile_images/1907057514090479616/lAKmIIPA_400x400.jpg"
          },
          {
            title: "Faceless",
            url: "https://faceless.video",
            description: "Faceless.video creates content and posts it to your account every day. Our AI automated content creation tool converts text to video in minutes and posts ...",
            pricing: "Free",
            iconUrl: "https://media.licdn.com/dms/image/v2/D560BAQHI7d8LH3tniA/company-logo_200_200/company-logo_200_200/0/1703196598250?e=2147483647&v=beta&t=24wSjvpluqe0VrR90dIxHsm9UXL_wwLKw0WG_xMj294"
          },
          {
            title: "Wan 2.5",
            url: "https://www.wan-ai.co/wan-2-5",
            description: "Create professional, audio-synced videos from a single prompt. Wan 2.5 generates voice, music, and perfectly matched lip-sync in one pass.",
            pricing: "Free",
            iconUrl: "https://aimarketwave.com/_next/image?url=https%3A%2F%2Faimarketwave.com%2Faimarketwave-images%2F5101d382-c108-428b-8d4b-48e8740cb533_logo.PNG&w=256&q=75"
          },
          {
            title: "Veo 3.1",
            url: "https://gemini.google/overview/video-generation/",
            description: "Turn text & images into videos with sound in Gemini with Veo 3.1 & Veo 3.1 Fast, our latest AI video generator from Google.",
            pricing: "Free",
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_pOOihR6S0QSSMzwx8-fEdeB8Srb_k1dPA&s"
          }
]
      }
    ]
  },
  'learn-english': {
    id: 'learn-english',
    title: 'Learn English',
    description: 'Resources for learning English.',
    subcategories: [
      {
        title: 'Learn English',
        entries: [
          {
            title: "Free4Talk",
            url: "https://www.free4talk.com",
            description: "The best website of practicing English speaking, easy to find a conversation partner, improve your English speaking skills, make friends, language exchange ...",
            pricing: "Free",
            iconUrl: "https://pbs.twimg.com/profile_images/993838750869450752/8RozpusC_400x400.jpg"
          },
          {
            title: "Getfluently",
            url: "https://getfluently.app",
            description: "Great app for training conversation fluency and natural use of English in conversations. You gain confidence in conversations and practice correct pronunciation ...",
            pricing: "Free",
            iconUrl: "https://play-lh.googleusercontent.com/9t6lsMpYmPdZLeNr3cwVwq1Cd2RNCczXYxXpaCyLJeWVg_T3Jx_jEtd_35ALamkHXGPke1Ggr38Gq6N2mzE7"
          },
          {
            title: "LingoHut",
            url: "https://www.lingohut.com",
            description: "LingoHut is your go-to spot for learning a language without the hassle. No fees, no logins—just straightforward, effective language lessons at your ...",
            pricing: "Free",
            iconUrl: "https://image.winudf.com/v2/image1/Y29tLmxpbmdvaHV0LmxpbmdvaHV0X2FwcF9pY29uXzE2MjU0NTcwNDJfMDYx/icon.png?w=280&fakeurl=1"
          },
          {
            title: "Ello",
            url: "https://www.elllo.org",
            description: "ELLLO has over 3,000 free listening lessons for all levels! Most activities have audio or video, a transcript, vocabulary lesson and interactive quiz.",
            pricing: "Free",
            iconUrl: "https://cdn-images.dzcdn.net/images/talk/2d6fda14442eef9f5ab1f5a7c22466bf/0x1900-000000-80-0-0.jpg"
          },
          {
            title: "Language Reactor",
            url: "https://www.languagereactor.com",
            description: "Language Reactor: your language learning toolbox. Discover, understand, and learn from native materials, including Netflix and YouTube.",
            pricing: "Free",
            iconUrl: "https://i.tracxn.com/logo/company/languagereactor_com_7822dc10-4e35-419f-99b8-89577c3a8e59"
          }
]
      }
    ]
  },
  'ai-ide-core': {
    id: 'ai-ide-core',
    title: 'AI IDE Core',
    description: 'AI-powered IDEs and core tools.',
    subcategories: [
      {
        title: 'AI IDE Core',
        entries: [
          {
            title: "Claude Code",
            url: "https://www.claude.com/product/claude-code",
            description: "Unleash Claude s raw power directly in your terminal or IDE. Search million-line codebases instantly. Turn hours-long workflows into a single command. Your tools. Your workflow. Your codebase, evolving at thought speed.",
            pricing: "Free",
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdyvngUvl29M9qJ0M5YknOlGJ2HjrWumnr4FblObRR7slB2MktcZZSh3_PEwRj2fRz_Q&usqp=CAU"
          },
          {
            title: "Windsurf",
            url: "https://windsurf.com",
            description: "Windsurf is the most intuitive AI coding experience, built to keep you—and your team—in flow.",
            pricing: "Free",
            iconUrl: "https://windsurf.com/favicon_192.png"
          },
          {
            title: "Google Antigravity",
            url: "https://antigravity.google",
            description: "Google Antigravitys Editor view offers tab autocompletion, natural language code commands, and a configurable, and context-aware configurable agent.",
            pricing: "Free",
            iconUrl: "https://media.licdn.com/dms/image/v2/D560BAQG5wmEaqHfmDg/company-logo_200_200/B56ZqUSJh0I4AM-/0/1763424377586/google_antigravity_logo?e=2147483647&v=beta&t=09EGMp77uIgS77oquLNRli_4mMEV8oGvXklIXLBP6YM"
          },
          {
            title: "Qoder",
            url: "https://qoder.com",
            description: "Qoder: Agentic Coding Platform | Worlds latest and most advanced AI models | Code Completion, Test Generation, AI Agent",
            pricing: "Free",
            iconUrl: "https://ph-files.imgix.net/1d701bab-ba90-43a7-97ea-fbfa96b99a6d.png?auto=format"
          },
          {
            title: "Trae",
            url: "https://www.trae.ai",
            description: "New Tool, Perfect Code — Generate code faster than typing. Let humans focus on big ideas. Let AI write clean code instantly. No debugging, just shipping.",
            pricing: "Free",
            iconUrl: "https://media.licdn.com/dms/image/v2/D560BAQGDj8tODOUsMA/company-logo_200_200/B56Zgd1b5THMAI-/0/1752847204537/traeai_logo?e=2147483647&v=beta&t=N2wG8glnNTLiGMWcuCqq8WigDQVc9ycsocKCOXqwtgM"
          }
]
      }
    ]
  },
  'development': {
    id: 'development',
    title: 'Development',
    description: 'General development tools and resources.',
    subcategories: [
      {
        title: 'Development Tools',
        entries: [
          { title: 'OverAPI', url: 'https://overapi.com', description: 'All cheatsheets collection', pricing: 'Free', iconUrl: 'https://overapi.com/static/images/overapi-logo.png' },
          { title: 'Quickref', url: 'https://quickref.me', description: 'Quick reference cheatsheets', pricing: 'Free', iconUrl: 'https://quickref.me/images/favicon.png' },
          { title: 'TutorialKart', url: 'https://www.tutorialkart.com', description: 'Programming tutorials', pricing: 'Free', iconUrl: 'https://www.tutorialkart.com/wp-content/uploads/2024/10/logo_512.png' },
          { title: 'Uiverse', url: 'https://uiverse.io', description: 'UI elements library', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/103369066?v=4' },
          { title: 'W3schools', url: 'https://www.w3schools.com', description: 'Web development tutorials', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/77673807?v=4' },
          { title: 'UseGalileo', url: 'https://www.usegalileo.ai/explore', description: 'AI design tool', pricing: 'Free', iconUrl: 'https://res.cloudinary.com/apideck/image/upload/v1675978399/icons/usegalileo-ai.png' },
          { title: 'CDNfonts', url: 'https://www.cdnfonts.com', description: 'Font CDN service', pricing: 'Free', iconUrl: '' },
          { title: 'MyCompiler', url: 'https://www.mycompiler.io', description: 'Online IDE', pricing: 'Free', iconUrl: 'https://www.mycompiler.io/static/img/mycompiler-logo-256.png?v=1763281001' },
          { title: 'AngryTools', url: 'https://angrytools.com', description: 'Web development tools', pricing: 'Free', iconUrl: 'https://cdn-b.saashub.com/images/app/service_logos/23/f89c966856db/large.png?1639035319' },
          { title: 'UiBall', url: 'https://uiball.com/ldrs/', description: 'Source Loaders', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEaTTyoWbdohFf-OkuFmh9zlebbCUWKG9TA&s' },
          { title: 'POE', url: 'https://poe.com', description: 'AI assistant platform', pricing: 'Free', iconUrl: 'https://images.seeklogo.com/logo-png/61/1/poe-logo-png_seeklogo-611682.png' },
          { title: 'Ui Aceternity', url: 'https://ui.aceternity.com/components', description: 'UI components library', pricing: 'Free', iconUrl: 'https://pro.aceternity.com/logo-dark.png' },
          { title: 'Shape Divider', url: 'https://www.shapedivider.app', description: 'Shape divider generator', pricing: 'Free', iconUrl: 'https://ph-files.imgix.net/3436edff-7b8e-41ac-b609-ada24f976933.png?auto=format' },
          { title: 'Iconer', url: 'https://iconer.app', description: 'Icon management tool', pricing: 'Free', iconUrl: 'https://www.ui-tools.com/Content/images/cbc4cfd4-iconer.svg' },
          { title: 'Jonsuh', url: 'https://jonsuh.com/hamburgers/', description: 'Hamburger menu animations', pricing: 'Free', iconUrl: 'https://labs.jonsuh.com/icon.png' },
          { title: 'Transition', url: 'https://www.transition.style', description: 'CSS transitions library', pricing: 'Free', iconUrl: '' },
          { title: 'Css Loaders', url: 'https://cssloaders.github.io', description: 'CSS loader animations', pricing: 'Free', iconUrl: '' },
          { title: 'Separator', url: 'https://wweb.dev/resources/css-separator-generator', description: 'CSS separator generator', pricing: 'Free', iconUrl: '' },
          { title: 'Get Css Scan', url: 'https://getcssscan.com/css-box-shadow-examples', description: 'CSS box shadow examples', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbNe9E6rJnP2woSv28yw65mrbahjIKvU2jw&s' }
        ]
      }
    ]
  },
  'graphic-design': {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Graphic design tools and assets.',
    subcategories: [
      {
        title: 'Design Tools & Resources',
        entries: [
          { title: 'Easlo', url: 'https://www.easlo.co/templates', description: 'Free Notion Template', pricing: 'Free', iconUrl: 'https://framerusercontent.com/images/dvrschHGP374SPK1HpDjWPcdFEk.png?scale-down-to=512' },
          { title: 'Playground', url: 'https://playground.com/design', description: 'AI design tool', pricing: 'Free', iconUrl: 'https://cdn.prod.website-files.com/630533bb38a04b2d7788387f/649f5a0ce8a782359413845d_nnRV-zwg_400x400.jpeg' },
          { title: 'Kittl', url: 'https://www.kittl.com/', description: 'Graphic design platform', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQHkxp7FQ4VAcQ/company-logo_200_200/company-logo_200_200/0/1736951782457/kittl_logo?e=2147483647&v=beta&t=SN8so5jmYqIRCfa_eAknhv7rfIzo0IL44y7clJVjiBY' },
          { title: 'Canva', url: 'https://www.canva.com', description: 'Graphic design platform', pricing: 'Free', iconUrl: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwY4YmnQvuOVcDOUEv8kRT4ktCa.PoVrNR1oEucuSv3K_8aS2UoVaOptnGXfNpDFpWc-&format=source' },
          { title: 'Photopea', url: 'https://www.photopea.com', description: 'Online photo editor', pricing: 'Free', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Photopea_logo.svg/2048px-Photopea_logo.svg.png' },
          { title: 'Unblast', url: 'https://unblast.com', description: 'Free design resources', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizICXbCjEhCREhEVDfk6EohpUuy-tsCKUcQ&s' },
          { title: 'Design Cap', url: 'https://www.designcap.com/app/', description: 'Graphic design tool', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7q7AF6s_wrXUEfjzB30nh6tKZa5QeGGiNg&s' },
          { title: 'Template', url: 'https://www.template.net', description: 'Templates collection', pricing: 'Free', iconUrl: 'https://cledara-public.s3.eu-west-2.amazonaws.com/templatedotnet_logo.jpeg' },
          { title: 'Beefree', url: 'https://beefree.io/templates', description: 'Email template builder', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-8B-7rUpZ-CembxNbnQms9p0TXwtO-UKUA&s' },
          { title: 'Studio Polotno', url: 'https://studio.polotno.com', description: 'Online design studio', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQG2CIan0Ir9og/company-logo_200_200/company-logo_200_200/0/1709284841016?e=2147483647&v=beta&t=R3SIonT2Xx3i_3PCrPLhx0mhhWx0FxCrsJeI7Vl6W4E' },
          { title: 'Visual', url: 'https://visual.app', description: 'Design tool', pricing: 'Free', iconUrl: 'https://visual.app/icon2.png?99523ded3ac8b75d' },
          { title: 'Vista', url: 'https://create.vista.com/templates/', description: 'Design templates', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/jgBP2R-780CG4FK8TuYpb3eYDymdz0MHOnXAqWSWRamFthQjewxITFwNguJf4QyM3cc' },
          { title: 'Visme', url: 'https://www.visme.co', description: 'Visual content creator', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/QZdNXGnTzyUkESFKC0wYlXWEFlePUgabIi3ZZgqLdpK9BNV-bVlvkt8ly5i7Vsj-QAY' },
          { title: 'Fan Art', url: 'https://fanart.tv', description: 'PosterTV collection', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoavhaF4Be-6ZchGAWZKg8s7HINeHXNCZrMmUG3Mzfxog56tAr-HiINAo8X-vxsIFz5-k&usqp=CAU' },
          { title: 'FootyRenders', url: 'https://www.footyrenders.com', description: 'Football player renders', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKCqghekORIE5C_jNqbVbYsW7k-4nl5jclQ&s' },
          { title: 'Minimal Mockups', url: 'https://www.minimalmockups.com/mockups/', description: 'Minimalist mockup templates', pricing: 'Free', iconUrl: 'https://www.minimalmockups.com/favicon.svg' },
          { title: 'Deblank', url: 'https://deblank.com/', description: 'Brand design tool', pricing: 'Free', iconUrl: 'https://www.eu-startups.com/wp-content/uploads/2024/05/deblank-colors-logo.jpg' },
          { title: 'Pigment', url: 'https://pigment.shapefactory.co', description: 'Color palette generator', pricing: 'Free', iconUrl: 'https://www.evernote.design/assets/images/pigment.jpg' },
          { title: 'ColorHunt', url: 'https://colorhunt.co', description: 'Color palettes collection', pricing: 'Free', iconUrl: 'https://colorhunt.co/img/color-hunt-icon-512.png' },
          { title: 'PaletteMaker', url: 'https://palettemaker.com', description: 'Color palette creator', pricing: 'Free', iconUrl: 'https://palettemaker.com/_nuxt/square-icon.bae26c6c.png' },
          { title: 'UiGradients', url: 'https://uigradients.com/#Mild', description: 'Gradient collection', pricing: 'Free', iconUrl: 'https://www.bookmarks.design/media/image/uigradients.jpg' },
          { title: 'Postermywall', url: 'https://www.postermywall.com', description: 'Poster design tool', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/3Q5JJaWkxtrzuOxULnAHk-DWXBj-_0alpndvYZva8tzHoVfMFwQJbuAt1GoxRsI3Rks' }
        ]
      }
    ]
  },
  'video-editing': {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Video editing software and resources.',
    subcategories: [
      {
        title: 'Video Tools & Resources',
        entries: [
          { title: 'Vlipsy', url: 'https://vlipsy.com', description: 'Memes video clips', pricing: 'Free', iconUrl: 'https://cdn.aptoide.com/imgs/b/8/f/b8fb7a462a06a5d8b1b4ed0c05522dae_icon.png' },
          { title: 'Make Reels', url: 'https://makereels.ai/en', description: 'AI reels generator', pricing: 'Free', iconUrl: 'https://makereels.ai/images/icons/512x512.png' },
          { title: 'Play Phrase', url: 'https://www.playphrase.me/#/search?q=oh+yeah+yeah+yeah&language=en', description: 'Movie phrase search', pricing: 'Free', iconUrl: '' },
          { title: 'Hooks', url: 'https://transitionalhooks.com', description: 'Transitional video hooks', pricing: 'Free', iconUrl: 'https://transitionalhooks.com/wp-content/uploads/2024/07/Transitional-Hooks-Logo.png' },
          { title: 'EyeCannndy', url: 'https://eyecannndy.com', description: 'Video inspiration', pricing: 'Free', iconUrl: 'https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/c4098344-9a34-40a8-a59c-4609b61a5c7e/Eyecandy_Feature%2BBadge.png' },
          { title: 'PaperAnimator', url: 'https://paperanimator.com', description: 'Paper animation tool', pricing: 'Free', iconUrl: 'https://paperanimator.com/apple-icon.png?2cd6fe220b789343' },
          { title: 'Jitter', url: 'https://jitter.video', description: 'Motion design tool', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHX8X53cYa2MpjSsCi2LNU9l04fCcZR7meA&s' },
          { title: 'Mockrocket', url: 'https://app.mockrocket.io', description: 'Device mockup videos', pricing: 'Free', iconUrl: 'https://cdn.theorg.com/d1535132-9d87-4a3e-b878-b107d4fa4ff2_thumb.jpg' },
          { title: 'VideoEffects', url: 'https://videoeffects.com/browse', description: 'Video effects library', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGlB6B2E7Mg-CHs3sDm1fnwjOoeMdEfImTQ&s' },
          { title: 'VideoBolt', url: 'https://videobolt.net/templates/browse?sort=newest', description: 'Video templates', pricing: 'Paid', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD16yIWyGmA0VPzCVsKEdNRwv9yGewAZFxPmaMleBbwdwMW4Mad1tizi4u4XDV6YrOrfU&usqp=CAU' },
          { title: 'Mixkit', url: 'https://mixkit.co/free-video-templates/', description: 'Free video templates', pricing: 'Free', iconUrl: 'https://images.seeklogo.com/logo-png/43/2/mixkit-logo-png_seeklogo-431821.png' },
          { title: 'RenderForest', url: 'https://www.renderforest.com/templates?aspectRatio=portrait', description: 'Video template maker', pricing: 'Free', iconUrl: 'https://yt3.googleusercontent.com/TTgJlRywIT6lT6p13A1S5smCX--xRL6ocJmhFKZPF-fLj499fUpKlrG_0yR5Su5mAq47_gdFoJQ=s900-c-k-c0x00ffffff-no-rj' },
          { title: 'MyInstants', url: 'https://www.myinstants.com/en/index/us/', description: 'Sound effects library', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/v_5LsSgLe8lMcmmKc1uYMPkaOkM3JVVkl_IvQ8m9iim5Z8Pw80MgvMyA_zc2QvVs6zA' },
          { title: 'ArtList', url: 'https://artlist.io/sfx', description: 'Professional sound effects', pricing: 'Paid', iconUrl: 'https://pbs.twimg.com/profile_images/1684178664647278594/LPtRDoqT_400x400.jpg' }
        ]
      }
    ]
  },
  'no-code-app-builder': {
    id: 'no-code-app-builder',
    title: 'No-CodeApp Builder',
    description: 'Platforms for building apps without code.',
    subcategories: [
      {
        title: 'App Builders',
        entries: [
          { title: 'Bubble', url: 'https://bubble.io', description: 'No-code app platform', pricing: 'Free', iconUrl: 'https://s3.amazonaws.com/appforest_uf/f1530294839424x143528842134401200/Icon-no-clearspace.png' },
          { title: 'Bolt', url: 'https://bolt.new', description: 'AI Generate apps', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQFIco7PgXhYBg/company-logo_200_200/B4EZYbOkYjGYAI-/0/1744213526380/stackblitz_logo?e=2147483647&v=beta&t=cGpIiLBB_woyy5s4tKZAsIi6X3RighVTtllZRBKCf1Y' },
          { title: 'Goodbarber', url: 'https://www.goodbarber.com', description: 'App builder platform', pricing: 'Paid', iconUrl: 'https://portal.ww-cdn.com/portal_static/images/presse/black_symbol_goodbarber.2fbbf8be7ed5.jpg' },
          { title: 'Jotform', url: 'https://www.jotform.com', description: 'Form builder', pricing: 'Free', iconUrl: 'https://www.jotform.com/resources/assets/icon/min/jotform-icon-white-400x400.png' },
          { title: 'Retool', url: 'https://retool.com', description: 'Internal tools builder', pricing: 'Paid', iconUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQFBxfqBtVmJNA/company-logo_200_200/company-logo_200_200/0/1726148159200/tryretool_logo?e=2147483647&v=beta&t=SeurwxkcUCWc_R5MTMQM9XCTSebPAGcsoaBrRzw2Y4g' },
          { title: 'Mobeasy', url: 'https://mobeasy.com', description: 'Mobile app builder', pricing: 'Paid', iconUrl: 'https://ads.mobeasy.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-07-at-1.12.21-PM.png' },
          { title: 'Adalo', url: 'https://www.adalo.com', description: 'App builder', pricing: 'Free', iconUrl: 'https://assets.ycodeapp.com/assets/app30147/images/2okqV6tptrrd2IIUPoYqsqUJdmuexxeJQM5H9Qxv-published.jpg' },
          { title: 'FlutterFlow', url: 'https://flutterflow.io', description: 'Flutter app builder', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5EGMgriySog2zfieUY_mmmWxL-HTMeBOLQ&s' },
          { title: 'AppCreator24', url: 'https://www.appcreator24.com', description: 'App creator platform', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/9wpp7jx0-BkLPkBSKnOO4VrXF2a1TUDOPRDpHHb2ehQzKWvY-_mzZsgfRyqA9p07-w' },
          { title: 'Andromo', url: 'https://www.andromo.com', description: 'Android app builder', pricing: 'Paid', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2lQLiiL2accEOJSLLlSKuHqoW9vcKzCjng&s' },
          { title: 'Appyet', url: 'https://appyet.com', description: 'App builder', pricing: 'Free', iconUrl: 'https://appyet.com/favicon/android-chrome-512x512.png' },
          { title: 'Uizard', url: 'https://uizard.io', description: 'AI app generator', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/33205705?s=200&v=4' },
          { title: 'Copycoder', url: 'https://copycoder.ai', description: 'AI code generator', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1858982207953453056/aYuLFN87_400x400.jpg' }
        ]
      }
    ]
  },
  'builder-site-ai': {
    id: 'builder-site-ai',
    title: 'Builder Site AI',
    description: 'AI-powered website builders.',
    subcategories: [
      {
        title: 'Website Builders',
        entries: [
          { title: 'Huggingface', url: 'https://huggingface.co', description: 'AI models hub', pricing: 'Free', iconUrl: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/0fd14cd6eca1024a487427db8d52ce5d10b3a321/hg-logo.png' },
          { title: 'Xpage', url: 'https://app.xpage.ai/templates', description: 'AI website templates', pricing: 'Free', iconUrl: 'https://alladvertising.ru/porridge/83/101/h_8a451eb7a3682df238de94a000a3e144' },
          { title: 'Nicepage', url: 'https://nicepage.com', description: 'Website builder', pricing: 'Free', iconUrl: 'https://images.saasworthy.com/tr:w-200,h-140,c-at_max,e-sharpen-1/nicepage_2706_logo_1698321742_hmjrr.png' },
          { title: 'Relume', url: 'https://www.relume.io', description: 'AI website builder', pricing: 'Free', iconUrl: 'https://plgdemos.com/content/images/2024/05/image-removebg-preview.png' },
          { title: 'ScreenShotToCode', url: 'https://screenshottocode.com', description: 'Convert screenshot to code', pricing: 'Free', iconUrl: 'https://cdn-1.webcatalog.io/catalog/screenshot-to-code/screenshot-to-code-icon-filled-256.png?v=1732716111812' },
          { title: 'Gamma', url: 'https://gamma.app', description: 'AI Presentation builder', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRVr9QYTxtd8eXUP34HZLoEnTNMKG1ffIAg&s' }
        ]
      }
    ]
  },
  '3d-design-db': {
    id: '3d-design-db',
    title: '3D Design',
    description: '3D design tools and resources.',
    subcategories: [
      {
        title: '3D Tools',
        entries: [
          { title: 'Biodigital', url: 'https://human.biodigital.com/explore', description: '3D Anatomy Models', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQF-Z0gIoswbAA/company-logo_200_200/company-logo_200_200/0/1630553980335/biodigital_logo?e=2147483647&v=beta&t=AfohJBR6uOlmyT_nRkAhEQCRAdVEPyVBq6RfMkceHK0' },
          { title: 'Buildcores', url: 'https://buildcores.com', description: 'PC Building in 3D', pricing: 'Free', iconUrl: 'https://www.buildcores.com/icon.png?1d1e0dcdc2fcd63a' },
          { title: 'Zoo', url: 'https://zoo.dev/design-studio', description: '3D design studio', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQHgUCc3uH09Pw/company-logo_200_200/B56ZetcJtHHUAQ-/0/1750961528010/zoodotdev_logo?e=2147483647&v=beta&t=LeQjmX_7FebzIT6jS9yTMQUNoxNSuIDvYqkCo9h6bAc' },
          { title: 'Morflax', url: 'https://morflax.com', description: '3D design tool', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv90noM4KgjqEcjhcf4CXPvak52LZiUuQ84g&s' },
          { title: 'Spline', url: 'https://spline.design', description: '3D design platform', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYFoyV5-R9y-onUwFd4pEtSzthKxo5R3h3g&s' },
          { title: 'Lordicon', url: 'https://lordicon.com', description: 'Animated Icons', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_M7bJCaEHOhVIPX6NA3me9n4-ZaHQ6wpGyGdi4P2MUYeFBCnii7afxtv3aZZHTargJM&usqp=CAU' },
          { title: 'Unicornicons', url: 'https://unicornicons.com', description: 'Animated Icons', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXr6DmHXdbJPRy5aT0pmFiNdpeoP4NThVEFA&s' },
          { title: 'Animaker', url: 'https://app.animaker.com/dashboard', description: 'Animation maker', pricing: 'Free', iconUrl: 'https://www.animaker.com/static/assets/images/press/Animaker-logo1.png' },
          { title: 'LumaLabs', url: 'https://lumalabs.ai/genie?view=create', description: 'AI 3D generator', pricing: 'Free', iconUrl: 'https://spcdn.shortpixel.ai/spio/ret_img,q_orig,to_auto,s_webp:avif/https://cdn-luma.com/public/lumalabs.ai/media-kit/1.svg' },
          { title: 'Pacdora', url: 'https://www.pacdora.com', description: '3D packaging design', pricing: 'Paid', iconUrl: 'https://media.trustradius.com/product-logos/vt/DD/WT9J98E338ZZ.JPEG' },
          { title: 'Tripo 3d', url: 'https://www.tripo3d.ai/app', description: 'AI 3D model generator', pricing: 'Free', iconUrl: 'https://api.copilot.livex.ai/api/v1/users/static/7ec1e5981c0135e1c88c958333b4f58b/3d7a8221731dd353bf8e206fe8af4a24.tripo-color.png' }
        ]
      }
    ]
  },
  'illustrations': {
    id: 'illustrations',
    title: 'Illustrations',
    description: 'Illustration libraries and tools.',
    subcategories: [
      {
        title: 'Illustration Resources',
        entries: [
          { title: 'Transhumans', url: 'https://www.transhumans.xyz', description: 'Human illustrations', pricing: 'Free', iconUrl: 'https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64cd4d0d89236fc80a3395b4_runner.png' },
          { title: 'Sapiens', url: 'https://sapiens.ui8.net/7m4c1c8', description: 'Character illustrations', pricing: 'Free', iconUrl: 'https://images.ui8.net/uploads/ui8-v8_1677500074926.png' },
          { title: 'Wojak', url: 'https://wojakstudiopro.com', description: 'Character generator', pricing: 'Free', iconUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg' },
          { title: 'Auto Draw', url: 'https://www.autodraw.com', description: 'AI drawing assistant', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQ22KxZ3ZvQGJM-mL_PZbwflW-QvpISqI1xK1DGgwNbzj8F7USfQsvJ_8gyg1SzjcEB4&usqp=CAU' },
          { title: 'PNG EGG', url: 'https://www.pngegg.com', description: 'PNG images library', pricing: 'Free', iconUrl: '' },
          { title: 'StoryTribeApp', url: 'https://storytribeapp.com', description: 'Story illustrations', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQGFNn9uuWNKvA/company-logo_200_200/B56ZWE4DUHGUAU-/0/1741691041788/storytribeapp_logo?e=2147483647&v=beta&t=3qm4zJ4TSorw5yxfeP9WtXnDj_DKgiqhVZeGH42wT7g' },
          { title: 'StorySet', url: 'https://storyset.com', description: 'Free illustrations', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57MNUcorD2G5HmdDnJnyp3gj0rliVKBTVeg&s' },
          { title: 'Blush', url: 'https://blush.design', description: 'Illustration library', pricing: 'Free', iconUrl: 'https://assets.website-files.com/5fe1075e7f8e62e7a12b09a2/5fe1075e7f8e62b26d2b09ad_happy.svg' },
          { title: 'OpenDoodles', url: 'https://www.opendoodles.com', description: 'Doodle illustrations', pricing: 'Free', iconUrl: 'https://assets.website-files.com/5d5d5904f8a21bfe5ff69367/5da4e9a454896ed80730e86b_icon-256w.png' },
          { title: 'Shapefest', url: 'https://shapefest.com', description: 'Shape illustrations', pricing: 'Free', iconUrl: 'https://cdn-b.saashub.com/images/app/service_logos/200/xuc2dk9bhqc9/large.png?1642790473' },
          { title: 'Handz', url: 'https://www.handz.design', description: 'Hand illustrations', pricing: 'Free', iconUrl: 'https://static.vecteezy.com/system/resources/previews/018/922/067/non_2x/3d-hand-pose-icon-with-transparent-background-perfect-for-template-design-ui-or-ux-and-more-free-png.png' },
          { title: 'Icons8', url: 'https://icons8.com', description: 'Icons and illustrations', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/6615749?s=200&v=4' },
          { title: '3Dicons', url: 'https://3dicons.co', description: '3D icon library', pricing: 'Free', iconUrl: 'https://3dicons.co/favicons/android-icon-192x192.png' }
        ]
      }
    ]
  },
  'ai-image-generate': {
    id: 'ai-image-generate',
    title: 'AI Image Generate',
    description: 'AI image generation tools.',
    subcategories: [
      {
        title: 'Image Generators',
        entries: [
          { title: 'Ideogram', url: 'https://ideogram.ai', description: 'AI image generator', pricing: 'Free', iconUrl: 'https://images.saasworthy.com/ideogram_52048_logo_1758014883_5jlxk.jpg' },
          { title: 'BlueWillow', url: 'https://www.bluewillow.ai', description: 'AI image generator', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/C560BAQFaDlfbdx0EJA/company-logo_200_200/company-logo_200_200/0/1679588111080/bluewillowai_logo?e=2147483647&v=beta&t=mP1QnOlCPhBla4RAX33gMmLQExv1lEk9VNkRKs54wfE' },
          { title: 'Playground', url: 'https://playground.com', description: 'AI image playground', pricing: 'Free', iconUrl: 'https://cdn.prod.website-files.com/630533bb38a04b2d7788387f/649f5a0ce8a782359413845d_nnRV-zwg_400x400.jpeg' },
          { title: 'Lexica', url: 'https://lexica.art', description: 'AI art search engine', pricing: 'Free', iconUrl: 'https://i.pinimg.com/280x280_RS/55/7a/90/557a90529e82161d8b819c4c5036450a.jpg' },
          { title: 'Craiyon', url: 'https://www.craiyon.com', description: 'AI drawing tool', pricing: 'Free', iconUrl: 'https://media.craiyon.com/2025-06-24/MjTxwqC1QEGmvbfntCxcOg.webp' },
          { title: 'Hotpot', url: 'https://hotpot.ai/art-generator', description: 'AI art generator', pricing: 'Free', iconUrl: 'https://images.saasworthy.com/hotpotaiartgenerator_46160_logo_1728982527_pgkzy.png' },
          { title: 'Leonardo', url: 'https://leonardo.ai', description: 'AI image creator', pricing: 'Free', iconUrl: 'https://app.leonardo.ai/img/leonardo-logo.svg' },
          { title: 'Tensor', url: 'https://tensor.art', description: 'AI art platform', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/xkc1KD4fmch-GKlTZfsXKDvLwW91sYzsI527lM0wVFPYmZb_g-CbfVu7C1mEQ7b2V64' },
          { title: 'Kling Ai', url: 'https://klingai.com', description: 'AI Video Generate', pricing: 'Free', iconUrl: 'https://cdn-1.webcatalog.io/catalog/kling-ai/kling-ai-icon-filled-256.png?v=1726830098972' }
        ]
      }
    ]
  },
  'copywriting': {
    id: 'copywriting',
    title: 'Copywriting',
    description: 'Copywriting and text generation tools.',
    subcategories: [
      {
        title: 'Writing Assistants',
        entries: [
          { title: 'Copy', url: 'https://www.copy.ai', description: 'AI copywriting tool', pricing: 'Free', iconUrl: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/dtvy5wrw83zh4r2mi5pe?ik-sanitizeSvg=true' },
          { title: 'Rytr', url: 'https://rytr.me', description: 'AI writing assistant', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsGsvOcjzROwt4z9ZGo-wk_qNYcQ9IvVRCw&s' }
        ]
      }
    ]
  },
  'mockups': {
    id: 'mockups',
    title: 'Mockups',
    description: 'Mockup generators and templates.',
    subcategories: [
      {
        title: 'Mockup Tools',
        entries: [
          { title: 'Previewed', url: 'https://previewed.app', description: 'Device mockup generator', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1373370347651796994/TYFUXkH5_400x400.jpg' },
          { title: 'MockupWorld', url: 'https://www.mockupworld.co', description: 'Free mockup library', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FSksgLZ78lXHGh2UKes9A_ahE7UR6p0qFQ&s' },
          { title: 'Mockrocket', url: 'https://mockrocket.io', description: 'Device mockup tool', pricing: 'Free', iconUrl: 'https://images.saasworthy.com/mockrocket_36487_logo_1643087427_leamz.png' }
        ]
      }
    ]
  },
  'bim-objects': {
    id: 'bim-objects',
    title: 'BIM objects',
    description: 'Building Information Modeling objects.',
    subcategories: [
      {
        title: 'BIM Resources',
        entries: [
          { title: 'Ambientcg', url: 'https://ambientcg.com', description: 'Texture library', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNd6Dlmwxrw884m8g8AoC4YStsCy1sgv1jLw&s' },
          { title: 'Cgtrader', url: 'https://www.cgtrader.com/3d-models/architectural', description: '3D models marketplace', pricing: 'Paid', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQEYhioEr_wWaA/company-logo_200_200/company-logo_200_200/0/1700233631538/cgtrader_logo?e=2147483647&v=beta&t=XYZXOLqpviCJO7bg3jW927-yd8owzwdgT1YJh-zpKyU' },
          { title: 'BimObject', url: 'https://www.bimobject.com/en', description: 'BIM objects library', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQESDXw_CP5Elw/company-logo_200_200/company-logo_200_200/0/1630558303471/bimobject_logo?e=2147483647&v=beta&t=r9o9Asfvb_dd1bwpguFX7y3un9fHacL19kECg2AmNQ8' },
          { title: 'CadDetails', url: 'https://www.caddetails.com', description: 'CAD details library', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGjGGRzbZgZV2GJJ-rKtAdr4cqNHwuxLXLsFg5G6r1JQHfQI0XY_7VMM_NWnFrVFjwYI&usqp=CAU' },
          { title: 'Quixel', url: 'https://quixel.com/megascans/home', description: 'Megascans library', pricing: 'Free', iconUrl: 'https://pb-files.s3.amazonaws.com/production/portal_logos/bb9333edf5e7d8a1d642f0bbf054cf6239f3769d3de252bec29202e23fd76978/a11f7d7c8139f57ec258ad2e82a64ca1.png?1729251609' },
          { title: 'Archiradar', url: 'https://www.archiradar.it/en/', description: 'Architecture BIM library', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1147289767/icona_400x400.jpg' },
          { title: 'BimComponents', url: 'https://bimcomponents.com', description: 'BIM components library', pricing: 'Free', iconUrl: '' },
          { title: '3Dshopfree', url: 'https://www.3dshopfree.com', description: 'Free 3D models', pricing: 'Free', iconUrl: 'https://3dshopegypt.com/wp-content/uploads/2021/08/3DShop-Logo.png' },
          { title: '3Dzip', url: 'https://3dzip.org', description: '3D models library', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakoqzRL2c5iMmnJ-gLC4URlOQcxyjW5Bpqw&s' },
          { title: '3Dwarehouse', url: 'https://3dwarehouse.sketchup.com', description: 'SketchUp 3D models', pricing: 'Free', iconUrl: 'https://ctatus-prod.s3.eu-west-2.amazonaws.com/bldeuqs5htiesz479sxbug1livs0' },
          { title: 'Sketchfab', url: 'https://sketchfab.com', description: '3D model platform', pricing: 'Free', iconUrl: 'https://static.sketchfab.com/static/builds/web/dist/static/assets/images/favicon/a81e1fd93fc053fed8a5f56640f886f8-v2.png' },
          { title: 'TurboSquid', url: 'https://www.turbosquid.com', description: '3D models marketplace', pricing: 'Paid', iconUrl: 'https://pbs.twimg.com/profile_images/964186552292143106/Fhlpdf_M_400x400.jpg' },
          { title: '3Dsky', url: 'https://3dsky.org', description: '3D models library', pricing: 'Free', iconUrl: 'https://3dsky.org/ng-assets/images/users/logo-en.png' },
          { title: 'Free3d', url: 'https://free3d.com', description: 'Free 3D models', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZzj8Er1cZcYxZxWiJjBlvzPImfMcjcMSMg&s' }
        ]
      }
    ]
  },
  'invoice': {
    id: 'invoice',
    title: 'Invoice',
    description: 'Invoicing and billing tools.',
    subcategories: [
      {
        title: 'Invoicing Tools',
        entries: [
          { title: 'Zoho', url: 'https://www.zoho.com/invoice', description: 'Invoice software', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/FFexyGyYg5Nm9V4jOOKtlYNpHMxLcPmusXDvmjern604RU2wkRTlSOiBhKiCSbl_7JA' },
          { title: 'GenerateAnInvoice', url: 'https://invoice-generator.com', description: 'Invoice generator', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6X6YJQjHIQuFBWKfGT8Zul8u3PJ4DDL3vw&s' },
          { title: 'Coover', url: 'https://www.coover.fr/outils/modele-devis', description: 'Quote template maker', pricing: 'Free', iconUrl: 'https://www.coover.fr/wp-content/uploads/2020/04/logo-social.png' }
        ]
      }
    ]
  },
  'ai-voice-generator': {
    id: 'ai-voice-generator',
    title: 'AI Voice Generator',
    description: 'AI voice and speech generation tools.',
    subcategories: [
      {
        title: 'Voice Generators',
        entries: [
          { title: 'Adobe Podcast', url: 'https://podcast.adobe.com/enhance', description: 'Audio enhancement', pricing: 'Free', iconUrl: 'https://cdn-1.webcatalog.io/catalog/adobe-podcast/adobe-podcast-icon-filled-256.webp?v=1759151473794' },
          { title: 'ElevenLabs', url: 'https://elevenlabs.io', description: 'AI voice generator', pricing: 'Free', iconUrl: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg' },
          { title: 'Hume', url: 'https://demo.hume.ai', description: 'Meeting assistant', pricing: 'Free', iconUrl: 'https://fahimai.com/wp-content/uploads/2025/04/Hume-AI-Logo.png' },
          { title: 'Sesame', url: 'https://www.sesame.com', description: 'High-quality audio', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQEfdhjHO_8lcg/company-logo_200_200/B56ZU_B7gMGoAM-/0/1740519225978/sesame_ai_inc_logo?e=2147483647&v=beta&t=Q7Re5VC8zzl83JCh18yT2fkNQPDoWOiHGBWwOJ50RUA' },
          { title: 'Eself', url: 'https://www.Eself.ai', description: 'AI Video Assistants', pricing: 'Free', iconUrl: 'https://ph-files.imgix.net/6f9a43d2-94a3-4566-9f37-98981d3f6efc.png?auto=format' }
        ]
      }
    ]
  },
  'ai-business-plan': {
    id: 'ai-business-plan',
    title: 'AI Business Plan',
    description: 'AI tools for business planning.',
    subcategories: [
      {
        title: 'Business Planning',
        entries: [
          { title: 'Validatorai', url: 'https://validatorai.com', description: 'Business plan validator', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQF_NSpt2MHFKg/company-logo_200_200/company-logo_200_200/0/1729697375090/validatorai_logo?e=2147483647&v=beta&t=e1aeI12pYQRPFN_PLph3FCbqKl-tm2TiJx-CwAlBDpI' },
          { title: 'Experai', url: 'https://www.experai.com', description: 'Business planning AI', pricing: 'Free', iconUrl: 'https://www.experai.com/logoShort.png' }
        ]
      }
    ]
  },
  'ai-automation-tools': {
    id: 'ai-automation-tools',
    title: 'AI Automation Tools',
    description: 'AI-powered automation platforms.',
    subcategories: [
      {
        title: 'Automation Platforms',
        entries: [
          { title: 'Make', url: 'https://www.make.com/en', description: 'Automation platform', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQHnCozggmmIlg/company-logo_200_200/company-logo_200_200/0/1711022203215/itsmakehq_logo?e=2147483647&v=beta&t=29Xz2B2VIMTWeP3lXYnNTnk1pbag0SPXMOXWrAghHU8' },
          { title: 'IFTTT', url: 'https://ifttt.com', description: 'Automation service', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/1808180?s=280&v=4' },
          { title: 'N8N', url: 'https://n8n.io', description: 'Open source automation', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1536335358803251202/-gASF0c6_400x400.png' },
          { title: 'Zapier', url: 'https://zapier.com', description: 'Automation platform', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVwOzVey6XcMevohRDman3xgDFw91v8qZfw&s' },
          { title: 'ActivePieces', url: 'https://www.activepieces.com', description: 'Automation tool', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUETk9w0vwIGVCiaW2LnhLmJMyUQr1t7-BuB6kw-u4TTSnTG-cYD8hnPUWm4OgT6YOpw&usqp=CAU' },
          { title: 'Nekton', url: 'https://nekton.ai', description: 'AI automation', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQGzPTl1_-mKaA/company-logo_200_200/company-logo_200_200/0/1684269412197?e=2147483647&v=beta&t=jw3SBRDnTKanxhXNk1PF0c_2Dc_xpsWHUg1hLLO9eY4' },
          { title: 'Automa', url: 'https://www.automa.site', description: 'Browser automation', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/102145096?s=200&v=4' },
          { title: 'Gumloop', url: 'https://www.gumloop.com', description: 'Automation platform', pricing: 'Free', iconUrl: 'https://yt3.googleusercontent.com/j2jp67Sz_p7n6vFvtfbBltRz1Z184xlpfdVxz_zWWk7u0fDvVkgag0JGj0b4dZMITSNTnhCX=s900-c-k-c0x00ffffff-no-rj' },
          { title: 'Flowise', url: 'https://flowiseai.com', description: 'Open source LLM apps', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQGMaTGGNpIv7w/company-logo_200_200/B4EZbUj8NOHIAM-/0/1747322915455/flowiseai_logo?e=2147483647&v=beta&t=EGzOLpMuheoUON_tO5HrJGhmg3S5V1rToZrjVG4ehdk' },
          { title: 'RASA', url: 'https://rasa.com', description: 'Open source chatbot framework', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDi1z4Xrt9ruRQWSsABdmsmfKqEcDIBrnpqJVBHJGcfcVbEIh5ZT4nnSfuIL6jWpqA3NE&usqp=CAU' },
          { title: 'Langflow', url: 'https://www.langflow.org', description: 'LLM automation builder', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1906737039724400640/aUuTetdY_400x400.jpg' },
          { title: 'VectorShift', url: 'https://vectorshift.ai', description: 'AI automation platform', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQGg12Reg6VSHg/company-logo_200_200/B4EZc5cWBcHYAQ-/0/1749015421370/vectorshift_logo?e=2147483647&v=beta&t=hYh2tnDq_0-VFRPU3AxKNmseZ7Xr0ieJEfZ9tBfSsIA' },
          { title: 'Dialogflow', url: 'https://dialogflow.cloud.google.com', description: 'Conversational AI platform', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/8170782?s=280&v=4' },
          { title: 'Botpress', url: 'https://botpress.com', description: 'Chatbot builder platform', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/23510677?s=280&v=4' }
        ]
      }
    ]
  },
  'ai-manychat-bot-tools': {
    id: 'ai-manychat-bot-tools',
    title: 'AI ManyChat Bot Tools',
    description: 'Tools for ManyChat and bot automation.',
    subcategories: [
      {
        title: 'Bot Tools',
        entries: [
          { title: 'Landbot', url: 'https://landbot.io', description: 'Chatbot builder', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQHYUR1kv6lwMQ/company-logo_200_200/company-logo_200_200/0/1684510788150/landbot_io_logo?e=2147483647&v=beta&t=rqeOiekWIBr5nOrnhVdy-P5fRY9wf2uGcjVOTRIqTJs' },
          { title: 'Chatfuel', url: 'https://chatfuel.com', description: 'Messenger bot platform', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp2HaWRBxp4sP0gAnaKGKdm880WNH0LAhgA&s' },
          { title: 'Jotform', url: 'https://www.jotform.com/ai/agents/', description: 'AI agents builder', pricing: 'Free', iconUrl: 'https://cdn.jotfor.ms/p/ai-agents/assets/img-min/homepage/ai-agent-app.png?v=0.1' },
          { title: 'Chatbot', url: 'https://www.chatbot.com', description: 'Chatbot platform', pricing: 'Free', iconUrl: 'https://chatbot.design/images/chatbot/DIGITAL%20%28RGB%29/PNG/Contained_Mark_Blue.png' },
          { title: 'Manychat', url: 'https://manychat.com', description: 'Chat marketing platform', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQHIByiENrGlqw/company-logo_200_200/company-logo_200_200/0/1701868841913/manychat_logo?e=2147483647&v=beta&t=xvpD1m-xVs12lw1-TWig_vpXa6wGBVm7Qp4ONqbXdu8' },
          { title: 'Tidio', url: 'https://www.tidio.com', description: 'Live chat software', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQG96M93fIiqJQ/company-logo_400_400/company-logo_400_400/0/1705004437537/tidio_ltd_logo?e=2147483647&v=beta&t=pJr_nRAp9cp2xNzFtMJTTl-VmImIe1q8s7xwLDABkLI' },
          { title: 'Zendesk', url: 'https://www.zendesk.com', description: 'Customer service platform', pricing: 'Paid', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgYbheCRUeOZzmIoUEgFNes59nlReNTZ42g&s' },
          { title: 'Livechat', url: 'https://www.livechat.com', description: 'Live chat software', pricing: 'Paid', iconUrl: 'https://livechat.design/images/livechat/DIGITAL%20%28RGB%29/PNG/Contained_Mark_Orange.png' },
          { title: 'Gorgias', url: 'https://www.gorgias.com', description: 'Customer support platform', pricing: 'Paid', iconUrl: 'https://images.prismic.io/sacra/Z79hsp7c43Q3gRtB_gorgias_logo.png?auto=format,compress' },
          { title: 'Birdeye', url: 'https://birdeye.com', description: 'Customer experience platform', pricing: 'Paid', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQEYDTN4uBYcNg/company-logo_200_200/company-logo_200_200/0/1719957108088/birdeye_logo?e=2147483647&v=beta&t=sSKIF2PnOZ_vyHtsmLKeGm46FdvUCydkwTJtgDhL8Mc' },
          { title: 'Freshworks', url: 'https://www.freshworks.com/crm/sales/', description: 'CRM sales platform', pricing: 'Paid', iconUrl: 'https://ramp.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6jz6vxxd%2Fproduction%2F790b9405fac4b4080613929b6fd3ab6f7496fe92-2400x2400.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75' },
          { title: 'Hubspot', url: 'https://www.hubspot.com/products/cms', description: 'CMS and CRM platform', pricing: 'Free', iconUrl: 'https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/hubspotcms_7640_logo_1631606596_wlnah.jpg' },
          { title: 'Olark', url: 'https://www.olark.com', description: 'Live chat platform', pricing: 'Paid', iconUrl: 'https://cdn.prod.website-files.com/646d3c494b3d75dd99420891/655bec4614a88f1b159069d4_Olark-logo-Square.png' },
          { title: 'Intercom', url: 'https://www.intercom.com', description: 'Customer messaging platform', pricing: 'Paid', iconUrl: 'https://media.licdn.com/dms/image/v2/C560BAQHxzX8mZOqVzg/company-logo_200_200/company-logo_200_200/0/1648059752074/intercom_logo?e=2147483647&v=beta&t=kko3-pu2qdFxITTAdkjbsZ-Iypk4ZFsP7HQLUi83bUk' },
          { title: 'Poe', url: 'https://poe.com/login', description: 'AI chat platform', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/A9D18P0Sm7s9T4LMjmuL8YWsYSGQrPABiLNh9LNvRrJlQ80HVI4hxe-GaCyi-180Cg=w240-h480-rw' }
        ]
      }
    ]
  },
  'ai-chat-gpt-tools': {
    id: 'ai-chat-gpt-tools',
    title: 'AI Chat-Gpt Tools',
    description: 'Tools and extensions for ChatGPT.',
    subcategories: [
      {
        title: 'ChatGPT Tools',
        entries: [
          { title: 'Openai', url: 'https://openai.com', description: 'ChatGPT platform', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3PwERLLNB9XKFpeMgAMPxl5VvN3HRJnXQQ&s' },
          { title: 'Gemini', url: 'https://gemini.google.com/app', description: 'Google AI assistant', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/bTpNtZ6rYYX2SeI-wC4cnr7MJnOh2hjtgYu3UIrSxE09lM3GPl_Uhf9_Ih2Smje2bc0V' },
          { title: 'Copilot', url: 'https://copilot.microsoft.com', description: 'Microsoft AI assistant', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/p8R1lAZI5_WCOzmvBYnOQasCWcjc9d2vM7z4PaVku8b9AfxGhqQqM0ldJ8KULHblVj-g=w240-h480-rw' },
          { title: 'Claude ai', url: 'https://claude.ai', description: 'Anthropic AI assistant', pricing: 'Free', iconUrl: 'https://claude.ai/images/claude_app_icon.png' },
          { title: 'Perplexity', url: 'https://www.perplexity.ai', description: 'AI search engine', pricing: 'Free', iconUrl: 'https://framerusercontent.com/images/gcMkPKyj2RX8EOEja8A1GWvCb7E.jpg?width=2000&height=2000' },
          { title: 'Jasper', url: 'https://www.jasper.ai', description: 'AI writing platform', pricing: 'Paid', iconUrl: 'https://cdn.prod.website-files.com/6807f44ec8a964d38a705332/683ba90f27d44bc11e5687ea_Jasper%20Logo%20Square.svg' },
          { title: 'Deepseek', url: 'https://www.deepseek.com', description: 'China NLP-GPT', pricing: 'Free', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Deepseek-logo-icon.svg/771px-Deepseek-logo-icon.svg.png' },
          { title: 'Qwen', url: 'https://chat.qwen.ai', description: 'China NLP-GPT', pricing: 'Free', iconUrl: 'https://zoftware-logo.s3.ap-south-1.amazonaws.com/Qwen%20Chat%20Logo.webp' },
          { title: 'Minmax', url: 'https://minmax.ai', description: 'China NLP-GPT', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1875100548535574529/VxHk9HyU_400x400.jpg' },
          { title: 'Kimi', url: 'https://kimi.ai', description: 'China NLP-GPT', pricing: 'Free', iconUrl: 'https://aimode.co/wp-content/uploads/2025/03/Kimi-AI-Logo.webp' }
        ]
      }
    ]
  },
  'ai-art-generator-tools': {
    id: 'ai-art-generator-tools',
    title: 'AI Art Generator Tools',
    description: 'AI art generation platforms.',
    subcategories: [
      {
        title: 'Art Generators',
        entries: [
          { title: 'OpenArt', url: 'https://openart.ai', description: 'AI art platform', pricing: 'Free', iconUrl: 'https://media.licdn.com/dms/image/v2/D560BAQHeTxI4aMiz1w/company-logo_200_200/company-logo_200_200/0/1664690694278?e=2147483647&v=beta&t=bCF_9kV6n2Fhd862ElRu69p8sTj1y9bMaktulu16lUI' },
          { title: 'Deepai', url: 'https://deepai.org', description: 'AI tools collection', pricing: 'Free', iconUrl: 'https://consumersiteimages.trustpilot.net/business-units/65b62b26768fed948677415e-198x149-1x.jpg' },
          { title: 'Lexica', url: 'https://lexica.art', description: 'AI art search engine', pricing: 'Free', iconUrl: 'https://i.pinimg.com/280x280_RS/55/7a/90/557a90529e82161d8b819c4c5036450a.jpg' },
          { title: 'Leonardo', url: 'https://leonardo.ai', description: 'AI image generator', pricing: 'Free', iconUrl: 'https://app.leonardo.ai/img/leonardo-logo.svg' },
          { title: 'Midjourney', url: 'https://www.midjourney.com', description: 'AI art generator', pricing: 'Paid', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Midjourney_Emblem.svg/2048px-Midjourney_Emblem.svg.png' },
          { title: 'Dall E 3', url: 'https://openai.com/index/dall-e-3/', description: 'OpenAI image generator', pricing: 'Paid', iconUrl: 'https://minitoolai.com/article-photos/OpenAI%20Dall%20E%203.webp' },
          { title: 'Ideogram', url: 'https://ideogram.ai', description: 'AI art generator', pricing: 'Free', iconUrl: 'https://brandlogos.net/wp-content/uploads/2025/06/ideogram-logo_brandlogos.net_4d8js.png' },
          { title: 'Stable Diffusionweb', url: 'https://stablediffusionweb.com/', description: 'Stable Diffusion online', pricing: 'Free', iconUrl: 'https://stablediffusion.fr/sd.png' },
          { title: 'mootion', url: 'https://www.mootion.com', description: 'Ideas into visual stories', pricing: 'Free', iconUrl: 'https://yt3.googleusercontent.com/LxEeJ7YRqpcZvTKoeE8_M_4jkH4-Xyt-DHrdYkEWypjtznh3wacDbcAv06jc5IrFPUeHymXe=s900-c-k-c0x00ffffff-no-rj' }
        ]
      }
    ]
  },
  'ai-beautiful-presentations-tools': {
    id: 'ai-beautiful-presentations-tools',
    title: 'AI Beautiful Presentations Tools',
    description: 'AI tools for creating presentations.',
    subcategories: [
      {
        title: 'Presentation Tools',
        entries: [
          { title: 'Gamma', url: 'https://gamma.app', description: 'AI presentation maker', pricing: 'Free', iconUrl: 'https://store-images.s-microsoft.com/image/apps.53673.13800228740496758.b926c1b0-f31a-4a9b-b1b3-88dd15f27137.a0a38389-643f-48ed-9379-92a9fb5a7c94' },
          { title: 'Figma', url: 'https://www.figma.com/slides/', description: 'Figma Slides', pricing: 'Free', iconUrl: 'https://s3-alpha.figma.com/hub/file/3152337111/0e0f44e4-8de2-49c9-b8f0-406ece8fd1b6-cover.png' }
        ]
      }
    ]
  },
  'ai-content-creation-tools': {
    id: 'ai-content-creation-tools',
    title: 'AI Content Creation Tools',
    description: 'AI tools for general content creation.',
    subcategories: [
      {
        title: 'Content Creation',
        entries: [
          { title: 'RunWay ml', url: 'https://runwayml.com', description: 'AI video generation', pricing: 'Free', iconUrl: 'https://runwayml.com/icon.png?354f8c2b5139d556' },
          { title: 'Sora', url: 'https://openai.com/sora/', description: 'OpenAI video generator', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/ZADfyDpLoUH0U4yuzt54hA9i7qiJKuuFAE0OR5C7QSOcBMKc9JGlsR8uGhputFgjE5_wMUMFwuRKHAjn-EsDsw=w240-h480-rw' },
          { title: 'Dream Machine', url: 'https://lumalabs.ai', description: 'Luma AI video generator', pricing: 'Free', iconUrl: 'https://spcdn.shortpixel.ai/spio/ret_img,q_orig,to_auto,s_webp:avif/https://cdn-luma.com/public/lumalabs.ai/media-kit/1.svg' },
          { title: 'Wan', url: 'https://wan.video', description: 'Video creation platform', pricing: 'Free', iconUrl: 'https://openwanai.com/logo.png' },
          { title: 'Pika Lab', url: 'https://pika.art/login', description: 'AI video generator', pricing: 'Free', iconUrl: 'https://mms.businesswire.com/media/20231127388431/en/1953851/5/WhatsApp_Image_2023-11-27_at_19.10.06_%281%29.jpg?download=1' },
          { title: 'Domo ai', url: 'https://domoai.app', description: 'AI content creator', pricing: 'Free', iconUrl: 'https://www.domoai.app/apple-touch-icon.png' }
        ]
      }
    ]
  },
  'workflow-visualization-tools': {
    id: 'workflow-visualization-tools',
    title: 'Workflow Visualization Tools',
    description: 'Tools for visualizing workflows and processes.',
    subcategories: [
      {
        title: 'Workflow Tools',
        entries: [
          { title: 'Clickup', url: 'https://clickup.com', description: 'Project management platform', pricing: 'Free', iconUrl: 'https://avatars.slack-edge.com/2024-05-01/7057208497908_a4351f6deb91094eac4c_512.png' },
          { title: 'Monday', url: 'https://monday.com', description: 'Work management platform', pricing: 'Paid', iconUrl: 'https://monday.com/p/wp-content/uploads/2020/07/monday-200x200-1.png' },
          { title: 'Asana', url: 'https://asana.com', description: 'Task management platform', pricing: 'Free', iconUrl: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg' },
          { title: 'Trello', url: 'https://trello.com', description: 'Visual project boards', pricing: 'Free', iconUrl: 'https://logo.svgcdn.com/logos/trello.png' },
          { title: 'wrike', url: 'https://www.wrike.com', description: 'Project management tool', pricing: 'Paid', iconUrl: 'https://play-lh.googleusercontent.com/uh-GbLWEKoIefta2iNX0L0zUWA66YTjfJ4cBarNZWbc7mEzbKUWbWg8NjjrojgkFH5ni=w240-h480-rw' },
          { title: 'Airtable', url: 'https://www.airtable.com', description: 'Database and spreadsheet tool', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelaD7G6XIdlUTV3uvwT9hwmb1_ZFyhzqKjA&s' },
          { title: 'Niftypm', url: 'https://niftypm.com', description: 'Project management platform', pricing: 'Free', iconUrl: 'https://www.niftypm.com/favicon.png' }
        ]
      }
    ]
  },
  'explorer': {
    id: 'explorer',
    title: 'Explorer',
    description: 'Exploration and discovery tools.',
    subcategories: [
      {
        title: 'Exploration Tools',
        entries: [
          { title: 'Tv Garden', url: 'https://tv.garden', description: 'Watch Tv For Free', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/168250776?v=4' },
          { title: 'AnswerThePublic', url: 'https://answerthepublic.com', description: 'Get Ideas from search data', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCVv2c9tarSBl60lQtiPwn3r2B5JD-7XbbA&s' },
          { title: 'Globe', url: 'https://explorer.globe.engineer', description: 'Try It - Globe explorer', pricing: 'Free', iconUrl: 'https://explorer.globe.engineer/login-logo.png' },
          { title: 'Tutorai', url: 'https://tutorai.me', description: 'Try It - AI tutor', pricing: 'Free', iconUrl: 'https://www.f6s.com/content-resource/profiles/5578634_27f7d233c7c706fa7edea6accbdcbe01986bba9b_th1.jpg' },
          { title: 'Learn Anything', url: 'https://learn-anything.xyz', description: 'Try It - Learning platform', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1979584490390290432/yvlSZYOL_400x400.jpg' }
        ]
      }
    ]
  },
  'others': {
    id: 'others',
    title: 'Others',
    description: 'Miscellaneous tools and resources.',
    subcategories: [
      {
        title: 'Miscellaneous',
        entries: [
          { title: 'Darebee', url: 'https://darebee.com', description: 'Free Workout programs', pricing: 'Free', iconUrl: 'https://darebee.com/images/content/prints/logo-honeycomb.png' },
          { title: 'MuscleWiki', url: 'https://musclewiki.com', description: 'Free Workout guide', pricing: 'Free', iconUrl: 'https://yt3.googleusercontent.com/erXvfFlW_lp2KzkvHi4i9a-oJNmCqJFJLqLiTbRwEbkorAD-LLANbyEZ8k7N47aHWf-F6EbJ=s900-c-k-c0x00ffffff-no-rj' },
          { title: 'MyBodyCreator', url: 'https://www.mybodycreator.com/exercises', description: 'Exercise library - Importent!', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrc4CFlNzLNJ2YpuN3EGff2MRZY8G1feUeBg&s' },
          { title: 'Ifix it', url: 'https://www.ifixit.com', description: 'Free Repair guides - try it', pricing: 'Free', iconUrl: 'https://images.seeklogo.com/logo-png/25/1/ifixit-logo-png_seeklogo-257675.png' }
        ]
      }
    ]
  },
  'free-links': {
    id: 'free-links',
    title: 'Free Links',
    description: 'Collection of free links and resources.',
    subcategories: [
      {
        title: 'Free Resources',
        entries: [
          { title: 'N8N Templates', url: 'https://drive.google.com/file/d/1PJMFvX4wmVBkUjldDsnZKGokG1zhyCrG/view?pli=1', description: 'Importent! N8N workflow templates', pricing: 'Free', iconUrl: 'https://img.freepik.com/premium-vector/google-drive-logo-icon_1273375-832.jpg?semt=ais_hybrid&w=740&q=80' },
          { title: 'Watikaty', url: 'https://bit.ly/watikaty', description: 'خاص بالمغاربة فقط', pricing: 'Free', iconUrl: 'https://img.freepik.com/premium-vector/google-drive-logo-icon_1273375-832.jpg?semt=ais_hybrid&w=740&q=80' },
          { title: 'Google Drive For U', url: 'https://bit.ly/sigmacodedrive', description: 'Importent! Resources collection', pricing: 'Free', iconUrl: 'https://img.freepik.com/premium-vector/google-drive-logo-icon_1273375-832.jpg?semt=ais_hybrid&w=740&q=80' },
          { title: 'Google Drive V2', url: 'https://romhub.io', description: 'Importent! ROM hub', pricing: 'Free', iconUrl: 'https://img.freepik.com/premium-vector/google-drive-logo-icon_1273375-832.jpg?semt=ais_hybrid&w=740&q=80' },
          { title: 'Notion Template', url: 'https://difficult-crystal-c93.notion.site/Notion-8967c3c45b3642ffa8220ce81d4473f4', description: 'Free Notion templates collection', pricing: 'Free', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' }
        ]
      }
    ]
  },
  'games': {
    id: 'games',
    title: 'Ps4/Ps3/Pc Games',
    description: 'Resources for PS4, PS3, and PC games.',
    subcategories: [
      {
        title: 'Game Resources',
        entries: [
          { title: 'Wolf Game AR', url: 'https://wolfgame-ar.site/category/arabizations/', description: 'تعريب الالعاب - Arabic game translations', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDyZZ1e4Omxzpi-IDdduOX-D4zAgskZGAiQ&s' },
          { title: 'Crack Watcher', url: 'https://crackwatcher.com', description: 'Cracked Or Not - Game crack status', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLH9hFjfw2GPqcNvlVgLYZtqAgRa7ssGXlQ&s' },
          { title: 'Game Status', url: 'https://gamestatus.info', description: 'Cracked Or Not - Track game cracks', pricing: 'Free', iconUrl: 'https://cdn-icons-png.flaticon.com/512/10339/10339556.png' },
          { title: 'Online-fix', url: 'https://online-fix.me', description: 'Crack games online fix', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C9sw2Vl_nJAHGZx9TeilcUf00fhfdnlGOD9_3Pl0-qRcVwFm-m-qUrD8Su-z4lcbPCo&usqp=CAU' },
          { title: 'Wifi4games', url: 'https://www.wifi4games.com', description: 'Games download site', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNr3zD3UIzbLDfedWdv0Yzqa-yQ0ypNKCTUg&s' },
          { title: '4Fnet', url: 'https://www.4fnet.org', description: 'Games download site', pricing: 'Free', iconUrl: 'https://storage.ko-fi.com/cdn/useruploads/post/7352ff80-b11f-49ec-87df-d115928ea110_5a3f5c13-6a8b-4a37-b50e-dcf11177f285.png' },
          { title: 'Koyso', url: 'https://koyso.com', description: 'Games download site', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcC2CqJsqOpU0TYgBY55prAqA5a10aeOm1g&s' },
          { title: 'PeskGames', url: 'https://peskgames.com/ar/', description: 'Games download site', pricing: 'Free', iconUrl: 'https://peskgames.com/css/img/goimg.jpg' },
          { title: 'GamesLeech', url: 'https://gamesleech.com', description: 'Games download site', pricing: 'Free', iconUrl: 'https://styles.redditmedia.com/t5_bl6uux/styles/communityIcon_r8fe4epbr82d1.png' },
          { title: 'OceanOfGames', url: 'https://oceanofgames.com', description: 'Games download site', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhFA2XuyKDqr5E6b0DKSvr6zJ56GhmqOliQ&s' },
          { title: 'Game Pc Iso', url: 'https://gamepciso.com', description: 'PC games ISO downloads', pricing: 'Free', iconUrl: 'https://img.tapimg.net/market/images/1ee5e974c6116104c7ad9fd9a4f13990.png/appicon?t=1' },
          { title: 'Repack Info', url: 'https://repack.info/en/', description: 'Game repacks info', pricing: 'Free', iconUrl: 'https://thehub-io.imgix.net/files/s3/20220110082755-326350f034e00197a144c5ff4b3d757f.png?fit=crop&w=300&h=300&auto=format&q=60' },
          { title: 'Steamunlocked', url: 'https://steamunlocked.net', description: 'Unlocked Steam games', pricing: 'Free', iconUrl: 'https://pbs.twimg.com/profile_images/1378062027755773952/oZQY1laH_400x400.png' },
          { title: 'Fitgirl', url: 'https://fitgirl-repacks.site', description: 'Fitgirl game repacks', pricing: 'Free', iconUrl: 'https://fitgirl-repacks.site/wp-content/uploads/2016/08/icon.jpg' },
          { title: 'Dodi Repacks', url: 'https://dodi-repacks.site', description: 'Dodi game repacks', pricing: 'Free', iconUrl: 'https://avatars.githubusercontent.com/u/214397634?s=200&v=4' },
          { title: 'Romsfun', url: 'https://romsfun.com', description: 'ROM games collection', pricing: 'Free', iconUrl: 'https://romsfun.com/wp-content/uploads/2024/09/08Dyiz4g_400x400.jpg' },
          { title: 'Game 3 Rb', url: 'https://game3rb.com', description: 'Games download site', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamXxMrlvtx0XOkZNcO8K1vrl4qQSjdtW7cg&s' },
          { title: 'DLPS Game', url: 'https://dlpsgame.com/category/ps4/', description: 'PS4 games downloads', pricing: 'Free', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqXA1ukhsVVpnprDTjo5k27_h-x_HXXFUhw&s' },
          { title: 'Super PSX', url: 'https://www.superpsx.com/category/ps4/ps4-games-free/', description: 'PS4 free games', pricing: 'Free', iconUrl: 'https://play-lh.googleusercontent.com/eFoMxqZ_x004fdd_pgJ3sDnMqy9xMUg9_uXydI6gZkE489Kvm_70fAXHN2qejxe59g' }
        ]
      }
    ]
  },
  'ai-agent-hosting': {
    id: 'ai-agent-hosting',
    title: 'AI Agent Hosting',
    description: 'Hosting platforms for AI agents.',
    subcategories: [
      {
        title: 'Hosting Providers',
        entries: [
          {
            title: "Kamatera",
            url: "https://www.kamatera.com",
            description: "VPS hosting - ميزانية متوسطة، تحكم كامل",
            pricing: "Paid",
            iconUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQG7BZ8IYavhmg/company-logo_200_200/company-logo_200_200/0/1669023403847/kamateracloud_logo?e=2147483647&v=beta&t=Q2olWY8kKFP1vgWbONks256-acw5El5ztGkqAbc4KeY"
          },
          {
            title: "Contabo",
            url: "https://contabo.com",
            description: "VPS hosting - ميزانية متوسطة، تحكم كامل",
            pricing: "Paid",
            iconUrl: "https://cdn-1.webcatalog.io/catalog/contabo/contabo-icon-filled-256.png?v=1714778097384"
          },
          {
            title: "DigitalOcean",
            url: "https://www.digitalocean.com",
            description: "Cloud VPS - ميزانية متوسطة، تحكم كامل",
            pricing: "Paid",
            iconUrl: "https://www.digitalocean.com/_next/static/media/apple-touch-icon.d7edaa01.png"
          },
          {
            title: "Vultr",
            url: "https://www.vultr.com",
            description: "Cloud VPS - ميزانية متوسطة، تحكم كامل",
            pricing: "Paid",
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1qr4Vge4waJqBMJXubICNsKRGInZWWTpRQ&s"
          },
          {
            title: "Google Cloud",
            url: "https://cloud.google.com",
            description: "Cloud Server - ميزانية مرتفعة، موثوقية أكبر",
            pricing: "Paid",
            iconUrl: "https://yt3.googleusercontent.com/ytc/AIdro_n94STjDykDksYxhfE4RhM1BT4R2H69tIAHav8jrey03qQ=s900-c-k-c0x00ffffff-no-rj"
          },
          {
            title: "Amazon AWS",
            url: "https://aws.amazon.com",
            description: "Cloud Server - ميزانية مرتفعة، موثوقية أكبر",
            pricing: "Paid",
            iconUrl: "https://www.inovex.de/wp-content/uploads/Amazon_Web_Services_Logo-kl.png"
          },
          {
            title: "Microsoft Azure",
            url: "https://azure.microsoft.com/",
            description: "Cloud Server - ميزانية مرتفعة، موثوقية أكبر",
            pricing: "Paid",
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          }
]
      }
    ]
  }
,
  'learning-platforms': {
    id: 'learning-platforms',
    title: 'Learning Platforms',
    description: 'Platforms for learning and education.',
    subcategories: [
      {
        title: 'Free Without Certificate',
        entries: [
          {
            title: 'Anthropic Academy',
            url: 'https://anthropic.skilljar.com',
            description: 'Learn to work alongside Claude on your real files and projects. This hands-on course covers the Cowork task loop, plugins and skills, file and research ...',
            pricing: 'Free',
            iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQxsrnr_5qk5WWR94ALEy_4IL8J_TjI2PRA&s',
            tags: [
              'Cloud code',
              'Claude 101',
              'Building with the Claude API'
            ]
          }
        ]
      },
      {
            "title": "Free with Certificate",
            "entries": [
                  {
                        "title": "satr",
                        "url": "https://satr.tuwaiq.edu.sa/all-paths",
                        "description": "منصة سطر التعليمية توفر دورات تدريبية ومسارات تعليمية في البرمجة، تطوير التطبيقات، الأمن السيبراني، الذكاء الاصطناعي، وعلوم البيانات بإشراف الاتحاد السعودي ...",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbHtyuNjjly8xeyu8CrFsyXG6fIq5ltYU9llGiYcIAtWe_1kQVEyl8M1hDAsE1FpIT0M&usqp=CAU",
                        "tags": [
                              "مسار البرمجة",
                              "مسار الأمن السيبراني",
                              "قواعد البيانات",
                              "..."
                        ]
                  },
                  {
                        "title": "One Million Prompters",
                        "url": "https://dub.ai/en/omp/#modules",
                        "description": "One Million Prompters is an ambitious initiative aimed at equipping one million individuals with the skills to use AI tools as well as AI and Prompt Literacy skills over the next three years.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntlVd44N_LClpR7VbmFhvuN1O5KojGP3aWA&s",
                        "tags": [
                              "Unleashing the Power of AI",
                              "Commanding Conversations with AI Chatbots",
                              "..."
                        ]
                  },
                  {
                        "title": "Coursat",
                        "url": "https://www.coursat.org/index.php",
                        "description": "كورسات هي منصة عربية توفر كورسات مجانية عالية الجودة في مختلف المجالات والتخصصات تسعى إلى رفع مستوى التعليم الإلكتروني في الوطن العربي كما توفر فرصة لأصحاب ...",
                        "pricing": "Free",
                        "iconUrl": "https://mentoraraby.com/wp-content/uploads/2021/03/%D9%83%D9%88%D8%B1%D8%B3%D8%A7%D8%AA.jpg",
                        "tags": [
                              "البرمجة",
                              "التصميم",
                              "..."
                        ]
                  },
                  {
                        "title": "Edraak",
                        "url": "https://www.edraak.org/explore",
                        "description": "إدراك هي منصة إلكترونية عربية للمساقات الجماعية مفتوحة المصادر (MOOCs). تم تأسيس إدراك بمبادرة من مؤسسة الملكة رانيا للتعليم والتنمية والتي تحرص على بذل ...",
                        "pricing": "Free",
                        "iconUrl": "https://media.licdn.com/dms/image/v2/C4D0BAQF3Rt0FdUD0xw/company-logo_200_200/company-logo_200_200/0/1638265018956/edraak_logo?e=2147483647&v=beta&t=S8fzfJfsJMZ03xZhWMvbD-qjn7Ob8iCUec8RFGYzG10",
                        "tags": [
                              "الأعمال والريادة",
                              "الصحة والتغذية",
                              "..."
                        ]
                  },
                  {
                        "title": "VCN",
                        "url": "https://virtualcoursesnow.com/courses",
                        "description": "VCN offers courses in digital marketing, copywriting, email marketing, sales, virtual assistant, graphic design, and mobile app development.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PtBpfyYZY4kZbbBYTuDaE1sMQgg2B0jxmQ&s",
                        "tags": [
                              "Copywriting",
                              "Email Marketing",
                              "Digital Marketing",
                              "Sales",
                              "Virtual Assistant",
                              "..."
                        ]
                  },
                  {
                        "title": "Techcampus",
                        "url": "https://techcampus.com/courses",
                        "description": "TechCampus ; AWS Certified Cloud Practitioner (CLF-C02) · AI. مجاني ; الاختراق الاخلاقي المعتمد CEH v12 · Cyber. $207.00 ; CyberHack - Practical · General.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LUS3he1Y-BGf2JfyIlVBTWKJwhrWr6KHTA&s",
                        "tags": [
                              "network",
                              "coding",
                              "cyber",
                              "..."
                        ]
                  },
                  {
                        "title": "Mahara Tech",
                        "url": "https://maharatech.gov.eg",
                        "description": "maharatech is an online learning platform, offering high-quality courses authored by Information Technology Institute ITI, All Videos in maharatech Produced ...",
                        "pricing": "Free",
                        "iconUrl": "",
                        "tags": [
                              "Cybersecurity",
                              "Artificial Intelligence",
                              "..."
                        ]
                  }
            ]
    },
      {
            "title": "Free without Certificate",
            "entries": [
                  {
                        "title": "Codedex",
                        "url": "https://www.codedex.io/courses",
                        "description": "Start your coding journey with 200+ hours of interactive programming exercises paired with real-world projects. Explore for free!",
                        "pricing": "Free",
                        "iconUrl": "https://avatars.githubusercontent.com/u/105237839?s=200&v=4",
                        "tags": [
                              "DATA SCIENCE",
                              "WEB DEVELOPMENT",
                              "Computer Science",
                              "GAME DEVELOPMENT"
                        ]
                  },
                  {
                        "title": "Udemy",
                        "url": "https://www.udemy.com",
                        "description": "Udemy helps you build in-demand skills fast and advance your career in a changing job market.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MDsfy7ltQdCGSxYcslBASDohg9_HWXyrUg&s",
                        "tags": [
                              "Ai",
                              "Development",
                              "Business",
                              "Finance & Accounting",
                              "IT & Software",
                              "..."
                        ]
                  },
                  {
                        "title": "Cisco Networking Academy",
                        "url": "https://www.netacad.com",
                        "description": "Free online courses. In-person learning. Certification-aligned pathways in topics like Cybersecurity, Networking, and Python.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yMNy_n0CevcNHSdusd12-bf940f6c758zQ&s",
                        "tags": [
                              "Cybersecurity",
                              "Networking",
                              "AI & Data Science",
                              "..."
                        ]
                  },
                  {
                        "title": "Hp Life",
                        "url": "https://www.life-global.org",
                        "description": "Improve Your Business Skills With Free Courses From HP LIFE",
                        "pricing": "Free",
                        "iconUrl": "https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2024-04/hp-logo.jpg.webp?itok=JA3rX04A",
                        "tags": [
                              "Communication",
                              "Digital Business Skills",
                              "Entrepreneurship",
                              "..."
                        ]
                  },
                  {
                        "title": "SimpliLearn",
                        "url": "https://www.simplilearn.com/skillup-free-online-courses",
                        "description": "Courses focused on building strong foundational skills for career growth",
                        "pricing": "Free",
                        "iconUrl": "https://play-lh.googleusercontent.com/uphrWz_e_K_pZrPOmCR34A6grxPtva0kM8bhMSgdycrlxiBC7C_JzGtyJLn1mfrRLrg",
                        "tags": [
                              "Generative AI",
                              "AI & Machine Learning",
                              "Project Management",
                              "Cyber Security",
                              "..."
                        ]
                  },
                  {
                        "title": "MyGreatLearning",
                        "url": "https://www.mygreatlearning.com/academy",
                        "description": "Learn for free with courses designed by experts, and get certificates at affordable prices.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyPKRPhpQmbmSKlibHdKHSMeBF9ZP9-z6Fw&s",
                        "tags": [
                              "Management",
                              "ChatGPT & Gen AI",
                              "..."
                        ]
                  },
                  {
                        "title": "Coursera",
                        "url": "https://www.coursera.org",
                        "description": "Learn new job skills in online courses from industry leaders like Google, IBM, & Meta. Advance your career with top degrees from Michigan, Penn, Imperial & more.",
                        "pricing": "Free",
                        "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png",
                        "tags": [
                              "Data Analyst",
                              "Project Manager",
                              "..."
                        ]
                  },
                  {
                        "title": "Edx",
                        "url": "https://www.edx.org/courses?q=free+online+courses",
                        "description": "Learn anything, at any time, from anywhere, with free online courses from edX. Gain in-demand skills from world-renowned institutions to advance or begin your career.",
                        "pricing": "Free",
                        "iconUrl": "https://moocable.com/journal/media/posts/8/edx.png",
                        "tags": [
                              "Artificial intelligence",
                              "Computer science",
                              "..."
                        ]
                  },
                  {
                        "title": "W3Schools",
                        "url": "https://www.w3schools.com",
                        "description": "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.",
                        "pricing": "Free",
                        "iconUrl": "https://static.vecteezy.com/system/resources/previews/051/336/398/non_2x/w3schools-transparent-logo-free-png.png",
                        "tags": [
                              "HTML and CSS",
                              "JavaScript",
                              "Backend",
                              "..."
                        ]
                  },
                  {
                        "title": "Coddy",
                        "url": "https://coddy.tech/",
                        "description": "The free, fun, and effective way to learn to code!",
                        "pricing": "Free",
                        "iconUrl": "https://storage.googleapis.com/coddy-15505.appspot.com/public/coddy-logo-trans.png",
                        "tags": [
                              "python",
                              "c++",
                              "sql",
                              "..."
                        ]
                  },
                  {
                        "title": "CodeCademy",
                        "url": "https://www.codecademy.com",
                        "description": "Grow in your career and unlock new opportunities by learning in-demand skills in AI, data, coding, cybersecurity, and more.",
                        "pricing": "Free",
                        "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Codecademy_icon.svg",
                        "tags": [
                              "python",
                              "it",
                              "cybersecurity",
                              "..."
                        ]
                  },
                  {
                        "title": "FreeCodeCamp",
                        "url": "https://www.freecodecamp.org",
                        "description": "Advance your career by learning in-demand skills in Programming, DevOps, Cybersecurity, AI Engineering, and English for Developers.",
                        "pricing": "Free",
                        "iconUrl": "https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU=w240-h480-rw",
                        "tags": [
                              "Responsive Web Design",
                              "JavaScript",
                              "..."
                        ]
                  },
                  {
                        "title": "Alison",
                        "url": "https://alison.com",
                        "description": "Free online courses with certificates. Join 15 million graduates and empower your career. Study, learn, certify, upskill with free online learning and training",
                        "pricing": "Free",
                        "iconUrl": "https://cdn01.alison-static.net/public/html/site/img/alison-icon-default.png",
                        "tags": [
                              "it",
                              "Health",
                              "Language",
                              "..."
                        ]
                  },
                  {
                        "title": "Manara",
                        "url": "https://manara.tech",
                        "description": "Level Up Your Tech Career in AI & Cloud, for Free",
                        "pricing": "Free",
                        "iconUrl": "https://bookface-images.s3.amazonaws.com/small_logos/66c946ddc2dbfb955e186610de2e888e7e5dd204.png",
                        "tags": [
                              "AWS",
                              "Ai",
                              "..."
                        ]
                  },
                  {
                        "title": "Hubspot",
                        "url": "https://academy.hubspot.com/courses",
                        "description": "From quick, practical courses to comprehensive certifications, learn everything you need to know about the most sought-after business skills.",
                        "pricing": "Free",
                        "iconUrl": "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1200,q_100,w_1200/v1/gcs/platform-data-hubspotacademy/contentbuilder/Untitled%20design%20%286%29_NfJUYLR.png",
                        "tags": [
                              "Marketing",
                              "Sales",
                              "services",
                              "..."
                        ]
                  },
                  {
                        "title": "LinkedIn Learning",
                        "url": "https://www.linkedin.com/learning",
                        "description": "Identify the skills you need to advance your career",
                        "pricing": "Free",
                        "iconUrl": "https://www.bathtownshippubliclibrary.org/site-assets/images/logos/linkedin-in-learning-logo.png/@@images/image.png",
                        "tags": [
                              "Business",
                              "Technology",
                              "..."
                        ]
                  },
                  {
                        "title": "Meta Blueprint",
                        "url": "https://www.facebook.com/business/learn/certification",
                        "description": "Build on your professional skills. Grow your marketing career. Earn a Meta Certification.",
                        "pricing": "Free",
                        "iconUrl": "https://images.credly.com/images/cc2c9a21-84a0-4f80-bcda-eb9dea7aa35c/blob.png",
                        "tags": [
                              "Digital Marketing",
                              "Media Buying",
                              "Media Planning",
                              "Creative Strategy",
                              "..."
                        ]
                  },
                  {
                        "title": "skillshop",
                        "url": "https://skillshop.docebosaas.com/learn/signin",
                        "description": "Free Google Ads, Google Marketing Platform....",
                        "pricing": "Free",
                        "iconUrl": "https://quasa.io/storage/images/news/4s23QuVn17Vt896BEPtKJ5f5ENJ741IVRk5l6PXY.png",
                        "tags": [
                              "google ads",
                              "..."
                        ]
                  },
                  {
                        "title": "Google Grow",
                        "url": "https://grow.google/intl/uk/#filter",
                        "description": "Free digital skills training Whether you re looking to build your business, develop your career, or learn new AI skills, we can help you get started.",
                        "pricing": "Free",
                        "iconUrl": "https://grow.google/root/static/images/og-image.png",
                        "tags": [
                              "Ai",
                              "Cloud Computing",
                              "..."
                        ]
                  },
                  {
                        "title": "BlockChain",
                        "url": "https://blockchaintrainingalliance.com/products/building-on-hedera-course",
                        "description": "Blockchain Training Alliance is a leading US-based blockchain education and professional development platform for businesses and individuals. We currently offer 16 online courses for business professionals, developers and specialty focus areas. Join 150,000 students who ve trusted BTA for their online learning.",
                        "pricing": "Free",
                        "iconUrl": "https://media.licdn.com/dms/image/v2/C560BAQGTE6AirdyxPg/company-logo_200_200/company-logo_200_200/0/1650992696956/blockchain_training_alliance_logo?e=2147483647&v=beta&t=lteW928eZughspas6L7if-bxKU_AfGXj4gew1hVlxlw",
                        "tags": [
                              "Blockchain",
                              "Ethereum Developer",
                              "..."
                        ]
                  },
                  {
                        "title": "Linux Foundation",
                        "url": "https://training.linuxfoundation.org/resources/?_sft_content_type=free-course",
                        "description": "The Linux Foundation is a neutral, trusted hub for developers and organizations to code, manage, and scale open technology projects and ecosystems.",
                        "pricing": "Free",
                        "iconUrl": "https://media.licdn.com/dms/image/v2/D4E0BAQEMmIBVAnCNXA/company-logo_200_200/company-logo_200_200/0/1725732561727/the_linux_foundation_training__certification_logo?e=2147483647&v=beta&t=eqF0NKh0TS9SvsRtN-y2bdXZ9tEk8PHvJEOILRse1OA",
                        "tags": [
                              "Linux"
                        ]
                  },
                  {
                        "title": "Class Central",
                        "url": "https://www.classcentral.com",
                        "description": "Class Central aggregates courses from many providers to help you find the best courses on almost any subject, wherever they exist.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxQyU6_EWZQ8snX-SHIZkwI0_8xwf1eGKPg&s",
                        "tags": [
                              "Anythings"
                        ]
                  },
                  {
                        "title": "Digitaldefynd",
                        "url": "https://digitaldefynd.com/free-courses",
                        "description": "4 Million+ Learners | 96000+ Programs | 120+ Top University Partners.",
                        "pricing": "Free",
                        "iconUrl": "https://i.pinimg.com/280x280_RS/11/35/7c/11357c9a055556df8d34d8cce52bb4e3.jpg",
                        "tags": [
                              "Anythings"
                        ]
                  }
            ]
    },
      {
            "title": "Paid with Certificate",
            "entries": [
                  {
                        "title": "SketchUp Campus",
                        "url": "https://learn.sketchup.com/collections",
                        "description": "SketchUp Campus offers in-depth training at your own pace, with courses like Architecture Building, V-Ray for Interiors, and SketchUp Fundamentals.",
                        "pricing": "Paid",
                        "iconUrl": "https://eaglepoint.com/wp-content/uploads/2024/08/sketchup_logo_stacked.jpg",
                        "tags": [
                              "Architecture Building",
                              "V-Ray",
                              "LayOut Design",
                              "..."
                        ]
                  },
                  {
                        "title": "Lmofidclub",
                        "url": "https://lmofidclub.com",
                        "description": "ما الذي ستتعلمه في دورة المفيد · التسويق الرقمي الذكي. الدورة تقدم لك أدوات وتقنيات تسويقية حديثة لزيادة أرباحك وتسهيل جذب العملاء المستهدفين. ستتعلم كيف تستغل ...",
                        "pricing": "Paid",
                        "iconUrl": "https://yt3.googleusercontent.com/NedTlTfEFhQjwBEpfL_DJLsgtQiyXe7GLzQgi0Zs5u20NJInguWz-bkngfYEEZVdrLqiKvz37g=s900-c-k-c0x00ffffff-no-rj",
                        "tags": [
                              "Ecommerce"
                        ]
                  },
                  {
                        "title": "Manhaj",
                        "url": "https://manhaj.ma",
                        "description": "Manhaj.ma is the ideal platform for students wishing to improve their mathematics skills through an interactive, accessible, and effective approach. Our courses in...",
                        "pricing": "Paid",
                        "iconUrl": "https://media.licdn.com/dms/image/v2/C4E0BAQG020QC3uicoQ/company-logo_200_200/company-logo_200_200/0/1658016454224?e=2147483647&v=beta&t=bTCTPsFrsifZ4mbMuH1Oz-jALaUONi0rzYP0I0Ww0cQ",
                        "tags": [
                              "Math"
                        ]
                  },
                  {
                        "title": "Mit",
                        "url": "https://ocw.mit.edu/search",
                        "description": "MIT OpenCourseWare is a web based publication of virtually all MIT course content. OCW is open and available to the world and is a permanent MIT activity.",
                        "pricing": "Paid",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOD7wxuOeXxGLNOenUAE8pfdDyA3FGqnPE_dXJCisPtNQewTZDMG0xQKqYF3DpBj6hofc&usqp=CAU",
                        "tags": [
                              "Urban Studies and Planning",
                              "Mathematics",
                              "..."
                        ]
                  },
                  {
                        "title": "Harmash",
                        "url": "https://harmash.com",
                        "description": "نوفر لك كل المعرفة و الأدوات التي تحتاجها للوصول إلى هدفك بشكل مجاني من دورات تفاعلية، كتب، مشاريع و نساعدك على تخطي أي مشكلة تواجهها أثناء التعلم",
                        "pricing": "Paid",
                        "iconUrl": "https://pbs.twimg.com/profile_images/1553662523999768577/3WYsbIMN_400x400.jpg",
                        "tags": [
                              "frontend",
                              "backend",
                              "..."
                        ]
                  },
                  {
                        "title": "Kaggle",
                        "url": "https://www.kaggle.com/learn",
                        "description": "Learn the most important language for data science. Intro to Machine Learning Learn the core ideas in machine learning, and build your first models.",
                        "pricing": "Paid",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETVuceU-uIDgoEeeYxNl0sY4uazMpC_xJxQ&s",
                        "tags": [
                              "Intro to Programming",
                              "Python",
                              "..."
                        ]
                  },
                  {
                        "title": "Grafikart",
                        "url": "https://grafikart.fr/formations",
                        "description": "In this series, I propose we practice together using a practical exercise involving Laravel, Inertia, and React. The idea is to see how to combine them.",
                        "pricing": "Paid",
                        "iconUrl": "https://pbs.twimg.com/profile_images/1666187459284041731/r-_qeOZM_400x400.jpg",
                        "tags": [
                              "html",
                              "laravel",
                              "..."
                        ]
                  }
            ]
    },
      {
            "title": "Open Courseware",
            "entries": [
                  {
                        "title": "Andrew Tate",
                        "url": "https://mega.nz/folder/snRDRbKD#NMPf8a3Bms_lNJHZRWqFrg",
                        "description": "Hustler Academys University 1.0 is an online course by ex-kickboxer Andrew Tate, where he lays out the strategies and tips for making money in the real world.",
                        "pricing": "Free",
                        "iconUrl": "https://yt3.googleusercontent.com/JNMODrvuSV_Ks17kfH7ShVrLwunb9k3bArX8o9s0r5PU3LoyY8rK3xHnIH2uLUzu_o99PRfZ=s900-c-k-c0x00ffffff-no-rj",
                        "tags": [
                              "..."
                        ]
                  },
                  {
                        "title": "Freelearninglist",
                        "url": "https://freelearninglist.org",
                        "description": "The best free edu-things on the internet, ranked in order of amazingness, and neatly categorized. Includes YouTube channels, Podcasts, eBooks, Courses, ...",
                        "pricing": "Free",
                        "iconUrl": "https://a.thumbs.redditmedia.com/aP9-U-BgD4Aj8m7VkTlgT4HFzyEt8-FW-aK8e0fiaw8.png",
                        "tags": [
                              "..."
                        ]
                  },
                  {
                        "title": "Downloadlynet",
                        "url": "https://downloadlynet.ir",
                        "description": "Downloading from dl3 and dl4 servers is restricted by our Data Center; VIP servers are working",
                        "pricing": "Free",
                        "iconUrl": "https://downloadlynet.ir/wp-content/uploads/2025/11/REACONVERTER-PRO2.png",
                        "tags": [
                              "..."
                        ]
                  },
                  {
                        "title": "Discudemy",
                        "url": "https://www.discudemy.com",
                        "description": "Discudemy is free way of learning from beginner to professional in a way that everybody can understand. Find best Udemy Promo Codes and Deals on this page.",
                        "pricing": "Free",
                        "iconUrl": "https://media.licdn.com/dms/image/v2/C4D0BAQGyiyeS0PWpxg/company-logo_200_200/company-logo_200_200/0/1630557872079/discudemy__logo?e=2147483647&v=beta&t=6f-Fz1DZsjDk6jfeXiyKHx8cCl6lAUAPkNflOUHvtY0",
                        "tags": [
                              "..."
                        ]
                  },
                  {
                        "title": "Hacksnation",
                        "url": "https://hacksnation.com",
                        "description": "A community where Everyone can Learn, Discuss, Help, and share knowledge. Cybersecurity, Tutorials, Ethical Hacking, Guides, Software, Useful Methods, Free, ...",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyINr3Ud5Ixc35kw__H8d4bYRgIwxwvbcNlKuAxyQdPIMSzw4tMb5aXl5ipIU2jUPJ9Jw&usqp=CAU",
                        "tags": [
                              "..."
                        ]
                  },
                  {
                        "title": "OneHack",
                        "url": "https://onehack.us",
                        "description": "OneHack a.k.a 1Hack. A community for late-night curiosity, diving deep into AI and 1Hack to uncover answers that others might overlook.",
                        "pricing": "Free",
                        "iconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHvwtapTC575TmmjSgisx3G3IaOrIH8HXxQ&s",
                        "tags": [
                              "..."
                        ]
                  }
            ]
    }
]
  }
};
