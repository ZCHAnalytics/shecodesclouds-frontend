
# Azure Cloud Resume Challenge — Frontend Website

This repository hosts the frontend for the Azure Cloud Resume Challenge: a static resume website enhanced with a dynamic visitor counter connected to the backend API.

## Overview

The frontend is a modern, responsive static site built with HTML, CSS, and JavaScript, hosted on **Azure Static Web Apps** and served via an **Azure CDN**.

### Challenge Steps Completed & Enhancements

- Hosted static frontend content in Azure Blob Storage configured as a **Static Website**.
- Served through Azure CDN to improve performance and reliability.
- Connected to backend API (Azure Function + Cosmos DB) for **unique visitor count** display.
- **Cypress End-to-End (E2E) tests** integrated in GitHub Actions workflows:
  - E2E tests run only after backend CI/CD workflow succeeds.
  - Frontend waits for CDN availability before starting tests.
  - Tests configured with environment variables to target live API endpoints.
- Used `setup-node@v3` and `npm audit` in CI to scan for vulnerable dependencies.
- Manual triggering and workflow run triggers configured for flexible test execution.

---

