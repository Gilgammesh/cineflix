// Importamos las librerias de mongoose
import { Schema, model } from "mongoose";

// Definir el Esquema
const schema = new Schema(
  {
    nombres: String,
    descripcion: String,
  },
  {
    collection: "genero",
    timestamps: true,
  }
);

// Exportamos el modelo y schema
export default model("genero", schema);
