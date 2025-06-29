# 
## 🏛 Architecture
The Travlr Getaways full stack web application combines both server-side and client-side rendering to deliver a modern, responsive experience.

The customer-facing interface was built using Express.js and Handlebars (HBS) to generate dynamic HTML on the server.

The admin dashboard was implemented as a Single Page Application (SPA) using Angular, offering a smooth, interactive experience for managing trips.

The backend uses MongoDB, a flexible NoSQL document database that’s ideal for handling loosely structured data like trip and user details. This allowed for faster development without rigid schemas. MongoDB integrates seamlessly with Node.js and Express, simplifying data modeling through Mongoose and enabling efficient CRUD operations.

## ⚙️ Functionality
JSON (JavaScript Object Notation) is not a programming language like JavaScript—it’s a lightweight, language-independent format used to structure data for transmission. In this project:

JSON served as the data bridge between frontend and backend.

Angular sent and received JSON payloads via RESTful API requests to/from the Express backend.

The admin SPA rendered JSON responses dynamically in Angular components.

To improve performance and maintainability, I refactored UI components like trip cards and forms into modular, reusable elements. This reduced redundancy and improved consistency across the admin dashboard. These techniques align with real-world development standards and enhance long-term scalability.

#
## 🔍 Testing
The backend API supports multiple HTTP methods: GET, POST, PUT, and DELETE.

I used Postman to test API endpoints and confirm proper responses for each request type.

Testing included edge cases and error handling.

After implementing JWT-based authentication, testing required simulating valid tokens in request headers to access protected routes.

This process deepened my understanding of how token-based authentication works and how APIs enforce security policies across a distributed full stack environment.

## 🎯 Reflection
This course has been a culmination of everything I’ve learned so far in the Computer Science program. It challenged me to design, build, and secure a full stack application from scratch—something I had never done at this scale before.

From frontend design and backend APIs to authentication and database integration, each part had to work together. I also learned how to debug complex, multi-layered issues across the stack using real-world workflows and tools.

As I transition from a career in emergency medicine to one in tech, this project represents more than just a course requirement—it’s proof that I can build production-ready applications. I’ll proudly include this in my professional portfolio as I move forward into the software development field.

# 🌍 Travlr Getaways - Development Log  
_A full-stack travel management app built in CS-465 with the MEAN stack_

---

## 🗂 Course: CS-465 Full Stack Development

This README documents weekly progress and technology stack used during the development of the Travlr Getaways project.

---

## 📅 Weekly Development Log

### ✅ Module 1 – Week 1: Project Setup
- Initialized the project structure
- Explored full stack development concepts
- Started planning the **Travlr Getaways** application

### 🔧 Module 2 – Week 2: MVC Architecture + Templating
- Refactored backend using **MVC architecture**
- Implemented **Handlebars (HBS)** for server-side templating
- Enabled dynamic content rendering

### 🚀 Module 3 – Week 3: Angular Integration
- Added **Angular** for the admin-side Single Page Application (SPA)
- Created components, routes, and services

### 📝 Module 4 – Week 4: Forms + Validation
- Integrated **Angular forms** with validation logic
- Built components for adding and displaying trips

### 🧩 Module 5 – Week 5: Trip Display Features
- Added **Trip List** and **Trip Card** components
- Enabled backend communication via Angular services

### ✏️ Module 6 – Week 6: Trip Editing
- Developed **Edit Trip** feature with dynamic form population
- Implemented data merging, improved validations

### 🔐 Module 7 – Week 7: Authentication
- Integrated **JWT Authentication**
- Created protected routes for admins
- Finalized trip update functionality

---

## 🧰 Tech Stack

### 👨‍💻 Frontend (Admin SPA)
- Angular 16 (Standalone components)
- TypeScript
- Bootstrap 5
- Reactive Forms / Template-driven Forms
- Angular Router

### 🌐 Backend (REST API)
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Passport.js
- Custom Middleware

### 🗄️ Database
- MongoDB Atlas (Cloud-hosted NoSQL)

### 🛠 Development Tools
- Visual Studio Code
- Postman (API testing)
- Git + GitHub
- ESLint
- nodemon (backend live reload)
- Angular CLI (frontend live server)

### 🔒 Security
- JWT-based authentication
- Bcrypt for password hashing
- `.env` for environment config (ignored in version control)
- HTTPS-ready architecture

---

## 📌 Notes
- Admin SPA is Angular-powered.
- Customer-facing pages use Express and Handlebars.
- Project structured with maintainability and scalability in mind.
