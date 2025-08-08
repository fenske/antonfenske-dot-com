# Anton Fenske's Personal Website

Anton Fenske's personal portfolio and blog built with Next.js 14, TypeScript, and Tailwind CSS v4. Features a modern design with dark mode support and MDX-powered blog functionality.

## About

This is the personal website of Anton Fenske, a software enthusiast and CTO at Alva Labs. Previously founded DevSkills which was later acquired by Alva. The site showcases personal projects, professional experience, and shares insights through blog posts.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with Typography plugin
- **Content**: MDX for blog posts with frontmatter
- **Components**: Headless UI for accessible interactions
- **Theme**: Dark/light mode support via next-themes
- **RSS**: Automatic feed generation at `/feed.xml`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with your site URL:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog posts (MDX files)
│   ├── projects/          # Projects showcase
│   └── feed.xml/          # RSS feed generation
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
└── styles/               # Global styles and Prism syntax highlighting
```

## Blog System

Blog posts are written in MDX format and stored in `src/app/blog/[slug]/page.mdx`. Each post includes:

- **Frontmatter**: Metadata with title, description, author, and date
- **Images**: Stored in `public/images/blog/[slug]/`
- **MDX Support**: Full React component integration
- **Automatic Discovery**: Posts are dynamically imported and listed

Example blog post structure:
```typescript
export const article = {
  title: 'Post Title',
  description: 'Post description',
  author: 'Anton',
  date: '2022-10-21'
}
```

## Features

- 📱 Responsive design with mobile-first approach
- 🌙 Dark/light mode toggle
- 📝 MDX-powered blog with syntax highlighting
- 🔍 SEO optimized with proper meta tags
- 📡 Automatic RSS feed generation
- ⚡ Fast performance with Next.js optimizations
- 🎨 Modern UI with Tailwind CSS v4

## Social Links

- X (Twitter): [@fenskexyz](https://x.com/fenskexyz)
- GitHub: [fenske](https://github.com/fenske)
- LinkedIn: [fenske](https://www.linkedin.com/in/fenske/)

## License

Based on the Spotlight template from [Tailwind Plus](https://tailwindcss.com/plus), licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).
