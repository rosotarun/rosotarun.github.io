# Rosota Copilot Landing Page

A clean, modern landing page for Rosota Copilot built with Next.js, React, and Tailwind CSS, styled in the Raycast minimal white design aesthetic.

## 🚀 Features

- **Raycast-inspired minimal white design**
- Fully responsive layout
- SEO-friendly structure
- TypeScript support
- Tailwind CSS for styling
- Modular component architecture
- SF Pro font family

## 📦 Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- SF Pro Display/Text font family

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
rosota-copilot-landing/
├── components/
│   ├── Navigation.tsx    # Navigation bar with logo and links
│   ├── Hero.tsx          # Hero section with main CTA
│   ├── Features.tsx      # Key features grid
│   ├── HardwareCTA.tsx   # Hardware CTA section
│   ├── DownloadCTA.tsx   # Download buttons
│   └── Footer.tsx        # Footer with links
├── pages/
│   ├── _app.tsx          # App wrapper
│   └── index.tsx         # Main landing page
├── styles/
│   └── globals.css       # Global styles and Tailwind
├── public/
│   └── images/           # Logo and image assets
│       ├── apple-logo.svg
│       └── rosota-logo.svg
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Design System

The design follows Raycast's minimal white aesthetic:

- **Colors**:
  - Background: `#F5F5F5`
  - Border: `#EDEDED`
  - Text: `#0C0C0C`
  - Secondary Text: `#6E6E73`

- **Typography**: SF Pro Display/Text font family
- **Border Radius**: 12px for buttons
- **Layout**: Generous white space, clean spacing
- **Components**: Floating cards, subtle shadows

## 🖼️ Adding Custom Logos

Replace the placeholder logo files in `/public/images/`:

- `apple-logo.svg` or `apple-logo.png` - Apple logo for download buttons
- `rosota-logo.svg` or `rosota-logo.png` - Rosota Copilot logo for navigation

The components will automatically use SVG first, with PNG fallback.

## 🚢 Deployment

Build for production:

```bash
npm run build
npm run start
```

Deploy to Vercel:

```bash
vercel
```

## 📝 License

MIT

## 🔗 Links

- [ROSOTA Homepage](https://rosota.run)
- [Documentation](https://docs.rosota.com)
