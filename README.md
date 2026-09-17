# Bahloul Mohamed Rayen - Portfolio

A responsive personal portfolio and resume website for **Bahloul Mohamed Rayen**, a Computer Systems Engineering student based in Sousse, Tunisia.

The site presents Rayen's education, experience, projects, technical skills, soft skills, languages, and contact information in an animated, single-page experience.

## Features

- Responsive layout for mobile, tablet, and desktop screens
- Animated hero section with profile image and contact actions
- Scroll-triggered section animations powered by Framer Motion
- Sticky contact bar that appears while scrolling
- Resume sections for:
  - Profile
  - Education
  - Experience and activities
  - Personal projects
  - Technical skills
  - Languages
  - Soft skills
- Direct phone and email contact links
- LinkedIn, Instagram, and Facebook profile links
- EF SET English certificate link
- Semantic page metadata managed with React Helmet
- Dark slate and teal visual theme with a responsive Tailwind CSS layout

## Featured Projects

### Clever

A student productivity and development platform with tools for academic planning, calendar management, AI-powered chats, goal roadmaps, academic average calculations, and an opportunities feed for conferences, hackathons, and activities.

### Ceremony and Conference Hall Management System

A web platform for managing halls, reservations, employees, work schedules, tasks, and financial tracking through a centralized administrative interface.

## Tech Stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Radix UI](https://www.radix-ui.com/)
- PostCSS and Autoprefixer

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<your-repository>.git
   cd <your-repository>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown by Vite. The configured development server uses port `3000` by default.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server on port 3000 |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for review |
| `npm run lint` | Runs ESLint and reports errors only |
| `npm run lint:warn` | Runs ESLint and includes warnings |

## Project Structure

```text
.
├── public/
│   └── image.jpg                  # Profile image
├── src/
│   ├── components/
│   │   ├── ui/                   # Shared UI primitives and toast components
│   │   ├── EducationSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LanguagesSection.jsx
│   │   ├── ProfileSection.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── SoftSkillsSection.jsx
│   │   ├── StickyNav.jsx
│   │   └── TechnicalSkillsSection.jsx
│   ├── hooks/
│   │   └── useScrollDirection.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Customization

Resume content is defined directly inside the section components in `src/components/`. To adapt the portfolio:

- Update personal details and contact links in `Header.jsx`, `StickyNav.jsx`, and `Footer.jsx`.
- Replace `public/image.jpg` with a new profile image using the same filename, or update the image path in `Header.jsx`.
- Edit education entries in `EducationSection.jsx`.
- Edit work and activity entries in `ExperienceSection.jsx`.
- Edit featured projects in `ProjectSection.jsx`.
- Update technical skills, languages, and soft skills in their respective section components.
- Update the page title and description in `App.jsx` and `index.html`.

## Production Build

Create a production build with:

```bash
npm run build
```

The generated files are placed in `dist/` and can be deployed to any static hosting provider, including GitHub Pages, Netlify, Vercel, or Hostinger.

For GitHub Pages, configure the repository's deployment workflow to publish the contents of `dist/` after running `npm install` and `npm run build`. If the site is hosted under a repository subpath rather than a custom domain, configure Vite's `base` option to match that path.

## Contact

- Email: [Bahloul.Rayen.Dev@gmail.com](mailto:Bahloul.Rayen.Dev@gmail.com)
- Phone: [+216 28 354 645](tel:+21628354645)
- [LinkedIn](https://www.linkedin.com/in/faze-rayen-273884334/)
- [Instagram](https://www.instagram.com/rayen__bhl/)
- [Facebook](https://www.facebook.com/rayen.bhl.5/)

## License

This project is a personal portfolio. No open-source license has been specified.
