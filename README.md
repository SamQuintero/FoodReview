Proyecto de Reviews de Restaurantes
Una aplicación web full-stack desarrollada con Node.js, TypeScript y MongoDB que permite a los usuarios registrarse, iniciar sesión y publicar reseñas de restaurantes. El proyecto está construido siguiendo la arquitectura MVC (Modelo-Vista-Controlador) .

Características Principales
- Autenticación de Usuarios: Sistema completo de registro e inicio de sesión.

- Seguridad: Contraseñas encriptadas de forma segura en la base de datos usando bcrypt.

- Gestión de Sesiones: Sesiones persistentes manejadas con express-session.

- Listado de Restaurantes: Visualización de todos los restaurantes disponibles.

- Páginas de Detalle: Cada restaurante tiene su propia página con detalles y la lista de reviews.

- Sistema de Reviews: Los usuarios autenticados pueden publicar una reseña (calificación y comentario) por restaurante.

- Regla de Negocio: Un usuario solo puede publicar una única review por restaurante, implementada a nivel de base de datos.

Stack Tecnológico
Backend: Node.js, Express, TypeScript

Base de Datos: MongoDB con Mongoose como ODM (Object Data Modeling).

Motor de Plantillas (Frontend): Handlebars para renderizar las vistas del lado del servidor.

Autenticación: bcrypt para el hasheo de contraseñas.

Entorno de Desarrollo: ts-node-dev para recarga automática del servidor.

Prerrequisitos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (versión 18 o superior recomendada)

- MongoDB (puedes instalarlo localmente o usar una instancia gratuita en MongoDB Atlas)

- npm o yarn

Instalación y Puesta en Marcha
Sigue estos pasos para tener una copia del proyecto corriendo localmente.

Clona el repositorio
'''Bash
git clone https://github.com/tu-usuario/proyecto-reviews.git
cd proyecto-reviews
'''

Instala las dependencias del proyecto
'''Bash

npm install
'''

Configura las variables de entorno
Crea un archivo llamado .env en la raíz del proyecto. Puedes copiar el contenido de .env.example si lo tienes, o usar la siguiente plantilla:

Fragmento de código

# .env

# Cadena de conexión a tu base de datos MongoDB
MONGODB_URI="mongodb://127.0.0.1:27017/reviewsDB"

# Una clave secreta para la gestión de sesiones
SESSION_SECRET="un_secreto_muy_secreto_y_largo_para_produccion_lalalalala"

Inicia el servidor en modo de desarrollo
Este comando compilará el código TypeScript y reiniciará el servidor automáticamente cada vez que hagas un cambio.

Bash'''
npm run dev
'''

Ahora, La aplicación estará corriendo en http://localhost:3000.
