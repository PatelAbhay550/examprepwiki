# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Exam Prep Wiki

A Wikipedia-themed competitive exam preparation platform built with Astro.

## Features

- 📚 **Comprehensive Study Materials** - Well-structured, encyclopedia-style articles
- ✏️ **Practice Questions** - Extensive question bank with detailed explanations
- 📋 **Mock Tests** - Timed tests with instant feedback and analytics
- 📰 **Current Affairs** - Daily updates relevant to competitive exams
- 🎥 **Video Lectures** - Curated video content with transcripts
- 📊 **Progress Tracking** - Personal dashboard to monitor your preparation

## Exam Categories

- **UPSC** - Civil Services, NDA, CDS
- **SSC** - CGL, CHSL, GD, MTS
- **Banking** - IBPS, SBI, RBI
- **Railways** - RRB NTPC, ALP, Group D
- **State PSC** - Various state exams
- **Teaching** - CTET, NET, SET
- **Defense** - CDS, AFCAT

## Tech Stack

- **Framework**: Astro (Static Site Generation)
- **Content**: Markdown/MDX with Content Collections
- **Styling**: CSS with custom properties (Wikipedia-inspired design)
- **TypeScript**: For type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Sidebar.astro
│   │   ├── TableOfContents.astro
│   │   ├── Breadcrumb.astro
│   │   └── Card.astro
│   ├── content/        # Content collections
│   │   ├── study/      # Study materials
│   │   ├── questions/  # Practice questions
│   │   ├── tests/      # Mock tests
│   │   ├── current-affairs/
│   │   └── videos/
│   ├── layouts/        # Page layouts
│   │   └── WikiLayout.astro
│   ├── pages/          # Route pages
│   │   ├── index.astro
│   │   ├── exams/
│   │   └── study/
│   ├── styles/         # Global styles
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

## Content Structure

### Study Materials

Located in `src/content/study/[category]/[subject]/[topic].md`

Frontmatter schema:
```yaml
---
title: "Article Title"
description: "Brief description"
category: "upsc" # or ssc, banking, etc.
subject: "Subject Name"
difficulty: "beginner" # or intermediate, advanced
tags: ["tag1", "tag2"]
lastUpdated: 2025-11-09
author: "Author Name"
references:
  - title: "Reference 1"
    url: "https://example.com"
---
```

### Questions

Located in `src/content/questions/[category]/[subject]/question.md`

Frontmatter schema:
```yaml
---
question: "Question text"
options:
  - "Option 1"
  - "Option 2"
  - "Option 3"
  - "Option 4"
correctAnswer: 2 # Index of correct option (0-based)
explanation: "Detailed explanation"
category: "upsc"
subject: "Subject"
topic: "Topic"
difficulty: "easy" # or medium, hard
tags: ["tag1", "tag2"]
source: "Previous Year Paper"
year: 2024
---
```

## Design Philosophy

This platform follows Wikipedia's design principles:

- **Clean, minimalist interface** with focus on readability
- **High information density** but well-organized
- **Semantic HTML** structure
- **Accessible** by default
- **Progressive enhancement**
- **Performance-first** approach

## Color Scheme

Inspired by Wikipedia:
- Primary Background: `#ffffff`
- Secondary Background: `#f8f9fa`
- Borders: `#a2a9b1`
- Links: `#0645ad`
- Text: `#202122`

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspired by Wikipedia
- Content structure based on educational best practices
- Built with Astro and modern web technologies

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
