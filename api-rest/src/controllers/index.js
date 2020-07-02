// Importar los modelos
import Usuario from "../database/models/usuario";

// Definimos las funciones de los servicios

// Crear nuevo usuario
export const crearUsuario = async (request, response) => {
  const body = request.body;
  try {
    const newUsuario = new Usuario(body);
    await newUsuario.save();
    response.send("El usuario fue creado exitosamente");
  } catch (error) {
    console.error(error);
    response.send("No se pudo crear el usuario");
  }
};

// Obtener datos de un usuario especifico
export const obtenerUsuario = async (request, response) => {
  const { _id } = request.params;
  try {
    const usuario = await Usuario.findOne({ _id: _id });
    response.send(usuario);
  } catch (error) {
    console.error(error);
    response.send(null);
  }
};

// Obtener la lista de todos los usuarios
export const obtenerUsuarios = async (request, response) => {
  try {
    const usuarios = await Usuario.find();
    response.send(usuarios);
  } catch (error) {
    console.error(error);
    response.send(null);
  }
};
