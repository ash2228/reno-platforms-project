🏫 SchoolHub - Modern School Management System
<div align="center">
A modern, responsive school management system built with cutting-edge technologies

[![Next.js](https://img.shields.io/badge/Next.js(#installation) - 🐛 Report Bug - ✨ Request Feature

</div>
✨ Features
🎯 Core Functionality
📝 Add Schools: Comprehensive form with validation to add new school entries

🏫 View Schools: Beautiful grid layout displaying schools like an e-commerce platform

📱 Fully Responsive: Perfect experience on desktop, tablet, and mobile devices

🖼️ Image Upload: Upload and store school images with automatic file handling

🔧 Technical Excellence
⚡ Modern Tech Stack: Built with Next.js 14, TypeScript, and App Router

🎨 Beautiful UI: Powered by shadcn/ui components and Tailwind CSS

📊 Database Integration: MySQL database with Aiven cloud hosting

✅ Form Validation: Robust validation using Zod and React Hook Form

🎭 Smooth Animations: Enhanced UX with GSAP animations

🔒 Type Safety: Full TypeScript implementation for reliability

🛠️ Tech Stack
Category	Technology
Frontend	Next.js 14, React 18, TypeScript
Styling	Tailwind CSS, shadcn/ui Components
Forms	React Hook Form, Zod Validation
Database	MySQL 8.0, Aiven Cloud
Animations	GSAP (GreenSock)
Deployment	Vercel
📱 Screenshots
<div align="center">
🏠 Home Page
Modern landing page with smooth animations

📝 Add School Form
Comprehensive form with real-time validation

🏫 Schools Gallery
Beautiful responsive grid layout

</div>
🚀 Quick Start
Prerequisites
Node.js 18.0 or later

MySQL database (Aiven recommended)

npm or yarn package manager

Installation
Clone the repository

bash
git clone https://github.com/ash2228/school-management.git
cd school-management
Install dependencies

bash
npm install
# or
yarn install
Set up environment variables

bash
cp .env.example .env.local
Update .env.local with your database credentials:

text
DB_HOST=your-mysql-host
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database
DB_PORT=3306
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Set up the database

sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact BIGINT NOT NULL,
  image TEXT,
  email_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Start the development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000

📁 Project Structure
text
school-management/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/schools/        # API routes
│   ├── 📁 add-school/         # Add school page
│   ├── 📁 schools/            # View schools page
│   └── 📄 layout.tsx          # Root layout
├── 📁 components/             # Reusable components
│   ├── 📁 ui/                 # shadcn/ui components
│   └── 📄 navigation.tsx      # Navigation component
├── 📁 lib/                    # Utilities
│   ├── 📄 db.ts              # Database connection
│   └── 📄 schemas.ts         # Zod validation schemas
├── 📁 public/                 # Static files
│   └── 📁 schoolImages/       # Uploaded images
└── 📄 README.md              # You are here!
🎯 Usage
Adding a New School
Navigate to the "Add School" page

Fill in all required fields:

School Name

Complete Address

City & State

Contact Number (10-15 digits)

Email Address

School Image (optional)

Click "Add School" to submit

Viewing Schools
Go to the "View Schools" page

Browse through schools in a beautiful grid layout

Each card shows:

School image or placeholder

School name

Full address

City location

🎨 Design Philosophy
SchoolHub follows modern design principles:

🎯 User-Centric: Intuitive interface designed for all user levels

📱 Mobile-First: Responsive design that works perfectly on all devices

⚡ Performance: Optimized for speed with Next.js and modern practices

♿ Accessible: Built with accessibility in mind

🎭 Delightful: Smooth animations and micro-interactions

🔧 API Endpoints
Method	Endpoint	Description
POST	/api/schools	Add a new school
GET	/api/schools	Fetch all schools
Example API Usage
javascript
// Add a new school
const formData = new FormData();
formData.append('name', 'Example School');
formData.append('address', '123 Main St');
// ... other fields

const response = await fetch('/api/schools', {
  method: 'POST',
  body: formData,
});
🚀 Deployment
Deploy to Vercel
Connect to GitHub

Import your repository to Vercel

Connect your GitHub account

Set Environment Variables
Add these to your Vercel project settings:

text
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_PORT=your-database-port
Deploy

Vercel will automatically deploy on every push to main

Your app will be live at https://your-app.vercel.app

Alternative Deployment Options
Netlify: Full-stack deployment with serverless functions

Railway: Easy database and app deployment

DigitalOcean: App Platform with managed databases

🤝 Contributing
We love contributions! Here's how you can help:

🐛 Reporting Bugs
Check existing issues first

Create a detailed bug report

Include steps to reproduce

Add screenshots if applicable

✨ Suggesting Features
Open an issue with the enhancement label

Describe the feature in detail

Explain the use case

Discuss implementation ideas

🔧 Development Setup
Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Make your changes

Add tests if applicable

Commit with conventional commits: git commit -m 'feat: add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Next.js - The React framework for production

shadcn/ui - Beautiful and accessible components

Tailwind CSS - Utility-first CSS framework

Aiven - Managed cloud database services

GSAP - Professional-grade animation library

📊 Stats
GitHub language count**

⭐ Star this repo if you found it helpful! ⭐

🔝 Back to top

</div>