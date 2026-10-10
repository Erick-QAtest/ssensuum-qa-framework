#!/usr/bin/env bash
set -euo pipefail

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

npm install
npx playwright install chromium

echo ""
echo "SSENSUUM QA framework ready."
echo "Next: edit .env, then run: npm run test:smoke"
