# Deployment Guide for THREADS

## 🚀 Deploy to Vercel (Recommended)

1.  **Push to GitHub/GitLab/Bitbucket**
    *   Initialize git: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Push to your repository.

2.  **Import to Vercel**
    *   Go to [vercel.com/new](https://vercel.com/new).
    *   Select your repository.
    *   Vercel will detect `Next.js`.
    *   Click **Deploy**.

## 🛠 Project Structure

*   `app/` - App Router pages and layouts.
*   `lib/` - Utility functions.
*   `components/` - Reusable UI components.
*   `public/` - Static assets (images).
*   `app/actions.ts` - Server Actions (Backend Logic).

## 🌍 Environment Variables

Currently, the app uses Mock Data and `crypto.randomUUID()`. No external API keys are required for the demo version.
If you connect a real database (Postgres/Redis), add `DATABASE_URL` in Vercel Project Settings.

## ✅ Build Status

The project has been pre-validated with `npm run build` and passes all checks.
