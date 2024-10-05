import mongoose from 'mongoose';

// Definir el esquema del usuario
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
});

// Crear el modelo basado en el esquema
const User = mongoose.model('User', UserSchema);

// Exportar el modelo del usuario
export default User;
