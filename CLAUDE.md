# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Setup

Create a `.env.local` file in the root with:
```
NEXT_PUBLIC_SITE_URL=https://example.com
```

## Project Architecture

This is a **Spotlight** template from Tailwind Plus - a personal portfolio/blog site built with Next.js 14, TypeScript, and Tailwind CSS v4.

### Key Architecture Patterns

- **App Router**: Uses Next.js 13+ app directory structure (`src/app/`)
- **MDX Content**: Blog posts are authored in MDX format with frontmatter metadata
- **File-based Routing**: Posts live in `src/app/blog/[slug]/page.mdx` structure
- **Component-based Layout**: Uses a centralized `Layout` component with `Header` and `Footer`
- **Dark Mode**: Implemented via `next-themes` with system/manual toggle
- **TypeScript Paths**: Uses `@/*` alias mapping to `src/*`

### Content Management

- **Blog System**: Powered by `src/lib/posts.ts` which dynamically imports MDX files
- **Post Discovery**: Uses `fast-glob` to find all `*/page.mdx` files in blog directory
- **Metadata**: Each post exports an `article` object with title, description, author, and date
- **RSS Feed**: Generated at `/feed.xml` route using the `feed` library

### Styling Architecture

- **Tailwind CSS v4**: Latest version with new CSS-first architecture
- **Typography Plugin**: `@tailwindcss/typography` for prose styling
- **Headless UI**: For accessible interactive components
- **Custom Components**: Modular components in `src/components/`

### MDX Configuration

- **Remark Plugins**: GitHub Flavored Markdown support via `remark-gfm`
- **Rehype Plugins**: Syntax highlighting via `@mapbox/rehype-prism`
- **Custom Styles**: Prism CSS styles in `src/styles/prism.css`

### Key Files

- `src/lib/posts.ts` - Post discovery and metadata extraction
- `src/components/Layout.tsx` - Main layout wrapper
- `src/components/PostLayout.tsx` - Post layout wrapper
- `src/app/layout.tsx` - Root layout with metadata and providers
- `next.config.mjs` - MDX configuration and file tracing
- `mdx-components.tsx` - Global MDX component overrides