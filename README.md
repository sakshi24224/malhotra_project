# 🏷️ Malhotra Enterprises – Custom Label Manufacturing Website

Welcome to the official website for **Malhotra Enterprises**, a custom manufacturer of woven labels, tags, polybags, and washcare labels. This full-stack web application allows customers to explore our services, view products, and reach out through a contact form.

## 🔗 Live Site

🌐 [https://malhotra-project.onrender.com](https://malhotra-project.onrender.com)

## 📦 Tech Stack

### Frontend
- **ReactJS**
- **Tailwind CSS**
- **Lucide Icons**
- **Vite**

### Backend
- **Node.js**
- **Express.js**
- **Nodemailer** (for contact form emails)
- **CORS & Body Parser**

### Deployment
- **Docker & Docker Compose**
- **Render (for hosting)**

---
Key Features


Landing Page with brand introduction and smooth UI

Services Section with details on woven labels, tags, polybags, etc.

Image Gallery per service with modern UI components

Contact Form that sends an email via backend

Responsive Design for desktop and mobile

Dockerized Deployment for frontend and backend

Environment Variable Integration for email safety


## 📁 Project Structure


malhotra_project/
├── malhotra_web/         # React Frontend
│   ├── src/
│   ├── public/
│   └── Dockerfile
├── malhotra_backend/     # Node.js Backend
│   ├── server/
│   │   ├── index.js
│   │   └── emailConfig.js
│   └── Dockerfile
├── docker-compose.yml
└── README.md
