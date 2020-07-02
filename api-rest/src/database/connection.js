// Importar las librerias
import mongoose from "mongoose";

// Creamos la conexión a la base de datos
const connection = async () => {
  // Variables de la base de datos
  const host = "localhost";
  const port = 27017;
  const driver = "mongodb";
  const db = "cineflix";
  const user = "";
  const pass = "";
  const uri = `${driver}://${host}:${port}/${db}`;

  // Opciones de conexion
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: user,
    pass: pass,
  };

  // Intentar la conexion a la base de datos
  try {
    await mongoose.connect(uri, options);
    console.log("Conectado exitosamente a Mongo".green);
  } catch (error) {
    console.error(error);
  }
};

// Exportamos la funcion de conexión a la base de datos
export default connection;

