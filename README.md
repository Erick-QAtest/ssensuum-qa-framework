# SSENSUUM QA Automation Framework

Ready-to-open VS Code project using **Playwright + TypeScript** for API and UI testing.

The framework is organized around the SSENSUUM functional requirements (RF-001 through RF-065), with special emphasis on the 31 indispensable requirements for the first usable release.

## 1. Open in VS Code

```bash
unzip ssensuum-qa-framework.zip
cd ssensuum-qa-framework
code .
```

## 2. Install

```bash
./scripts/bootstrap.sh

# Or manually:
npm install
npx playwright install chromium
cp .env.example .env
```

Then edit `.env` with the real QA/STG URLs and safe test credentials.

## 3. Run

```bash
npm test
npm run test:api
npm run test:e2e
npm run test:mobile
npm run test:smoke
npm run test:regression
npm run typecheck
npm run report
```

## Project structure

```text
ssensuum-qa-framework/
├── .github/workflows/playwright.yml
├── docs/
│   ├── RF_TRACEABILITY.csv
│   └── TEST_STRATEGY.md
├── scripts/bootstrap.sh
├── src/
│   ├── api/
│   │   ├── AdminApi.ts
│   │   ├── BaseApi.ts
│   │   ├── BookingApi.ts
│   │   ├── MembershipApi.ts
│   │   └── PaymentsApi.ts
│   ├── config/
│   │   ├── env.ts
│   │   └── routes.ts
│   ├── pages/
│   │   ├── AdminAgendaPage.ts
│   │   ├── BookingPage.ts
│   │   ├── MemberLoginPage.ts
│   │   └── PublicCatalogPage.ts
│   └── utils/time.ts
├── tests/
│   ├── api/
│   │   ├── admin/
│   │   ├── booking/
│   │   ├── membership/
│   │   └── payments/
│   ├── e2e/
│   │   ├── admin/
│   │   ├── booking/
│   │   ├── membership/
│   │   └── public/
│   └── fixtures/test-data.ts
├── .env.example
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Important design decision

The source documents define behavior but do **not** define actual backend endpoint paths or frontend selectors. For that reason:

- API routes are isolated in `src/config/routes.ts` and can be changed through environment variables.
- UI tests use a stable `data-testid` contract that should be added to the real frontend.
- Tests that need real seeded records use environment variables and `test.skip()` until QA data exists.
- Features that are documented but not yet connected are present as `test.fixme()` placeholders rather than fake passing tests.

## First tests to activate

1. RF-001 public catalog.
2. RF-010/011/016 booking UI.
3. RF-014 real availability.
4. RF-015 three-hour lead-time rule.
5. RF-020 deposit rules.
6. RF-021 payment provider confirmation.
7. RF-032 member pricing.
8. RF-044 birthday benefit.
9. RF-050 day agenda.
10. RF-055 double-booking concurrency.

## Recommended QA seed data

Create deterministic QA records for:

- one standard 1-therapist massage;
- one 2-therapist service;
- at least two therapists;
- one cabin;
- one active member;
- one expired member;
- one member with birthday in the current QA week;
- one free appointment slot;
- one occupied appointment slot;
- one blocked slot.

Do not use production customer records in automated tests.

## CI

A GitHub Actions workflow is included. Add QA/STG URLs as repository secrets before enabling it.

## Traceability

`docs/RF_TRACEABILITY.csv` is the master map from requirement -> priority -> automation layer -> current test file/status.
