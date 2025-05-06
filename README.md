# JULES_AI E2E Test Automation Project

This project uses [Playwright](https://playwright.dev/) with TypeScript to perform end-to-end testing for the JULES_AI application.

## Project Structure

```
JULES_AI/
├── .github/                   # GitHub-specific configs (e.g., workflows)
├── lib/                       # Shared utility functions
├── playwright-report/         # Auto-generated test reports
├── test-data/                 # Test data used in scripts
├── test-object/
│   └── dashboard/             # Page object files for dashboard
│       ├── dashboard.selector.ts
│       └── dashboardPage.ts
├── tests/
│   └── smoke/                 # Smoke test cases
│       ├── 01LoginAndLogoutFlows.e2e.spec.ts
│       └── 02NavigationToDifferentSections.e2e.spec.ts
├── test-results/              # Test result outputs
├── abstract.ts                # Base class or shared logic
├── url.endpoint.const.ts      # URL constants
├── package.json               # Project dependencies and scripts
├── playwright.config.ts       # Playwright configuration
└── README.md                  # Project overview and instructions
```

## Prerequisites

- Node.js (>= 14.x)
- npm or yarn

## Getting Started

1. **Install dependencies**

```bash
npm init playwright@latest# or
```

2. **Run Tests**

```bash
npx playwright test
```

3. **View HTML Report**

```bash
npx playwright show-report
```

## Project Scripts

Check `package.json` for available scripts.

## Folder Explanation

- `test-object/`: Contains selectors and page object files.
- `tests/smoke/`: Smoke test cases for major flows.
- `playwright-report/`: Contains the test report after execution.
