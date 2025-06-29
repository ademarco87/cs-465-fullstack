🏛 Architecture
In building the Travlr Getaways full stack web application, I utilized both server-side rendering and client-side single-page architecture. The customer-facing interface was rendered using Express and Handlebars (HBS) for templated HTML, while the administrative dashboard was developed as a Single Page Application (SPA) using Angular. Express and Handlebars enabled efficient server-side rendering of static content, while Angular provided a dynamic and responsive admin experience with real-time data updates and route navigation.

The backend used MongoDB, a NoSQL document database that offers flexible and scalable storage for user and trip data. This choice was ideal for an application that handles loosely structured data without rigid schemas. MongoDB also integrates seamlessly with Node.js and Express, making data manipulation fast and developer-friendly.

⚙️ Functionality
JSON (JavaScript Object Notation) differs from JavaScript in that it's a lightweight data format used for exchanging data, not a programming language. In this project, JSON served as the bridge between the frontend and backend. Angular services requested data via HTTP methods, received JSON responses from the RESTful API, and rendered them into UI components on the admin dashboard.

To improve functionality and efficiency, I consistently refactored code throughout the project. For example, I modularized reusable UI components such as trip cards and input forms in Angular. This not only reduced code duplication but made it easier to maintain and extend the app. Such practices align with modern development standards and support scalable, production-ready applications.

🔍 Testing
In a full stack system, the backend must support multiple HTTP methods—GET, POST, PUT, and DELETE—each of which was implemented and tested throughout the development process. I used Postman to test REST API endpoints and verify correct server responses.

A key challenge emerged after implementing JWT-based login authentication for admins. Testing protected endpoints required simulating authorized access by passing valid tokens in headers. This helped solidify my understanding of how authentication and authorization work in secure applications. It also gave me deeper insight into how layered security is tested and verified in professional-grade deployments.

🎯 Reflection
This course has served as a culmination of everything I’ve learned so far in the Computer Science program. It challenged me to design, build, secure, and maintain a complete full stack application from scratch—something I had never done at this scale before. From frontend development and backend architecture to database integration and authentication, every piece had to work together. I also learned to debug complex, multi-layered issues across the stack using real-world tools and workflows.

This experience has significantly boosted my confidence and made me a more well-rounded developer. As I transition from emergency medicine to a career in software development, projects like Travlr Getaways help prove that I’m not just learning theory—I can build real, secure, production-quality applications. I’ll proudly include this project in my professional portfolio moving forward.

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
