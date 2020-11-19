# TypeScript React Boilerplate

Template Typescript React Project
## Installation

To use this template
- Clone this project
- Rename project as you want
- Install dependencies from `package.json` to your machine
  
  ```bash
  $ yarn
  # or
  $ npm install
  ```

- Run or build project
  ```bash
  $ yarn start
  $ yarn build
  # or npm run start / npm run build
  ```
- Start coding
Demo deploy: [reactts-boilerplate.netlify.app](https://reactts-boilerplate.netlify.app/)
Login
username: admin
password: 123456


## Project structure

```tree
.
├── LICENSE
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── apis
│   │   ├── product.api.ts
│   │   └── user.api.ts
│   ├── App
│   │   ├── App.actions.ts
│   │   ├── App.constants.ts
│   │   ├── App.reducer.ts
│   │   └── App.tsx
│   ├── assets
│   │   ├── fonts
│   │   │   ├── OpenSans-BoldItalic.ttf
│   │   │   ├── OpenSans-Bold.ttf
│   │   │   ├── OpenSans-ExtraBoldItalic.ttf
│   │   │   ├── OpenSans-ExtraBold.ttf
│   │   │   ├── OpenSans-Italic.ttf
│   │   │   ├── OpenSans-LightItalic.ttf
│   │   │   ├── OpenSans-Light.ttf
│   │   │   ├── OpenSans-Regular.ttf
│   │   │   ├── OpenSans-SemiBoldItalic.ttf
│   │   │   └── OpenSans-SemiBold.ttf
│   │   ├── images
│   │   │   ├── home.svg
│   │   │   ├── list.svg
│   │   │   └── open-menu.svg
│   │   └── scss
│   │       └── index.scss
│   ├── components
│   │   ├── Header
│   │   │   ├── Header.styles.ts
│   │   │   └── Header.tsx
│   │   ├── Loading
│   │   │   └── Loading.tsx
│   │   └── SideNav
│   │       ├── SideNav.styles.ts
│   │       └── SideNav.tsx
│   ├── constants
│   │   ├── paths.ts
│   │   └── styles.ts
│   ├── guards
│   │   └── AuthenticatedGuard.tsx
│   ├── helpers
│   │   └── string.ts
│   ├── hooks
│   │   └── usePrevious.tsx
│   ├── index.tsx
│   ├── layouts
│   │   └── MainLayout.tsx
│   ├── logo.svg
│   ├── pages
│   │   ├── Home
│   │   │   └── Home.tsx
│   │   ├── Login
│   │   │   ├── Login.actions.ts
│   │   │   ├── Login.constants.ts
│   │   │   ├── Login.reducer.ts
│   │   │   ├── Login.styles.ts
│   │   │   ├── Login.thunks.ts
│   │   │   └── Login.tsx
│   │   └── Product
│   │       ├── ProductItem
│   │       │   ├── ProductItem.actions.ts
│   │       │   ├── ProductItem.constants.ts
│   │       │   ├── ProductItem.reducer.ts
│   │       │   ├── ProductItem.thunks.ts
│   │       │   └── ProductItem.tsx
│   │       └── ProductList
│   │           ├── ProductList.actions.ts
│   │           ├── ProductList.constants.ts
│   │           ├── ProductList.reducer.ts
│   │           ├── ProductList.styles.ts
│   │           ├── ProductList.thunks.ts
│   │           └── ProductList.tsx
│   ├── react-app-env.d.ts
│   ├── reducer
│   │   └── reducer.ts
│   ├── routes
│   │   ├── HomeRoutes.tsx
│   │   ├── LoginRoutes.tsx
│   │   ├── ProductRoutes.tsx
│   │   └── routes.tsx
│   ├── serviceWorker.ts
│   ├── setupTests.ts
│   ├── store
│   │   └── store.ts
│   └── @types
│       ├── action.d.ts
│       ├── api.d.ts
│       ├── files.d.ts
│       ├── product.d.ts
│       ├── reducer.d.ts
│       └── user.d.ts
├── .env
├── .eslintignore
├── .eslint
├── .gitignore
├── .prettierignore
├── .prettierrc
├── tsconfig.json
└── yarn.lock
```

### Technologies
  - Integrate ESlint, Prettier
  - Styled-Component and CSS Module for CSS
  - Using TypeScript
  - Using Redux, React Hooks, React thunks
  
### src folder
  - **@types**: Declare modules, interface, type for TypeScript
    - `action.d.ts`: Action Interface for Redux
    - `api.d.ts`: Response interface for api
    - `files.d.ts`: Declare modules for images, videos, css formats...
    - `reducer.d.ts`: return type of reducer
    - `product.d.ts`, `user.d.ts`: return interface of item in project
  - **api**: services, contains functions get, post .. api (axios e.g)
  - **App**: component App
  - **assets**: images, videos, files, …
  - **components**: contains folders components
  - **constansts**: contants, enum
  - **guards**: routes demands authenticates
  - **helpers**: functions helpers
  - **hooks**: contains hooks using
  - **layouts**: layouts of projects
  - **pages**: pages of project
  - **reducer**: reducers files
  - **routes**: routes of project
  - **store**: store of Redux
