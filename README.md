# prototipe_login_fintech
Prototipo Fintech
El prototipo incialmente se diseño como una aplicación de escritorio a futuro se pienza establecer por medio de 
Estructura del proyecto
+-------------------+
|    Prototipo      |
|      Login        |
+-------------------+
          |
          |
  +-------+--------+
  |                |
Backend        Frontend
  |                |
  |                |
+---+---+     +----+----+
| Express|     |  HTML/CSS|
| Mongoose|    | JavaScript|
+-------+------+-----------+
          |
          |
     +----+-----+
     |   MongoDB  |
     +-----------+
Se utilizo:
Electron JS: Electron es un framework que permite crear aplicaciones de escritorio utilizando tecnologías web como HTML, CSS y JavaScript. En tu proyecto, se utiliza para empaquetar la aplicación y crear una versión de escritorio del login
Electron builder: herramienta que facilita la creación de instaladores y empaquetados de aplicaciones de escritorio desarrolladas con Electron
Axios: para el manejo de las peticiones que comunican el front con el backend
Bycript: esta librería permite encriptar la contraseña para mayor seguridad.
Cors: Cross-Origin Resource Sharing es un mecanismo que permite controlar las políticas de acceso entre recursos que están en distintos dominios. La librería cors facilita la configuración de estas políticas en el servidor Express para permitir solicitudes desde orígenes específicos.
Express: es un framework de nodeJS que se utilizó para crear el servidor backend que maneja las solicitudes de registro e inicio de sesión, proporcionando una estructura básica para definir rutas y manejar la lógica del servidor
Mongoose: Mongoose es una librería que permite modelar objetos en MongoDB, permitió gestionar la conexión a la base de datos.
Metodología implementada:
Se utilizo la metodología scrum, con sprints y reuniones cortas durante esta fase el la que se desarrollo el prototipo del módulo de resgitro e incio de sesión, garantizando la comunicación constante con el equipo y solucionando los bugs reportados en el momento.
Diagrama de flujo:
- Registro:
+-----------------------+
|   Inicio del Registro |
+-----------------------+
          |
          v
+-----------------------+
|  Ingresar Información |
+-----------------------+
          |
          v
+-----------------------+
|   Validar Datos       |
+-----------------------+
          |
          |
  +-------+--------+
  |                |
  |   Datos Válidos|
  |                |
  v                v
+-----------------+   +----------------------+
|  Guardar en DB  |   |  Mostrar Error       |
+-----------------+   +----------------------+
          |
          v
+-----------------------+
|   Confirmación        |
+-----------------------+
  - Inició de sesión:
  - +------------------------+
|   Inicio del Login     |
+------------------------+
          |
          v
+------------------------+
|  Ingresar Credenciales |
+------------------------+
          |
          v
+------------------------+
|   Validar Credenciales  |
+------------------------+
          |
          |
  +-------+--------+
  |                |
  |   Credenciales Válidos  |
  |                |
  v                v
+-------------------+   +-------------------+
|   Acceder a la App |   |  Mostrar Error    |
+-------------------+   +-------------------+


Base de datos:
 +------------------+
|   MongoDB        |
+------------------+
          |
          |
  +-------+--------+
  |                |
+---+---+     +----+----+
| Users |     |  Logs   |
+-------+------+---------+
|   |   |
|   |   |
|   |   +-----------------+
|   |                     |
|   +--+   +----------+  |
|      |   |   Data   |  |
|      +---+   Token  |  |
|          |   |      |  |
|          +---+------+



