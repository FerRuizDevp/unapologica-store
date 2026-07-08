# 🛍️ Unapologica Store - Full Stack E-Commerce App  

A full-stack e-commerce clothing store built with a modern SaaS architecture. Features real-time customer support chat, video calling, secure payments, and a full admin dashboard — all deployed and production-ready.

## Preview
https://github.com/user-attachments/assets/67b382c8-b3e3-432c-bb3a-e3f9f271655d
https://github.com/user-attachments/assets/db4fd070-210a-41f5-92bc-f2a664d53f5d

🔗 **Live Demo:** [unapologica-store.onrender.com](https://unapologica-store.onrender.com/)

---

## Features

**Shopping Experience**
- Browse and filter clothing products with image optimization via ImageKit
- Cart and order management with persistent state
- Secure checkout powered by Polar payments

**Authentication & Users**
- User sign-up, login, and session management via Clerk
- Role-based access (customer vs. admin)

**Admin Dashboard**
- Add, edit, and remove products
- View and manage orders

**Real-Time Communication (Stream)**
- Live customer support chat with typing indicators, message reactions, threaded conversations, file uploads, and GIF support
- Video calling between customers and support

**Reliability & Observability**
- Error tracking and performance monitoring with Sentry
- Structured logs for debugging and analysis
- Webhooks implemented for Clerk and Polar events

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, TanStack Query, Tailwind CSS, DaisyUI |
| Backend | Node.js, Express.js, TypeScript |
| Database | PostgreSQL (hosted on Neon) |
| Auth | Clerk |
| Payments | Polar |
| Real-Time | Stream (Chat + Video) |
| Image Uploads | ImageKit |
| Monitoring | Sentry |
| Deployment | Render |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A PostgreSQL database (e.g. [Neon](https://neon.tech) — free tier works)
- Accounts for: [Clerk](https://clerk.com), [Polar](https://polar.sh), [Stream](https://getstream.io), [ImageKit](https://imagekit.io), [Sentry](https://sentry.io)

### Installation

```bash
# Clone the repository
git clone https://github.com/FerRuizDevp/unapologica-wardrobe.git
cd unapologica-wardrobe

# Install dependencies for both frontend and backend
cd frontend && npm install
cd ../backend && npm install
```

### Environment Variables

Copy the example files and fill in your keys:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

See `.env.example` files in each folder for all required variables.

### Run Locally

```bash
# In one terminal — backend
cd backend && npm run dev

# In another terminal — frontend
cd frontend && npm run dev
```

---

## Project Structure

```
unapologica-wardrobe/
├── frontend/         # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
│   └── .env.example
├── backend/          # Express API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── db/
│   └── .env.example
└── README.md
```

> Adjust folder names above if your actual structure differs.

---
