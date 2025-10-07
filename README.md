A Full Stack Human Resources Management System built with React.js for the frontend and Spring Boot for the backend, integrated with a MySQL database.
It enables full employee management — add, edit, delete, and view employees in an intuitive, responsive interface.

 Key Features

Full employee CRUD operations

Secure MySQL integration

RESTful API architecture

Dynamic routing with React Router

Responsive design with Bootstrap 5

Frontend form validation

 Tech Stack / Tecnologías

Frontend: React.js, Axios, React Router, Bootstrap
Backend: Spring Boot, Spring Data JPA, Hibernate
Database: MySQL
Tools: IntelliJ IDEA, VS Code, Postman


recursos-humanos-spring/
│
├── rh/                        # Backend (Spring Boot)
│   ├── src/main/java/gm/rh/  # Código fuente del backend
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── frontend/                  # Frontend (React)
│   ├── src/
│   │   ├── empleados/         # CRUD components
│   │   ├── plantilla/         # Navbar and layout
│   │   └── App.js
│   └── package.json
│
└── README.md


Execution / Ejecución
🖥️ Backend
cd rh
mvn spring-boot:run


Server running at:
➡️ http://localhost:8080/rh-app/empleados

🌐 Frontend
cd frontend
npm install
npm start


Frontend running at:
 http://localhost:3000/

 Author / Autor

Juan Pablo Conrado Molina
Desarrollador Full Stack | React.js | Spring Boot | MySQL | eng Electronic Student


🔗 GitHub

