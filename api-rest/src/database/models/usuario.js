// Importamos las librerias de mongoose
import { Schema, model } from "mongoose";

// Definir el Esquema
const schema = new Schema(
  {
    nombres: String,
    apellidos: String,
    email: String,
    password: String,
  },
  {
    collection: "usuario",
    timestamps: true,
  }
);

// Exportamos el modelo y schema
export default model("usuario", schema);
