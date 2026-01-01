# Marketing Template - TailwindCSS Fundamental Project 2

A modern, production-ready, static React landing page template built with Vite, TailwindCSS, and a fully integrated feedback widget powered by Next.js, Prisma, and Vercel. Easily customizable and deployable, this project demonstrates best practices for building, styling, and extending React apps with real-world features.

- **Live Demo:** [https://embedded-marketing.netlify.app/](https://embedded-marketing.netlify.app/)

- _Note: The feedback widget is integrated from: [Feedback-Widget](https://github.com/arnobt78/Embedded-Feedback-Collector-Widget--NextJS-FullStack)_

![Screenshots](https://github.com/user-attachments/assets/b2278b37-2816-4221-bf54-c67b599ae35b)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Widget Integration Guide](#widget-integration-guide)
7. [Development Scripts](#development-scripts)
8. [React Testing](#react-testing)
9. [Keywords & Topics](#keywords--topics)
10. [Learn More](#learn-more)
11. [About](#about)
12. [Conclusion](#conclusion)

---

## Project Summary

This project is a static marketing landing page built with React, Vite, and TailwindCSS, featuring a real-time feedback widget. The widget is a standalone, reusable component that can be embedded in any site and submits feedback to a Next.js API (deployed on Vercel). The dashboard displays all feedback in real time.

---

## Features

- ⚡ **Fast & Modern**: Built with Vite and React 18.
- 🎨 **Beautiful UI**: Styled with TailwindCSS and custom design tokens.
- 📝 **Feedback Widget**: Collects user feedback, star ratings, and displays them in a dashboard.
- 🔌 **Easy Integration**: Widget can be embedded in any HTML page with a single script tag.
- 🌐 **API-Driven**: Feedback is stored and retrieved from a Next.js API (Vercel).
- 🧪 **Ready for Testing**: Easily add React tests (see below for test instructions).
- 🚀 **Deployed on Netlify**: Static frontend, instant global delivery.

---

## Technology Stack

- **Frontend**: React, Vite, TailwindCSS, Framer Motion, React Animate, React Icons
- **Widget**: React, TailwindCSS, Next.js API, Prisma, Vercel
- **Backend**: Next.js API routes (Vercel), Prisma ORM, (optionally MongoDB/Postgres)
- **Deployment**: Netlify (frontend), Vercel (widget/API)
- **Testing**: Jest, React Testing Library (see below)

---

## Project Structure

```bash
marketing-tailwind/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Cards/
│   │   ├── Dashboard/
│   │   │   └── FeedbackDashboard.jsx
│   │   ├── Email/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Services/
│   └── utility/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Deploy

- **Frontend**: Deploy the `marketing-tailwind` folder to Netlify.
- **Widget/API**: Deploy the feedback widget project to Vercel.

---

## Widget Integration Guide

You can embed the feedback widget into any HTML page (including this project) with just a few lines:

```html
<!-- Load React and ReactDOM UMD builds for the widget -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<!-- Include the widget script from your Vercel deployment -->
<script src="https://widget-feedback-next.vercel.app/widget.umd.js"></script>
<my-widget
  api-base="https://widget-feedback-next.vercel.app/api/feedback"
></my-widget>
```

- The `api-base` attribute should point to your deployed Next.js API endpoint.
- The widget will automatically inject its styles and handle feedback submission.

**To integrate into your own project:**

1. Deploy the widget project to Vercel.
2. Copy the script and `<my-widget>` tag above into your HTML.
3. Optionally, style or position the widget as needed.

---

## Development Scripts

- `npm run dev` – Start local dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## React Testing

This project is ready for adding React tests. To add tests:

1. Install a test runner (e.g., Jest, React Testing Library):

   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. Add test files alongside your components, e.g., `Widget.test.jsx`.
3. Run tests with:

   ```bash
   npm test
   # or
   yarn test
   ```

4. For more, see [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/).

---

## Keywords & Topics

widget, reactjs, feedback, mongodb, feedback-form, widget-manager, tailwindcss, feedback-collector, feedback-widget, easy-integration, nextjs, prisma, fullstack, typescript, component-library, api, vercel, modern-web, boilerplate, teaching, example

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## About

This project is designed as a teaching and demonstration tool for modern React, Vite, and TailwindCSS workflows, with a focus on real-world integration patterns and best practices.

---

## Conclusion

This template provides a robust starting point for any marketing or landing page project, with a fully functional feedback system that can be reused across multiple sites. The modular widget approach allows for easy integration and extension, making it ideal for both learning and production use.

---

If you have questions or want to contribute, feel free to open an issue or pull request!
