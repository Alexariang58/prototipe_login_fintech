import express from 'express';
import cors from 'cors';
import { hash, compare } from 'bcrypt';
import connectDB from './db.js'; // Importa la función connectDB
import User from './models/user.js'; // Importa el modelo User

const app = express();

// Conectar a la base de datos
connectDB();

app.use(express.json());
app.use(cors());

// Ruta de registro
app.post('/register', async (req, res) => {
  console.log('INFORACIÓN RECIBIDA', req.body);
  
  try {
    const { nombre, correo, movil, password } = req.body; // Obtener los datos del formulario de registro

    // Verificar si el correo ya está registrado
    const existingUser = await User.findOne({ email: correo }); // Cambiar a 'email'
    if (existingUser) {
      return res.status(400).send('Este correo ya está registrado');
    }

    // Encriptar la contraseña
    const hashedPassword = await hash(password, 10);

    // Crear el nuevo usuario
    const user = new User({
      username: nombre, // Cambiar a 'username'
      email: correo,    // Cambiar a 'email'
      mobile: movil,    // Cambiar a 'mobile'
      password: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    await user.save();
    res.status(201).send('Usuario registrado exitosamente');
  } catch (error) {
    console.error(error); // Log del error
    res.status(400).send('Error al registrar usuario: ' + error.message);
  }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
  try {
    const { correo, password } = req.body; // Obtener los datos enviados desde el cliente

    // Buscar el usuario por correo electrónico
    const user = await User.findOne({ email: correo }); // Cambiar a 'email'
    if (!user) {
      return res.status(400).send('Credenciales inválidas');
    }

    // Comparar la contraseña
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Credenciales inválidas');
    }

    res.status(200).send({ message: 'Inicio de sesión exitoso', username: user.username }); // Devuelve el nombre de usuario
  } catch (error) {
    console.error(error); // Log del error
    res.status(400).send('Error al iniciar sesión: ' + error.message);
  }
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
