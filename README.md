Strapi Blog Project – Full Documentation
📌 Overview

This project is a full-stack blog application built using Strapi as the backend (Headless CMS) and Next.js as the frontend.
It supports dynamic creation and management of Posts, Authors, and Categories, with clean API endpoints and a responsive UI.

Project folder structure:

Strapi_Blog_Site/
├── strapi_backend/      # Strapi CMS backend
└── strapi_frontend/     # Next.js frontend

🛠️ Technologies Used
Backend (Strapi)

Strapi v5 (Headless CMS)

Node.js

REST API

SQLite (local)

PostgreSQL (production)

Frontend (Next.js)

Next.js 14

React

Tailwind CSS

Axios / Fetch API

Deployment

Render → Strapi backend + PostgreSQL

Netlify → Next.js frontend

📂 Project Architecture
Backend Structure
strapi_backend/
├── src/
│   ├── api/
│   │   ├── post/
│   │   ├── author/
│   │   └── category/
│   ├── config/
│   ├── database/
│   └── extensions/
├── public/
├── .env
└── package.json

Frontend Structure
strapi_frontend/
├── pages/
├── components/
├── styles/
├── public/
└── package.json

🧩 Content Types & Relationships
Post

title (text)

postId (UID)

description (text)

content (rich text)

cover image (media)

author → many-to-one

category → many-to-one

Author

name (string)

authorId(uid)

description (text)

avatar (media)

posts → one-to-many

Category

name (string)

posts → one-to-many

Relationship Diagram
Author 1 -------- ∞ Post ∞ -------- 1 Category

⚙️ How to Run Locally
1. Clone Repository
git clone [<your-repo-url>](https://github.com/Utitbest/Strapi_Frontend)
git clone [<your-repo-url>](https://github.com/Utitbest/Strapi_Backend) 

Backend Setup (Strapi)
2. Install Dependencies
cd strapi_backend
npm install

3. Start Development Server
npm run develop

4. Environment Variables (.env)

Create a .env file in strapi_backend/:


DATABASE_CLIENT=postgres
DATABASE_HOST=your-host
DATABASE_PORT=5432
DATABASE_NAME=your-db
DATABASE_USERNAME=your-user
DATABASE_PASSWORD=your-password

APP_KEYS=your-app-keys
JWT_SECRET=your-jwt-secret
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt

Frontend Setup (Next.js)
5. Install Dependencies
cd strapi_frontend
npm install

6. Run Frontend
npm run dev

7. Frontend Environment Variables

Create .env.local in strapi_frontend/:

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

🌍 Deployment Guide
Backend Deployment (Render)

Steps:

Push backend to GitHub

Create Render Web Service

Add Environment Variables from .env

Set:

Build Command: npm install
Start Command: npm run start


Deploy

Connect a Managed PostgreSQL instance and update .env

Frontend Deployment (Vercel)

Steps:

Push frontend to GitHub

Import project into Vercel

Add environment variable:

NEXT_PUBLIC_STRAPI_URL=https://your-render-backend-url


Deploy

🔗 API Endpoints
Posts
GET /api/posts
GET /api/posts/:id

Authors
GET /api/authors
GET /api/authors/:id

Categories
GET /api/categories
GET /api/categories/:id

📖 Learning Resources Used

Strapi Documentation → https://docs.strapi.io

Next.js Documentation → https://nextjs.org/docs

Stack Overflow

Render Deployment Docs

YouTube tutorials on Strapi CMS, Next.js, and PostgreSQL

Key Features

Fully functional Headless CMS

Dynamic blog content with images

Author & category filtering

Tailwind-styled responsive UI

API-first architecture

Production deployment ready

Author
Utitbest Akpan
Web Developer
