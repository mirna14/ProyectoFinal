// Importando Mongoose
import mongoose from 'mongoose';
// Desestructurando un generador de Schemas de mongoose
const { Schema } = mongoose;
// Creando el esquema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  curp: {
    type: String,
    required: true,
  },
  rfc: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
});
// Exportando la compilacon de ProjectSchema
// en un modelo de mongoose
export default mongoose.model('project', ProjectSchema);
