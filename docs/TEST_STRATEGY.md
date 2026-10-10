# SSENSUUM — QA Test Strategy

## Goal
Turn each functional requirement into an auditable path:

`RF -> business rule -> UI/API -> persistence -> test case -> automation -> evidence -> Done`

## Automation pyramid
- Unit/business-rule tests: ~40%
- API/integration tests: ~45%
- End-to-end UI tests: ~15%

The booking engine, time rules, membership pricing, birthday benefit, deposits and double-booking controls should be pushed down to API/unit level whenever possible.

## Required business rules encoded by the source documents
- Operating hours: 09:00–20:30; last one-hour massage begins at 19:30.
- Minimum booking lead time: 3 hours.
- Reschedule cutoff: 5 hours. With less time the deposit is lost.
- Deposit: MXN 300; MXN 600 for two-therapist services.
- A therapist or cabin cannot have overlapping appointments.
- 4-hands and couples services use two therapists.
- Membership lasts 365 days; expired membership returns to public pricing.
- Birthday massage: once per year during birthday week, no deposit; no-show loses the benefit for that year.
- Reservation is confirmed only after payment-provider approval.
- Card numbers/CVV/expiry are never stored by SSENSUUM.
- Public catalog should remain available if the booking system fails; WhatsApp is the fallback.

## Tags
- `@smoke`: release gate / most important user journeys.
- `@regression`: broader behavioral coverage.
- `@rf`: requirement-linked tests.

## Environment strategy
Use separate QA/STG and production data. Payment tests must use the provider's test mode and/or a QA-only webhook simulator. Never automate real charges in this suite.

## Selector contract
Prefer explicit frontend test IDs, for example:
- `data-testid="catalog"`
- `data-testid="service-card"`
- `data-testid="therapist-card"`
- `data-testid="booking-summary"`
- `data-testid="deposit-amount"`

This keeps UI tests stable while visual markup changes.
