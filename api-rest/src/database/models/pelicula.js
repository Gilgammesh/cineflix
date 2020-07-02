// Importamos las librerias de mongoose
import { Schema, model } from "mongoose";

// Definir el Esquema
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema(
  {
    nombre: String,
    descripcion: String,
    url_img: String,
    url_video: String,
    genero: ObjectId,
  },
  {
    collection: "pelicula",
    timestamps: true,
  }
);

// Exportamos el modelo y schema
export default model("pelicula", schema);
