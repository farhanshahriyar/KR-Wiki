```markdown
# KingsRock Official Liquipedia

KingsRock Official Liquipedia is a React-based web application, designed to provide a comprehensive overview of the KR Wiki. The project utilizes TypeScript, TailwindCSS, and Vite for development. It features a well-structured component-based architecture that enables easy maintenance and extensibility.

## Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The FarhanShahriyar KR Wiki app provides detailed information about various aspects of KR, including its history, players, team rosters, results, and upcoming events. It uses a clean and modern design with a focus on usability. 

This project is powered by:
- **React** (with TypeScript)
- **Tailwind CSS** for styling
- **Vite** as the build tool for faster development

## Directory Structure

Here’s the basic structure of the project:

```
farhanshahriyar-kr-wiki/
│
├── components.json                # JSON file containing component metadata
├── eslint.config.js               # ESLint configuration for maintaining code quality
├── index.html                     # The main HTML template
├── package.json                   # Project dependencies and scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # TailwindCSS configuration
├── tsconfig.app.json              # TypeScript configuration for the app
├── tsconfig.app.tsbuildinfo       # TypeScript build info for the app
├── tsconfig.json                  # Base TypeScript configuration
├── tsconfig.node.json             # TypeScript configuration for Node.js
├── tsconfig.node.tsbuildinfo      # TypeScript build info for Node.js
├── vite.config.ts                 # Vite configuration for building the app
│
├── assets/                        # Static assets like images
│   └── img/                       # Folder for image assets
│
└── src/                           # Source code for the application
    ├── App.css                    # Global styles for the app
    ├── App.tsx                    # Main application component
    ├── index.css                  # Base styles
    ├── main.tsx                   # Entry point for the React app
    ├── vite-env.d.ts              # Vite environment declarations
    ├── components/                # React components
    │   ├── Achievements.tsx       # Achievements component
    │   ├── CurrentRoster.tsx      # Current team roster component
    │   ├── FormerRoster.tsx       # Former team roster component
    │   ├── Organization.tsx       # Organization component
    │   ├── Overview.tsx           # Overview component
    │   ├── Results.tsx            # Results component
    │   ├── TeamHeader.tsx         # Team header component
    │   ├── TeamOverview.tsx       # Team overview component
    │   ├── ThemeProvider.tsx      # Theme provider component
    │   ├── ThemeToggle.tsx        # Theme toggle component
    │   ├── UpcomingEvents.tsx     # Upcoming events component
    │   ├── History/               # Subfolder for history-related components
    │   │   ├── HistoryTimeline.tsx
    │   │   └── TimelineYear.tsx
    │   ├── Players/               # Subfolder for player-related components
    │   │   ├── PerformanceChart.tsx
    │   │   ├── PlayerDrawer.tsx
    │   │   ├── PlayerGear.tsx
    │   │   ├── PlayerInfo.tsx
    │   │   ├── PlayerMatches.tsx
    │   │   ├── PlayerStats.tsx
    │   │   └── Results/
    │   │       ├── MatchResult.tsx
    │   │       ├── PlayerResults.tsx
    │   │       └── ResultsHeader.tsx
    │   └── ui/                    # Subfolder for UI components [shadcn]
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       └── tooltip.tsx
    ├── hooks/                      # Custom hooks
    │   └── use-toast.ts
    └── lib/                        # Utility functions and API calls
        ├── api.ts
        └── utils.ts
```

## Installation

To get started with this project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/farhanshahriyar-kr-wiki.git
```

2. Navigate into the project directory:

```bash
cd farhanshahriyar-kr-wiki
```

3. Install the dependencies:

```bash
npm install
```

## Usage

After the dependencies are installed, you can run the project in development mode using:

```bash
npm run dev
```

This will start a local development server and you can view the app by opening `http://localhost:5173/` in your browser.
