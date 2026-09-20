<h1 align="center">AutomationExercise Playwright Test Suite</h1>

<p align="center">
  <strong>End-to-end UI automation using Playwright, TypeScript, and the Page Object Model</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge" alt="Playwright">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge" alt="TypeScript">
  <img src="https://img.shields.io/badge/UI%20%7C%20E2E-6B7280?style=for-the-badge" alt="UI and E2E">
  <img src="https://img.shields.io/badge/Page%20Object%20Model-8B5CF6?style=for-the-badge" alt="Page Object Model">
</p>

<p align="center">
  A QA automation project covering authentication, product discovery, cart behavior, checkout, payment, and a complete purchase journey.
</p>

<br>

---

<br>

<h2 align="center">📌 Overview</h2>

<br>

<p align="center">
This project is an automated <strong>UI and E2E test suite</strong> for AutomationExercise (https://automationexercise.com/), built with <strong>Playwright</strong> and <strong>TypeScript</strong>.
The suite covers happy paths as well as negative path, edge cases, and abnormal behavior findings using <strong>Page Object Model</strong> and dynamic test data.
</p>

<br>
<br>

## 🧪 Test Coverage

| Area | Coverage |
| :--- | :--- |
| 🏠 **Home** | Major navigation sections, logo behavior, invalid route handling |
| 🛍️ **Products** | Category filtering, brand filtering, product search, empty searches, no-match searches, add-to-cart |
| 🔎 **Product Detail** | Product information, quantity handling, invalid quantities, product reviews |
| 🔐 **Authentication** | Registration, login, logout, invalid credentials, empty fields, malformed input |
| 🛒 **Cart** | Multi-product pricing, item removal, quantity handling, checkout access control |
| 💳 **Checkout & Payment** | Checkout flow, payment details, order confirmation |
| 🔄 **Full E2E Flow** | Registration → search → cart → checkout → payment → confirmation → account deletion |

---

<h2 align="center">🚀 End-to-End Purchase Journey</h2>

<p align="center">A major focus of the project is validating that application state carries correctly across an entire user workflow rather than only testing individual pages in isolation.</p>

<p align="center">
  Register Account<br>
  ↓<br>
  Login<br>
  ↓<br>
  Search for Product<br>
  ↓<br>
  Add Product to Cart<br>
  ↓<br>
  Review Cart<br>
  ↓<br>
  Proceed to Checkout<br>
  ↓<br>
  Enter Payment Details<br>
  ↓<br>
  Confirm Order<br>
  ↓<br>
  Verify Order Confirmation<br>
  ↓<br>
  Delete Account
</p>
