# Banking Application (LanceVault)

A modern **full-stack fintech banking application** that allows users to securely connect bank accounts, view transactions, and perform fund transfers. This project is built as a learning-focused, resume-ready application demonstrating real-world fintech workflows using modern web technologies.

> **Disclaimer**: This project is for **educational and portfolio purposes only**. It uses sandbox APIs and does not process real money or operate as a regulated financial service.

---

![App Homepage](public\icons\HomePage.png)

---

## Features

* Secure user authentication and session management
* Link multiple bank accounts using Plaid (sandbox)
* View real-time account balances and transaction history
* Transfer funds between users via Dwolla (sandbox)
* Interactive charts and financial insights
* Fully responsive and modern UI

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Chart.js

### Backend & Services

* Appwrite (Authentication, Database)
* Plaid API (Bank account linking – Sandbox)
* Dwolla API (Payments & transfers – Sandbox)

### Forms & Validation

* React Hook Form
* Zod

---

## Project Structure

```
/app            → Next.js App Router pages
/components     → Reusable UI components
/lib            → Utility functions and API helpers
/constants      → Static configuration and constants
/public         → Static assets
```

---

## Setup & Installation

### 1️ Clone the Repository

```bash
git clone https://github.com/your-username/banking.git
cd banking
```

### 2️ Install Dependencies

```bash
npm install
```

### 3️ Environment Variables

Create a `.env` file and add the following:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=http://localhost:3000

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
NEXT_APPWRITE_KEY=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=
DWOLLA_ENV=
```

> Use **sandbox credentials** for Plaid and Dwolla.

### 4️ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## APIs Used

* **Plaid Sandbox** – Simulates bank account linking and transaction data
* **Dwolla Sandbox** – Simulates ACH transfers between users

---

## Learning Outcomes

* Understanding fintech data flows and banking integrations
* Implementing secure authentication and API handling
* Building scalable full-stack applications with Next.js
* Working with third-party financial APIs

---

## License

This project is licensed for educational use only. Refer to Plaid and Dwolla documentation for their API usage terms.

---

## Acknowledgements

Built as part of a full-stack fintech learning project.
