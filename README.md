# Areion - Business Development Infrastructure

A modern, responsive business website built for Areion, providing business development infrastructure for ambitious startups. This Next.js application showcases services, testimonials, founder's story, and comprehensive solutions for startup growth.

## 🚀 Features

- **Hero Section** - Engaging landing page with clear value proposition
- **Services Overview** - Comprehensive display of business development services
- **Problem-Solution Framework** - Clear articulation of challenges and solutions
- **Startup Launch Pack** - Specialized offerings for new ventures
- **Client Testimonials** - Social proof and success stories
- **Clientele Showcase** - Display of partner companies and clients
- **Founder's Story** - Personal narrative and company mission
- **Who This Is For** - Target audience identification
- **Why Choose Us** - Competitive advantages and unique value propositions
- **Ready to Grow CTA** - Strategic call-to-action sections

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: CSS Modules
- **Fonts**: 
  - Playfair Display (headings)
  - Inter (body text)

## 📦 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd areion(biz)
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
areion(biz)/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with font configuration
│   ├── page.tsx                 # Home page (renders Hero)
│   ├── clientele/               # Clientele page route
│   ├── founder-story/           # Founder's story page route
│   ├── launch-pack/             # Launch pack page route
│   ├── problem-we-solve/        # Problems page route
│   ├── ready-to-grow/           # CTA page route
│   ├── services/                # Services page route
│   ├── testimonials/            # Testimonials page route
│   ├── who-this-is-for/         # Target audience page route
│   └── why-choose-us/           # Why choose us page route
│
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Hero section component
│   ├── Footer.tsx               # Footer component
│   ├── Services.tsx             # Services section
│   ├── ProblemWeSolve.tsx       # Problem-solution section
│   ├── ProblemsWeSolve.tsx      # Alternative problems section
│   ├── LaunchPack.tsx           # Launch pack section
│   ├── StartupLaunchPack.tsx    # Alternative launch pack
│   ├── Testimonials.tsx         # Testimonials section
│   ├── Clientele.tsx            # Client showcase
│   ├── FoundersStory.tsx        # Founder's story section
│   ├── WhoThisIsFor.tsx         # Target audience section
│   ├── WhyChooseUs.tsx          # Value propositions
│   ├── ReadyToGrow.tsx          # Call-to-action section
│   └── *.module.css             # Component-specific styles
│
├── public/                       # Static assets
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Design System

### Typography

- **Headings**: Playfair Display (400, 600, 700)
- **Body**: Inter (300, 400, 500, 600)

### Styling Approach

- CSS Modules for component-scoped styling
- Global styles in `app/globals.css`
- Responsive design with mobile-first approach

## 📜 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Deployment Platforms

This Next.js application can be deployed to:

- **Vercel** (recommended) - Zero-configuration deployment
- **Netlify** - Supports Next.js with plugins
- **AWS Amplify** - Full-stack deployment
- **Custom Server** - Using `npm start` after building

### Environment Variables

Currently, no environment variables are required. If you add API integrations or external services, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Private project - All rights reserved.

## 📞 Contact

For questions or support regarding this project, please contact the Areion team.

---

**Built with ❤️ using Next.js**
