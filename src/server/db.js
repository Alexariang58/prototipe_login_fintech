import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jobale:6wwoRPaLWm0BtfRN@cluster0.yiobe.mongodb.net/fintech?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Conexión exitosa a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Termina la aplicación si no se puede conectar
  }
};

export default connectDB;
