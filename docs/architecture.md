project-root/
├── docs/                                 # 📚 Additional documentation (Markdown)
│   ├── architecture.md                   # Project architecture explanation
│   └── setup.md                          # Setup instructions, local development

├── public/                               # 🎨 Static files: images, fonts, icons

├── src/
│   ├── app/
│   │   ├── core/                         # 🧠 Global application logic
│   │   │   ├── layout/                   # Layout base for the application, if applicable
│   │   │   ├── auth/                     # Auth for the application
│   │   │   ├── i18n/                     # Translation for the application
│   │   │
│   │   ├── features/                     # 📦 Feature modules (self-contained)
│   │   │   ├── home/
│   │   │   │   ├── components/
│   │   │   │   ├── services/
│   │   │   │   ├── stores/
│   │   │   │   ├── resolvers/
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   ├── home.component.ts
│   │   │   │   └── home.routes.ts        # Standalone route definitions
│   │   │   │
│   │   │   └── users/
│   │   │       ├── components/
│   │   │       ├── services/
│   │   │       ├── stores/
│   │   │       ├── resolvers/
│   │   │       └── settings.routes.ts
│   │   │
│   │   ├── shared/                       # ♻️ Reusable UI components
│   │   │   ├── components/               # Buttons, inputs, dialogs, etc.
│   │   │   ├── directives/               # Custom directives
│   │   │   ├── pipes/                    # Global pipes
│   │   │   ├── stores/                   # Global state
│   │   │   └── styles/                   # Global styles, theme, SASS variables
│   │   │
│   │   ├── app.routes.ts                 # 🔀 Root route configuration
│   │   ├── app.component.ts              # Root standalone component
│   │   └── bootstrap.ts                  # bootstrapApplication() and providers
│   │
│   ├── environments/                     # 🌍 Environment-specific variables
│   └── main.ts                           # Entry point, calls bootstrap.ts

├── angular.json                          # Angular CLI config
├── tsconfig.json                         # Project-wide TypeScript config
├── package.json                          # Dependencies and scripts
└── README.md                             # Basic project info
