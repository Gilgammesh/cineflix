// Importamos la librerias de rutas
import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuario,
  obtenerUsuarios,
} from "../controllers/index";

// Inicializamos router
const router = Router();

// ****** Definimos las rutas (get, post, put, delete) ***** //

// Ruta registrar el usuario
router.post("/createUser", crearUsuario);
// Ruta obtener usuario
router.get("/getUser/:_id", obtenerUsuario);
// Ruta obtener usuarios
router.get("/getUsers", obtenerUsuarios);

/*
// Ruta autenticar el usuario
router.post("/authUser", autenticarUsuario);
// Ruta delete usuario
router.delete("/delUser", borrarUsuario);
// Ruta actualizar usuario
router.put("/updateUser", actualizarUsuario);

// Ruta registrar pelicula
router.post("/createMovie", crearPelicula);
// Ruta obtener pelicula
router.get("/getMovie", obtenerPelicula);
// Ruta delete pelicula
router.delete("/delMovie", borrarPelicula);
// Ruta actualizar pelicula
router.put("/updateMovie", actualizarPelicula);

// Ruta registrar genero
router.post("/createGender", crearGenero);
// Ruta obtener genero
router.get("/getGender", obtenerGenero);
// Ruta delete genero
router.delete("/delGender", borrarGenero);
// Ruta actualizar genero
router.put("/updateGender", actualizarGenero);
*/

export default router;
