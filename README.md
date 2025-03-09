Proyecto final | Yerko Rojas | Full Stack Desafio Latam Generacion 70.
Link a panel de planificación (hito1): https://trello.com/b/RzCxM8IZ/proyecto-final-desafio-latam](https://docs.google.com/presentation/d/1Q22HGvD9F0-A-VN-nf59myRBnE_G8qMTzq-LXfYt6Vc/edit#slide=id.g32df86d3f71_0_117

🚀 BUZZCUT

📍 Frontend: Netlify Deployment: https://sensational-biscotti-5f8579.netlify.app/

📍 Backend: Render Deployment: https://dashboard.render.com/web/srv-cur6fcpopnds739q7530/logs

📌 Descripción del Proyecto
BUZZCUT es una plataforma donde los usuarios pueden compartir y colaborar en productos relacionados con la música. A través de esta aplicación, los usuarios pueden registrarse, iniciar sesión, realizar publicaciones y visualizar productos compartidos.

🛠️ Tecnologías Utilizadas
Frontend: React (Vite) + React Bootstrap
Backend: Node.js + Express.js
Base de Datos: PostgreSQL (Railway)
Autenticación: JSON Web Tokens (JWT)
Despliegue:
Frontend: Netlify
Backend: Render
Base de Datos: Railway PostgreSQL

🔄 Cómo se Entrelaza el Proyecto: está dividido en tres partes principales:

1️⃣ Frontend (React - Vite)
Permite a los usuarios registrarse, iniciar sesión y visualizar productos.
Se comunica con el backend a través de fetch() llamando a las rutas del servidor.
La interfaz está construida con React Bootstrap para una mejor experiencia de usuario.

2️⃣ Backend (Node.js - Express)
Proporciona una API REST con rutas para usuarios, compras y colaboraciones.
Implementa JWT para autenticación y protege rutas privadas con verificarToken.
Se conecta con PostgreSQL mediante pg (node-postgres).

3️⃣ Base de Datos (PostgreSQL - Railway)
Gestiona la información de usuarios, productos, compras y colaboraciones.
Contiene claves foráneas para relacionar usuarios con sus colaboraciones y compras.
La conexión al backend se configura con DATABASE_URL.
