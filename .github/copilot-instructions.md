<!-- Workspace-specific custom instructions for Copilot -->

# My Next Portfolio - Development Guidelines

## Project Overview
A minimal and quirky Next.js portfolio website showcasing Yasharth Rai's experience as a Product Manager, with dark theme aesthetics and mountain-inspired design elements.

## Key Features
- Minimal, quirky aesthetic with purple accent colors
- Dark theme optimized for reading
- Fully responsive mobile-first design
- Mountain-inspired animations and dividers
- Smooth scrolling navigation

## Tech Stack
- Next.js 16 (React framework)
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality

## Project Structure
```
ReactPortfolio/
├── app/              # Next.js App Router
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── components/       # Reusable React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/          # Static assets
├── package.json     # Dependencies
└── tailwind.config.js
```

## Development Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Styling Approach
- Primary color: `#7c3aed` (accent purple)
- Background: `#0a0e27` (dark)
- Using Tailwind CSS utility classes
- Custom CSS animations in `globals.css` (mountain dividers, float, glow)
- Quirky elements: floating animations, glowing text, minimal borders

## Content Guidelines
- Each section is a separate component
- Update data in component files directly
- Maintain consistent spacing (py-20, px-6)
- Use 4 spaces for indentation

## Deployment
- Hosting: GitHub Pages / Vercel
- Repository: `yasarthrai/My-Next-Portfolio`
- Enable GitHub Pages in repository settings

## Before Deployment
1. Update contact email in Contact.tsx
2. Verify all links in Header navigation
3. Check social media links (LinkedIn, GitHub, Twitter)
4. Test responsive design on mobile

## Future Enhancements
- Add blog/articles section
- Integrate contact form with email service
- Add dark/light mode toggle
- Implement SEO optimizations
- Add animations on scroll
