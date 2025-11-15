# N E X A 1337 App Manual

This document provides instructions on how to use the N E X A 1337 application and how to add or modify its content.

## How to Run the App Locally (Step-by-Step)

To run this application on your computer for development, you will need to have [Node.js](https://nodejs.org/) installed.

1.  **Open Project in VS Code:**
    Unzip the project files and open the main folder in Visual Studio Code.

2.  **Open the Terminal:**
    In the top menu bar of VS Code, click `Terminal` -> `New Terminal`. A command line panel will open at the bottom of your editor.

3.  **Install Dependencies:**
    In the terminal, type the following command and press Enter. This will download the necessary packages (like the `express` web server). You only need to do this step once.
    ```bash
    npm install
    ```

4.  **Start the Development Server:**
    Once the installation is complete, start the local server with this command:
    ```bash
    npm start
    ```

5.  **View the App:**
    Your terminal will show a message like `Server is running on http://localhost:3000`. **Click that link** or open your web browser and navigate to that URL to see the application.

Any changes you make to the code will be reflected when you refresh your browser page.

### Troubleshooting

-   **Blank White Page?** If the app shows a blank page, check the browser's developer console for errors (usually by pressing F12). If you see errors, try stopping the server in the VS Code terminal (press `Ctrl + C`) and running `npm start` again. Ensure all the file changes in this update have been applied correctly.

---

## How to Use the App

The application is divided into several main sections:

1.  **Mindmap:** An interactive mind map visualizing different technology career paths.
2.  **Tools:** A curated list of useful tools and resources.
3.  **Ebooks:** A library of recommended technical books.
4.  **Learning:** A database of online learning platforms.

### Navigating the Roadmap

-   **Switch Roadmaps:** Use the dropdown menu below the main title (e.g., "Cybersecurity" or "General Tech") to switch between different roadmap views.
-   **Interact with Nodes:**
    -   **Click a node** to expand or collapse its children, revealing more detailed paths.
    -   If a node contains specific information (like descriptions, certifications, or resources), a popup modal will appear with the details.
-   **Pan & Zoom:** Click and drag on the background to move the map around. Use your mouse wheel or trackpad to zoom in and out. The map will automatically fit to your screen on load.

### Finding Tools, Ebooks, and Learning Platforms

-   **Browse Categories:** Use the sliding category filter at the top of the page to view items from a specific category. Click the arrows to scroll through all categories.
-   **Search:** Use the search bar to find items by name, description, or tags.
-   **Filter:** Some pages may have additional filters, like the "All Pricing" dropdown on the Tools page.

---

## How to Add/Modify Content

All the content for the roadmaps, tools, categories, ebooks, and learning platforms is stored in the `constants.ts` file. To add or change content, you just need to edit this file.

### 1. Modifying the Roadmap

The roadmap data is structured as a tree of `RoadmapNode` objects.

**`RoadmapNode` Structure:**

```typescript
interface RoadmapNode {
  name: string;          // The text displayed on the node (Required)
  color: string;         // The background color of the node's circle (Required)
  children?: RoadmapNode[]; // An array of child nodes to create branches
  level?: string;        // Optional level indicator (e.g., 'Beginner')
  details?: string;      // A detailed description shown in the popup modal
  resources?: { name: string; url: string }[]; // Links to learning resources
  certifications?: { name: string; url: string }[]; // Links to certifications
}
```

**Example: Adding a new child node to "Programming" in the Cybersecurity roadmap.**

1.  Open `constants.ts`.
2.  Find the `cybersecurityRoadmapData` object.
3.  Navigate to the "Programming" node's `children` array.
4.  Add a new `RoadmapNode` object to the array:

```javascript
// Inside cybersecurityRoadmapData...
{
  name: 'Programming',
  color: '#f59e0b',
  children: [
    { name: 'Python', color: '#14b8a6', details: '...' },
    { name: 'Ruby', color: '#14b8a6', details: '...' },
    { name: 'Shell Scripting', color: '#14b8a6', details: '...' },
    // New node added below
    {
      name: 'Go',
      color: '#00ADD8',
      details: 'A statically typed, compiled language designed at Google.'
    }
  ],
},
```

### 2. Adding a New Tool

The tools are stored in the `tools` array. Each tool is an object with the following structure.

**`Tool` Structure:**

```typescript
interface Tool {
  name: string;        // Name of the tool (Required)
  description: string; // Brief description (Required)
  link: string;        // URL to the tool's website (Required)
  category: string;    // Must match one of the `name` properties in the `categories` array (Required)
  status: 'Free' | 'Premium' | 'Freemium' | 'Beta' | 'Paid'; // Pricing status (Required)
  tags: string[];      // An array of keywords for searching
  logo: string;        // A URL to the tool's logo image
}
```

**Example: Adding a new tool.**

1.  Open `constants.ts`.
2.  Find the `tools` array.
3.  Add a new `Tool` object to the array.

```javascript
export const tools: Tool[] = [
    // ... existing tools
    {
      name: 'Postman',
      description: 'API platform for building and using APIs.',
      link: 'https://www.postman.com/',
      category: 'Development',
      status: 'Freemium',
      tags: ['API', 'Testing', 'Backend'],
      logo: 'https://logo.clearbit.com/postman.com'
    },
];
```

### 3. Adding a New Category for Tools

Categories are stored in the `categories` array.

**`Category` Structure:**

```typescript
interface Category {
  name: string;     // The name of the category (Required)
  Icon: LucideIcon; // An icon component from the `lucide-react` library (Required)
}
```

**Example: Adding a new "DevOps" category.**

1.  Open `constants.ts`.
2.  Import a new icon from `lucide-react` at the top of the file. e.g., `import { ... , GitMerge } from 'lucide-react';`
3.  Find the `categories` array and add a new object.

```javascript
export const categories: Category[] = [
    // ... existing categories
    { name: 'Game Development', Icon: Gamepad },
    { name: 'DevOps', Icon: GitMerge } // New category
];
```

After adding the category, you can now use `"DevOps"` as the `category` value for any new tools you add.

### 4. Adding a New Ebook

The ebooks are stored in the `ebooks` array.

**`Ebook` Structure:**

```typescript
interface Ebook {
  title: string;
  coverImage: string;
  rating: number;
  price: number;
  buyLink: string;
  summaryLink: string;
  pages: number;
  category: string; // Must match one of the `name` properties in `ebookCategories`
}
```

**Example: Adding a new ebook.**

1.  Open `constants.ts`.
2.  Find the `ebooks` array.
3.  Add a new `Ebook` object to the array.

```javascript
export const ebooks: Ebook[] = [
    // ... existing ebooks
    {
      title: 'Cracking the Coding Interview',
      coverImage: 'https://placehold.co/300x400/10b981/ffffff?text=CTCI',
      rating: 4.7,
      price: 26.99,
      buyLink: '#',
      summaryLink: 'https://www.youtube.com',
      pages: 708,
      category: 'Programming',
    },
];
```

### 5. Adding a New Ebook Category

Ebook categories are stored in the `ebookCategories` array. They use the same structure as tool categories.

**Example: Adding a new "Data Engineering" category.**

1.  Open `constants.ts`.
2.  Import a new icon from `lucide-react` at the top of the file. e.g., `import { ... , Database } from 'lucide-react';`
3.  Find the `ebookCategories` array and add a new object.

```javascript
export const ebookCategories: EbookCategory[] = [
    // ... existing categories
    { name: 'Cloud Computing', Icon: Cloud },
    { name: 'Data Engineering', Icon: Database } // New category
];
```

### 6. Adding a Learning Platform

Learning platforms are stored in the `learningPlatforms` array.

**`LearningPlatform` Structure:**

```typescript
interface LearningPlatform {
  name: string;
  description: string;
  link: string;
  logo: string;
  category: 'Free with Certificate' | 'Free without Certificate' | 'Paid with Certificate' | 'Open Courseware';
  tags: string[];
}
```

**Example: Adding a new learning platform.**

1.  Open `constants.ts`.
2.  Find the `learningPlatforms` array.
3.  Add a new `LearningPlatform` object to the array.

```javascript
export const learningPlatforms: LearningPlatform[] = [
    // ... existing platforms
    { 
      name: 'LinkedIn Learning', 
      description: 'Online courses for creative, technology, and business skills.', 
      link: 'https://www.linkedin.com/learning/', 
      logo: 'https://logo.clearbit.com/linkedin.com', 
      category: 'Paid with Certificate', 
      tags: ['Business', 'Technology', 'Creative'] 
    },
];
```

### 7. Adding a New Learning Category

The categories for learning platforms are in the `learningCategories` array.

**`LearningCategory` Structure:**

```typescript
interface LearningCategory {
    name: PlatformCategory; // The name of the category
    Icon: LucideIcon;       // An icon from lucide-react
}
```

**Example: Adding a new "Bootcamps" category.**
*Note: You would also need to update the `PlatformCategory` type in `types.ts` to include your new category name.*

1.  Open `constants.ts`.
2.  Import a new icon, e.g., `import { ..., Users } from 'lucide-react';`
3.  Add the new category object to the `learningCategories` array.

```javascript
export const learningCategories: LearningCategory[] = [
  { name: 'Free with Certificate', Icon: Award },
  // ... other categories
  { name: 'Open Courseware', Icon: DownloadCloud },
  { name: 'Bootcamps', Icon: Users }, // New Category
];
```

---

## Deploying to GitHub Pages

This project is a simple static website and can be hosted for free using GitHub Pages. Follow these steps to get it online.

### Step 1: Create a GitHub Repository

1.  Go to [GitHub](https://github.com) and log in.
2.  Click the `+` icon in the top-right corner and select **"New repository"**.
3.  Give your repository a name (e.g., `nexa-1337-website`).
4.  Choose "Public" so that GitHub Pages can serve the site.
5.  Click **"Create repository"**.

### Step 2: Upload Your Project Files

You can use GitHub Desktop or the command line.

**Using GitHub Desktop:**

1.  Open GitHub Desktop and click **"File" > "Clone repository"**.
2.  Select your newly created repository from the list and choose a local path to store the files. Click **"Clone"**.
3.  Copy all your project files (`index.html`, `index.tsx`, `components/`, etc.) into the folder that GitHub Desktop just created.
4.  Go back to GitHub Desktop. You will see all your files listed as changes.
5.  Enter a summary message in the bottom-left text box (e.g., "Initial commit").
6.  Click the **"Commit to main"** button.
7.  Click the **"Push origin"** button at the top to upload the files to GitHub.

**Using the Command Line:**

1.  Open your terminal or command prompt.
2.  Navigate to your project's root directory.
3.  Initialize a git repository:
    ```bash
    git init
    ```
4.  Add and commit all your files:
    ```bash
    git add .
    git commit -m "Initial commit"
    ```
5.  Link your local repository to the one on GitHub. (Copy the commands from your new repository's page on GitHub):
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    git branch -M main
    git push -u origin main
    ```

### Step 3: Enable GitHub Pages

1.  On your GitHub repository's page, click on the **"Settings"** tab.
2.  In the left sidebar, click on **"Pages"**.
3.  Under the "Build and deployment" section, for the **Source**, select **"Deploy from a branch"**.
4.  Under "Branch", select `main` as the branch and `/ (root)` as the folder.
5.  Click **"Save"**.

### Step 4: Access Your Live Site

GitHub will now build and deploy your website. This might take a minute or two. Once it's ready, a green banner will appear on the "Pages" settings page with the URL of your live site.

It will look something like this: **`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`**

Your website is now online! Any time you push new changes to your `main` branch, GitHub Pages will automatically update the live site.