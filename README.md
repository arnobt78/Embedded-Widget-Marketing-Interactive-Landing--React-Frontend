# Embedded Marketing - Modern React Landing Page with Feedback Widget

A modern, production-ready, static React landing page template built with **Vite**, **TailwindCSS**, and **Framer Motion**. Features a fully integrated feedback widget powered by Next.js, Prisma, and Vercel. This project demonstrates best practices for building, styling, and extending React apps with real-world features.

**Live Demo:** [https://embedded-marketing.netlify.app/](https://embedded-marketing.netlify.app/)

**Feedback Widget Repository:** [Embedded-Feedback-Collector-Widget--NextJS-FullStack](https://github.com/arnobt78/Embedded-Feedback-Collector-Widget--NextJS-FullStack)

**Feedback Widget Live URL:** [https://embedded-feedback.vercel.app/auth/signin](https://embedded-feedback.vercel.app/auth/signin)

![Project Screenshot](https://github.com/user-attachments/assets/b2278b37-2816-4221-bf54-c67b599ae35b)
<img width="1727" height="939" alt="Screenshot 2026-01-03 at 14 21 49" src="https://github.com/user-attachments/assets/8dab9eac-ccf2-40bd-b752-4c4501e3fb79" /> <img width="1648" height="955" alt="Screenshot 2026-01-03 at 14 22 21" src="https://github.com/user-attachments/assets/c6ab5929-6dd4-4972-b8c0-6ba423cd77b9" /> <img width="1900" height="947" alt="Screenshot 2026-01-03 at 14 22 40" src="https://github.com/user-attachments/assets/cf84bc5f-d630-4c7f-ae02-04b98bc79e6d" />

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Prerequisites](#prerequisites)
5. [Installation & Setup](#installation--setup)
6. [Running the Project](#running-the-project)
7. [Project Structure](#project-structure)
8. [Components Documentation](#components-documentation)
9. [Animation System](#animation-system)
10. [Feedback Widget Integration](#feedback-widget-integration)
11. [Environment Variables & Configuration](#environment-variables--configuration)
12. [Styling with TailwindCSS](#styling-with-tailwindcss)
13. [Building for Production](#building-for-production)
14. [Deployment](#deployment)
15. [Reusing Components](#reusing-components)
16. [API Endpoints & Routes](#api-endpoints--routes)
17. [How the Application Works](#how-the-application-works)
18. [Code Examples](#code-examples)
19. [Keywords & Topics](#keywords--topics)
20. [Troubleshooting](#troubleshooting)
21. [Contributing](#contributing)
22. [Conclusion](#conclusion)

---

## Project Overview

This project is a **static marketing landing page** built with modern React practices. It serves as both a production-ready template and an educational resource for learning:

- **React 18** with functional components and hooks
- **Vite** for fast development and optimized builds
- **TailwindCSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Component-based architecture** for reusability
- **Responsive design** principles
- **SEO optimization** with meta tags

The landing page includes multiple sections: navigation, hero, services, banners, feature cards, and a newsletter signup. Additionally, it integrates an external feedback widget that can collect user feedback in real-time.

---

## Features

### Core Features

- ⚡ **Fast Development**: Built with Vite for instant HMR (Hot Module Replacement)
- 🎨 **Beautiful UI**: Modern design with TailwindCSS and custom styling
- 📱 **Fully Responsive**: Mobile-first approach with breakpoints for all devices
- 🎭 **Smooth Animations**: Scroll-triggered and entrance animations with Framer Motion
- 📝 **Feedback Widget**: Integrated feedback collection system
- 🔍 **SEO Optimized**: Comprehensive meta tags and semantic HTML
- 🚀 **Production Ready**: Optimized builds and deployment configuration
- ♿ **Accessible**: Semantic HTML and ARIA-friendly structure

### Component Features

- **Navbar**: Responsive navigation with mobile menu
- **Hero Section**: Eye-catching hero with CTA buttons
- **Services**: Grid-based service showcase
- **Banners**: Promotional sections with varied layouts
- **Cards**: Feature cards with icons and descriptions
- **Newsletter**: Email signup with social media links

---

## Technology Stack

### Frontend Framework & Tools

- **React 18.3.1** - UI library with hooks and functional components
- **Vite 5.4.1** - Next-generation frontend build tool
- **React DOM 18.3.1** - React rendering for web

### Styling & Design

- **TailwindCSS 3.4.12** - Utility-first CSS framework
- **PostCSS 8.4.47** - CSS processing tool
- **Autoprefixer 10.4.20** - Automatic vendor prefixing

### Animation

- **Framer Motion 11.5.5** - Production-ready motion library for React

### Icons

- **React Icons 5.3.0** - Popular icon library (Font Awesome, etc.)

### Development Tools

- **ESLint 9.9.0** - Code linting and quality
- **TypeScript Types** - Type definitions for React

### Build & Deployment

- **Netlify** - Frontend hosting and deployment
- **Vercel** - Feedback widget backend hosting

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 22.0.0 ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- A code editor (VS Code recommended)

### Verify Installation

```bash
node --version  # Should be >= 22.0.0
npm --version   # Should be >= 9.0.0
```

---

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/embedded-marketing.git
cd embedded-marketing
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:

- React and React DOM
- Vite and plugins
- TailwindCSS and PostCSS
- Framer Motion
- React Icons
- ESLint and plugins

### Step 3: Verify Installation

After installation, your project structure should look like this:

```bash
embedded-marketing/
├── node_modules/          # Installed dependencies
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── assets/            # Images and icons
│   ├── utility/           # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project configuration
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # TailwindCSS configuration
└── README.md              # This file
```

---

## Running the Project

### Development Mode

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at:

- **Local**: [http://localhost:5173](http://localhost:5173)
- **Network**: Vite will display the network URL in the terminal

**Features in Dev Mode:**

- ⚡ Instant HMR - Changes reflect immediately
- 🔍 Source maps for debugging
- 📊 Build size analysis
- 🐛 Error overlay with stack traces

### Preview Production Build Locally

To preview the production build locally:

```bash
npm run build
npm run preview
```

This builds the project and serves it from the `dist` folder, simulating production.

### Linting

Check code quality and style:

```bash
npm run lint
```

---

## Project Structure

```bash
embedded-marketing/
├── public/                    # Public static assets
│   └── vite.svg              # Favicon
│
├── src/                       # Source code directory
│   ├── assets/                # Images and media files
│   │   ├── 1.png             # Hero/Navbar logo
│   │   ├── 2.png             # Services image
│   │   ├── 3.png             # Banner image
│   │   ├── 4.png             # Banner2 image
│   │   ├── 5.png             # Email/Footer background
│   │   └── icon/              # Icon assets
│   │       ├── 1.png
│   │       ├── 2.png
│   │       └── 3.png
│   │
│   ├── components/            # React components
│   │   ├── Banner/
│   │   │   ├── Banner.jsx    # First promotional banner
│   │   │   └── Banner2.jsx   # Second promotional banner
│   │   ├── Cards/
│   │   │   └── Cards.jsx     # Feature cards grid
│   │   ├── Email/
│   │   │   └── Email.jsx     # Newsletter/Footer section
│   │   ├── Hero/
│   │   │   └── Hero.jsx      # Hero section
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx    # Navigation bar
│   │   └── Services/
│   │       └── Services.jsx  # Services showcase
│   │
│   ├── utility/               # Utility functions
│   │   └── animation.js      # Framer Motion animation variants
│   │
│   ├── App.jsx               # Main app component (composes all sections)
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
│
├── dist/                     # Production build output (generated)
│
├── index.html                # HTML template with SEO meta tags
├── package.json              # Project dependencies and scripts
├── vite.config.js           # Vite build configuration
├── tailwind.config.js       # TailwindCSS theme configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── netlify.toml             # Netlify deployment configuration
└── README.md                # Project documentation
```

---

## Components Documentation

### Component Architecture

All components follow a consistent pattern:

- **Functional components** using React hooks
- **Framer Motion** for animations
- **TailwindCSS** for styling
- **Props** for customization (where applicable)
- **Reusable** and **composable**

### 1. Navbar Component

**Location:** `src/components/Navbar/Navbar.jsx`

**Purpose:** Main navigation bar with logo, links, and CTA button.

**Features:**

- Responsive design (hidden menu on mobile)
- Animated entrance (slides from top)
- Logo and brand name
- Navigation links array
- CTA button

**Usage:**

```jsx
import Navbar from "./components/Navbar/Navbar";

function App() {
  return <Navbar />;
}
```

**Customization:**

- Edit `NavbarLinks` array to change navigation items
- Modify logo by replacing `Logo` import
- Update brand name text
- Customize CTA button text

---

### 2. Hero Component

**Location:** `src/components/Hero/Hero.jsx`

**Purpose:** Main hero section with headline, description, and CTA.

**Features:**

- Two-column grid layout (text + image)
- Staggered text animations
- Responsive image sizing
- Slide-in image animation

**Usage:**

```jsx
import Hero from "./components/Hero/Hero";

function App() {
  return <Hero />;
}
```

**Animation Details:**

- Headline: `slideUp(0.2)` - 0.2s delay
- Description: `slideUp(0.5)` - 0.5s delay
- Button: `slideUp(0.8)` - 0.8s delay
- Image: Custom slide from right animation

---

### 3. Services Component

**Location:** `src/components/Services/Services.jsx`

**Purpose:** Displays services/features in a grid layout.

**Features:**

- Header with title and description
- Responsive grid (1 col mobile, 2 cols tablet+)
- Scroll-triggered animations (`whileInView`)
- Large featured image + service cards

**Usage:**

```jsx
import Services from "./components/Services/Services";

function App() {
  return <Services />;
}
```

**Animation Pattern:**

- Header: Fade in on scroll
- Cards: Slide from right with staggered delays (0.2s, 0.4s, 0.6s, 0.8s)

---

### 4. Banner Component

**Location:** `src/components/Banner/Banner.jsx`

**Purpose:** First promotional banner section.

**Features:**

- Text content on left, image on right
- Design philosophy quote
- Two feature highlights
- Scale effect on image (125% on desktop)

**Usage:**

```jsx
import Banner from "./components/Banner/Banner";

function App() {
  return <Banner />;
}
```

---

### 5. Banner2 Component

**Location:** `src/components/Banner/Banner2.jsx`

**Purpose:** Second promotional banner with reversed layout.

**Features:**

- Image on left, text on right (reversed from Banner)
- Testimonial-style content
- Different animation direction (slides from left)

**Usage:**

```jsx
import Banner2 from "./components/Banner/Banner2";

function App() {
  return <Banner2 />;
}
```

**Why Two Banners?**

- Creates visual variety
- Demonstrates layout flexibility
- Shows different animation patterns

---

### 6. Cards Component

**Location:** `src/components/Cards/Cards.jsx`

**Purpose:** Feature cards in a grid layout.

**Features:**

- Three feature cards
- Responsive grid (1/2/3 columns)
- Icons with circular backgrounds
- Gray background section for contrast

**Usage:**

```jsx
import Cards from "./components/Cards/Cards";

function App() {
  return <Cards />;
}
```

**Card Structure:**

- Icon (circular, black background)
- Title (uppercase, bold)
- Description text
- "Learn More" link

---

### 7. Email Component

**Location:** `src/components/Email/Email.jsx`

**Purpose:** Newsletter signup and footer section.

**Features:**

- Background image overlay
- Newsletter CTA
- Social media icons (Facebook, Twitter, Instagram, LinkedIn)
- Scale animation on scroll

**Usage:**

```jsx
import Email from "./components/Email/Email";

function App() {
  return <Email />;
}
```

**Social Icons:**

- Uses `react-icons` library
- Font Awesome icons
- Easily customizable

---

## Animation System

### Framer Motion Integration

This project uses **Framer Motion** for all animations. Animations are defined in `src/utility/animation.js` for reusability.

### Animation Variants

#### slideUp Animation

```javascript
export const slideUp = (delay) => {
  return {
    initial: {
      y: 50, // Start 50px below
      opacity: 0, // Start invisible
    },
    animate: {
      y: 0, // End at natural position
      opacity: 1, // End visible
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
```

**Usage:**

```jsx
<motion.div variants={slideUp(0.2)} initial="initial" animate="animate">
  Content here
</motion.div>
```

#### slideBottom Animation

```javascript
export const slideBottom = (delay) => {
  return {
    initial: {
      y: -100, // Start 100px above
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
```

### Animation Types Used

1. **Entrance Animations**: Elements animate when component mounts

   - Used in: Navbar, Hero

2. **Scroll-Triggered Animations**: Elements animate when scrolled into view

   - Used in: Services, Banner, Banner2, Cards, Email
   - Trigger: `whileInView` prop

3. **Staggered Animations**: Multiple elements animate sequentially
   - Used in: Hero (text elements), Services (cards)

### Creating Custom Animations

```jsx
<motion.div
  initial={{ opacity: 0, x: -100 }} // Start state
  animate={{ opacity: 1, x: 0 }} // End state
  transition={{ duration: 0.5, delay: 0.2 }}
>
  Content
</motion.div>
```

---

## Feedback Widget Integration

### Overview

The feedback widget is an **external component** loaded from a Vercel deployment. It's integrated directly in `index.html` using UMD builds.

### Integration Code

Located in `index.html`:

```html
<!-- Load React and ReactDOM UMD builds for the widget -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Include the widget script from production (Vercel) -->
<script src="https://embedded-feedback.vercel.app/widget.umd.js"></script>

<!-- Widget component with configuration -->
<my-widget
  api-base="https://embedded-feedback.vercel.app/api/feedback"
  api-key="1e61d9ba70b084b5f8291f2aa75e67d9"
></my-widget>
```

### How It Works

1. **UMD Builds**: React and ReactDOM are loaded from CDN (unpkg.com)
2. **Widget Script**: Custom widget script from Vercel deployment
3. **Custom Element**: `<my-widget>` is a web component
4. **API Configuration**: Points to feedback API endpoint

### Customizing the Widget

To use your own feedback widget:

1. Deploy the [Feedback Widget project](https://github.com/arnobt78/Embedded-Feedback-Collector-Widget--NextJS-FullStack) to Vercel
2. Update the `api-base` attribute with your API URL
3. Update the `api-key` with your API key
4. Update the widget script `src` with your widget URL

### Widget Features

- Collects user feedback
- Star ratings
- Real-time submission
- Dashboard for viewing feedback (separate application)

---

## Environment Variables & Configuration

### Current Setup

**This project does NOT require a `.env` file** for the frontend. The feedback widget configuration is hardcoded in `index.html` for simplicity.

### If You Need Environment Variables

If you want to use environment variables (recommended for production), follow these steps:

#### Step 1: Create `.env` File

Create a `.env` file in the root directory:

```env
VITE_WIDGET_API_BASE=https://embedded-feedback.vercel.app/api/feedback
VITE_WIDGET_API_KEY=1e61d9ba70b084b5f8291f2aa75e67d9
VITE_WIDGET_SCRIPT_URL=https://embedded-feedback.vercel.app/widget.umd.js
```

**Important:** In Vite, environment variables must be prefixed with `VITE_` to be accessible in the browser.

#### Step 2: Update `index.html`

Replace hardcoded values with environment variables:

```html
<script src="${import.meta.env.VITE_WIDGET_SCRIPT_URL}"></script>
<my-widget
  api-base="${import.meta.env.VITE_WIDGET_API_BASE}"
  api-key="${import.meta.env.VITE_WIDGET_API_KEY}"
></my-widget>
```

**Note:** Since `index.html` is static, you'll need to use a build plugin or inject variables during build.

#### Step 3: Create `.env.example`

Create a template file:

```env
VITE_WIDGET_API_BASE=your_api_base_url
VITE_WIDGET_API_KEY=your_api_key
VITE_WIDGET_SCRIPT_URL=your_widget_script_url
```

#### Step 4: Add to `.gitignore`

Ensure `.env` is in `.gitignore`:

```text
.env
.env.local
.env.production
```

### Netlify Environment Variables

If deploying to Netlify, add environment variables in:

- Netlify Dashboard → Site Settings → Environment Variables

---

## Styling with TailwindCSS

### Configuration

TailwindCSS is configured in `tailwind.config.js`:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdcd2d", // Custom yellow/gold color
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
```

### Custom Classes

#### Primary Button

Defined in `src/index.css`:

```css
@layer components {
  .primary-btn {
    @apply bg-primary text-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md;
  }
}
```

**Usage:**

```jsx
<button className="primary-btn">Click Me</button>
```

### Responsive Design

Tailwind uses mobile-first breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

**Example:**

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### Common Patterns Used

1. **Container**: `<div className="container">` - Centered, responsive padding
2. **Grid**: `grid grid-cols-1 md:grid-cols-2` - Responsive grid
3. **Flex**: `flex justify-between items-center` - Flexbox layouts
4. **Spacing**: `py-8`, `px-4`, `gap-4` - Padding and gaps
5. **Text**: `text-4xl font-bold` - Typography utilities

---

## Building for Production

### Build Command

```bash
npm run build
```

This command:

1. Optimizes all assets
2. Minifies JavaScript and CSS
3. Tree-shakes unused code
4. Generates production-ready files in `dist/` folder

### Build Output

```text
dist/
├── assets/
│   ├── index-[hash].js    # Bundled JavaScript
│   ├── index-[hash].css   # Bundled CSS
│   └── [image]-[hash].png # Optimized images
└── index.html             # HTML with asset references
```

### Build Optimization

Vite automatically:

- Code splitting
- Asset optimization
- CSS minification
- JavaScript minification
- Source map generation (optional)

### Preview Production Build

```bash
npm run build
npm run preview
```

---

## Deployment

### Netlify Deployment

This project is configured for Netlify deployment.

#### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Netlify will detect `netlify.toml` configuration
3. Build settings are automatically configured

#### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

#### Netlify Configuration

`netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

**Redirects:** All routes redirect to `index.html` for SPA routing (if you add routing later).

### Other Deployment Options

#### Vercel

```bash
npm install -g vercel
vercel
```

#### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`

2. Add to `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

1. Run: `npm run deploy`

---

## Reusing Components

### Component Reusability

All components are designed to be reusable. Here's how to use them in other projects:

### Step 1: Copy Component Files

Copy the component folder to your project:

```bash
# Example: Copying Navbar
cp -r src/components/Navbar /path/to/your/project/src/components/
```

### Step 2: Copy Dependencies

Ensure you have required dependencies:

```bash
npm install framer-motion react-icons
```

### Step 3: Copy Utility Files

Copy animation utilities:

```bash
cp src/utility/animation.js /path/to/your/project/src/utility/
```

### Step 4: Copy Assets

Copy required images:

```bash
cp src/assets/1.png /path/to/your/project/src/assets/
```

### Step 5: Import and Use

```jsx
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Your other content */}
    </div>
  );
}
```

### Customizing Components

#### Example: Customizing Navbar

```jsx
// In Navbar.jsx, modify the NavbarLinks array:
const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products", // Changed from "Features"
    link: "/products",
  },
  // Add more links...
];
```

#### Example: Customizing Colors

Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#your-color",  // Change primary color
    },
  },
}
```

### Creating New Components

Follow the existing pattern:

```jsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const MyComponent = () => {
  return (
    <motion.div
      variants={slideUp(0.2)}
      initial="initial"
      animate="animate"
      className="container py-12"
    >
      {/* Your content */}
    </motion.div>
  );
};

export default MyComponent;
```

---

## API Endpoints & Routes

### Frontend Routes

This is a **static single-page application** with no client-side routing. All content is rendered in `App.jsx`.

### Future Routing (Optional)

If you want to add routing, install React Router:

```bash
npm install react-router-dom
```

Then set up routes:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Feedback Widget API

The feedback widget uses an external API:

- **Base URL**: `https://embedded-feedback.vercel.app/api/feedback`
- **Method**: POST (for submitting feedback)
- **Authentication**: API key required

**API Endpoints** (from widget backend):

- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Retrieve feedback (with authentication)

**Note:** The API is hosted separately. See the [Feedback Widget Repository](https://github.com/arnobt78/Embedded-Feedback-Collector-Widget--NextJS-FullStack) for backend details.

---

## How the Application Works

### Application Flow

1. **Entry Point** (`main.jsx`):

   - Creates React root
   - Renders `<App />` component
   - Wraps in `<StrictMode>` for development checks

2. **App Component** (`App.jsx`):

   - Composes all page sections
   - Renders in order: Navbar → Hero → Services → Banner → Cards → Banner2 → Email

3. **Component Rendering**:

   - Each component is self-contained
   - Uses Framer Motion for animations
   - Styled with TailwindCSS

4. **Feedback Widget**:
   - Loaded from external script in `index.html`
   - Renders as custom web component
   - Communicates with backend API

### Build Process

1. **Development** (`npm run dev`):

   - Vite dev server starts
   - HMR watches for changes
   - Serves from memory (fast)

2. **Production** (`npm run build`):
   - Vite bundles all code
   - Optimizes assets
   - Generates static files in `dist/`

### Animation Flow

1. **Component Mount**: Entrance animations trigger
2. **Scroll**: `whileInView` animations trigger when element enters viewport
3. **Stagger**: Delays create sequential animations

---

## Code Examples

### Example 1: Creating a New Animated Section

```jsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../utility/animation";

const NewSection = () => {
  return (
    <section className="container py-20">
      <motion.h2
        variants={slideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-4xl font-bold text-center"
      >
        New Section Title
      </motion.h2>

      <motion.p
        variants={slideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="text-center mt-4"
      >
        Section description here.
      </motion.p>
    </section>
  );
};

export default NewSection;
```

### Example 2: Custom Button Component

```jsx
import React from "react";
import { motion } from "framer-motion";

const CustomButton = ({ text, onClick, variant = "primary" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`primary-btn ${variant === "secondary" ? "bg-gray-600" : ""}`}
    >
      {text}
    </motion.button>
  );
};

export default CustomButton;
```

### Example 3: Responsive Image Component

```jsx
import React from "react";
import { motion } from "framer-motion";

const ResponsiveImage = ({ src, alt }) => {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      src={src}
      alt={alt}
      className="w-full md:w-1/2 lg:w-1/3 mx-auto rounded-lg shadow-lg"
    />
  );
};

export default ResponsiveImage;
```

### Example 4: Data-Driven Component

```jsx
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../utility/animation";

const FeatureList = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={slideUp(index * 0.1)}
          initial="initial"
          whileInView="animate"
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="mt-2 text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Usage:
// const features = [
//   { id: 1, title: "Feature 1", description: "Description 1" },
//   { id: 2, title: "Feature 2", description: "Description 2" },
// ];
// <FeatureList features={features} />
```

---

## Keywords & Topics

### Technologies

- React, React Hooks, Functional Components, JSX
- Vite, Build Tools, HMR, Module Bundling
- TailwindCSS, Utility-First CSS, Responsive Design
- Framer Motion, Animations, Motion Design
- Netlify, Vercel, Static Site Hosting, Deployment

### Concepts

- Component-Based Architecture, Reusability, Composition
- Responsive Web Design, Mobile-First, Breakpoints
- SEO Optimization, Meta Tags, Semantic HTML
- Performance Optimization, Code Splitting, Tree Shaking
- Web Components, UMD Builds, External Scripts

### Development

- Hot Module Replacement, Fast Refresh, Development Server
- ESLint, Code Quality, Linting
- Git, Version Control, GitHub
- npm, Package Management, Dependencies

### Design

- UI/UX Design, Landing Pages, Marketing Pages
- Animation, Transitions, Scroll Triggers
- Typography, Color Schemes, Spacing
- Accessibility, Semantic HTML, ARIA

---

## Troubleshooting

### Common Issues

#### Issue 1: Port Already in Use

**Error:** `Port 5173 is already in use`

**Solution:**

```bash
# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

#### Issue 2: Module Not Found

**Error:** `Cannot find module 'framer-motion'`

**Solution:**

```bash
npm install
```

#### Issue 3: TailwindCSS Not Working

**Error:** Styles not applying

**Solution:**

1. Check `tailwind.config.js` content paths
2. Ensure `@tailwind` directives in `index.css`
3. Restart dev server

#### Issue 4: Build Fails

**Error:** Build errors or warnings

**Solution:**

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### Issue 5: Feedback Widget Not Loading

**Error:** Widget not appearing

**Solution:**

1. Check browser console for errors
2. Verify API URLs in `index.html`
3. Ensure network connectivity
4. Check CORS settings on API server

### Getting Help

- Check [Vite Documentation](https://vitejs.dev/)
- Check [React Documentation](https://react.dev/)
- Check [TailwindCSS Documentation](https://tailwindcss.com/)
- Check [Framer Motion Documentation](https://www.framer.com/motion/)

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Update README if adding features
- Test your changes thoroughly
- Ensure ESLint passes

---

## Conclusion

This **Embedded Marketing** project is a comprehensive example of modern React development, showcasing:

- ✅ **Best Practices**: Component architecture, code organization, and styling patterns
- ✅ **Modern Tools**: Vite, TailwindCSS, Framer Motion for optimal developer experience
- ✅ **Production Ready**: Optimized builds, SEO, and deployment configurations
- ✅ **Educational Value**: Well-commented code and comprehensive documentation
- ✅ **Reusability**: Modular components that can be used in other projects
- ✅ **Real-World Integration**: External widget integration demonstrates practical patterns

Whether you're learning React, building a landing page, or looking for a template to start from, this project provides a solid foundation.

**Key Takeaways:**

- React 18 with functional components
- Vite for fast development
- TailwindCSS for rapid styling
- Framer Motion for smooth animations
- Component-based architecture
- Responsive design principles
- SEO optimization
- Production deployment

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
