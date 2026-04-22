# Yasharth Rai - Portfolio

A minimal and quirky portfolio website built with Next.js, featuring a product manager's journey through data, insights, and innovation.

## 🌟 Features

- **Minimal & Quirky Aesthetic**: Dark theme with purple accents, smooth animations, and mountain-inspired elements
- **Fully Responsive**: Mobile-friendly design that works across all devices
- **Fast Performance**: Built with Next.js 16 and optimized for speed
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 🚀 Live Site

Visit: [https://my-next-portfolio.vercel.app](https://my-next-portfolio.vercel.app)

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Professional bio, skills, and certifications
- **Experience**: Detailed work history with achievements
- **Projects**: Portfolio of notable projects and case studies
- **Contact**: Multiple Ways to get in touch
- **Footer**: Credits and inspirational quote

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages / Vercel
- **Version Control**: Git & GitHub

## 📦 Installation

### Prerequisites
- Node.js 16+ (recommended 18+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yasarthrai/my-next-portfolio.git
cd my-next-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## 🎨 Customization

### Colors
Modify the theme in `tailwind.config.js`:
```js
colors: {
  'dark': '#0a0e27',
  'darker': '#050811',
  'accent': '#7c3aed',
  'accent-light': '#a78bfa',
}
```

### Content
Update component content files in the `components/` directory to personalize the portfolio.

### Fonts
Fonts are imported in `app/globals.css` from Google Fonts. Change the imports to use different fonts.

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile (320px)
- Tablet (768px)
- Desktop (1024px+)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

Configure deployment settings in your GitHub repository settings.

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## 🤝 Contributing

Feel free to fork this repository and use it as a template for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🏔️ Personal Notes

> "In the mountains, I find clarity. In data, I find truth."

This portfolio reflects my passion for:
- 🚴 Mountain biking and outdoor adventures
- 🧘 Finding peace in solitude
- 📊 Transforming data into meaningful insights
- 🛠️ Building products that matter

---

Made with ❤️ by Yasharth Rai
