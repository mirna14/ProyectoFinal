// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere un nombre de proyecto'),
  apellidos: Yup.string().required('Se requieren los apellidos'),
  correo: Yup.string().required('Se correo'),
  curp: Yup.string().required('Se requieren CURP'),
  rfc: Yup.string().required('Se RFC'),
  contrasena: Yup.string().required('Se requieren la contrasena'),
});
// Creando el extractor de datos de la petición
const getProject = (req) => {
  // Extrayendo datos de la petición
  const { name, apellidos, correo, curp, rfc, contrasena } = req.body;
  // Regresando el objeto proyecto
  return {
    name,
    apellidos,
    correo,
    curp,
    rfc,
    contrasena,
  };
};
export default {
  projectSchema,
  getProject,
};
