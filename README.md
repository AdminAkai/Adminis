# Adminis (Under Construction) Changelog

### https://www.adminis.tech

Website deployed on Amazon S3 and Cloudfront, domain from Google Domains, routed with Amazon Route 53 and SSL secure with Amazon Certificate Manager

## Changelog

**08/24/2026 v0.3**:

- Added form validation and stylings

- Added graphql codegen

- Added backend "transmission-api"

- Hooked up backend to frontend

**08/20/2026 v0.21**:

- Added Transmission episode and form

- Disabled for now as the backend is under construction

- Added new blood red color to theme

- Added Cloudflare Turnstile for security

**08/18/2026 v0.2**:

- Added "broken" state to navbar during episode 2

**08/17/2026 v0.2**:

- Both episodes that are currently out are mobile friendly and responsive

**08/17/2026 v0.2**:

- Version jump

- Added scrolling link ticker in the Navbar

- Cleaned up unused components

- Added new redux state and adjusted redux tree for a future feature

**08/15/2026 v0.11**:

- Adjusted scramble text (again) as well as color palette

- Adjusted project infrastructure

- Parallax Stage setup properly

**08/15/2026 v0.1**:

- Nuked other pages in the UI but Landing

- Adjusted scramble text and added Parallax stage, layers, and parallax hook bases

- Added hiragana/katakana array for scramble text in japanese

**01/20/2025 v0.05**:

- Re-arranged general structure of the UI

- Added Contact sector to Landing Page

- Only one route for now

- Adjusted mobile stylings, added custom styled form and form inputs

**11/30/2023 v0.04**:

- Added animations and Framer Motion animations

- Adjusted scramble text settings

- Added EN/JP language settings

- Landing Page stylings changed slightly, Navbar stylings changed slightly

**11/30/2023 v0.03**:

- Github GraphQL API now auths properly to grab all public pinned repos

- Landing Page stylings changed slightly, Navbar stylings changed slightly

- _Future Steps_:

  - Animations and design overhaul on website even prior to React Three conversion
    - Framer Motion library
    - Continue to improve temp site design and user flow
    - Improve accessibility options, include different colorblind modes
  - Grab

**11/28/2023 v0.02**:

- Jest unit tests set up and isolated from Playwright tests
  - They pass but currently a bug in Vite with import.meta and Jest causes two failures in main.tsx testing so not worth pushing up coverage or using in pipeline... yet
- Added Github Repo api, fine-grained api key included to fetch public repos so the site automatically updates itself with my work
- Entire architecture overhauled to fit microfrontend paradigm
- Redux Saga added, Landing page redux sector added for Github repo fetch
- Apollo Client used for graphQL added

- _Future Steps_:
  - Write out Playwright E2E tests
  - Continuous work on React ThreeJS for the eventual overhaul of design and interactivity
    - Accessbility and SEO are still accounted for during these changes
  - Continue to improve temp site design and user flower
  - Amplify Gen2 has no custom domain functionality yet:
    - .env file pushed up temporarily, bad practice but the api key used is fine-grained and readonly for public repos only
    - S3 bucket with Cloudfront distribution for now, will later move to Amplify hosting as a simple backend will be needed
  - Animations using Framer Motion and loading UI as well as error routing and handling
  - May switch to Vitest if Jest bug with import.meta is solved in optimal time as testing is important for production

**09/25/2023 v0.01**:

- _First official iteration and inclusion of changelog_:

  - React, Vite, and Typescript are all configured
  - Husky, ESLint, and Prettier are all configured
  - Jest Testing for Unit Tests and Integration Tests are configured
  - Global themes with styled-components are configured
  - React Redux and Redux Saga configured (no Sagas yet)

- Future Steps:
  - Include changelog onto website as a new navbar option
  - Continuous work on React ThreeJS for the eventual overhaul of design and interactivity
    - Accessbility and SEO are still accounted for during these changes
  - Continuous work on different projects to showcase on this site
  - Design change for users to more easily contact me/the company
