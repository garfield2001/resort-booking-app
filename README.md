# London Beach Resort & Hotel - Booking & Information System

## Introduction
Welcome to the core repository for the **London Beach Resort & Hotel** Booking and Information System (IS). 

This application is a modern, high-performance web platform built with Next.js, Tailwind CSS, and PostgreSQL. While currently customized and targeted for the London Beach Resort in General Santos City, the underlying architecture is designed as a "White-Label" system that can be easily themed and deployed for other boutique resorts and hotels in the region.

## Purpose & Goal
The primary goal of this application is to **modernize resort operations and eliminate reliance on manual social media management.** 

Currently, many local resorts rely entirely on Facebook Messenger for customer inquiries and manual booking ledger systems. This creates a massive operational bottleneck, leading to lost revenue, double-bookings, and exhausted staff answering the exact same questions ("How much is the entrance fee?", "Do you have cottages available?") 24/7.

**This system solves these problems by providing:**
1. **A Smart Inquiry Chatbot:** An automated widget that intercepts customers and instantly answers Frequently Asked Questions.
2. **Direct Booking Engine:** A beautiful, commission-free platform for customers to check date availability, book overnight rooms, and reserve day-tour cottages securely.
3. **Admin Operational Dashboard:** A backend interface for resort staff to manage real-time inventory, adjust pricing, and track all incoming reservations visually.

## Tech Stack & Architecture
- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS
- **Database:** PostgreSQL managed via Prisma ORM
- **Architecture:** Feature-Sliced Design (`src/features/`) for maximum scalability and modularity.
- **Theming:** Centralized CSS variables for instant white-label branding swaps.

## Getting Started

First, install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
