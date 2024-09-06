import departamentoModel from "../models/models.js";
export const createDepartamento = async (req, res) => {
  console.log(req.body)
      const response = await departamentoModel.create({
        nombre: req.body.nombre,
      });
     
      return res.status(201).json({ response,msg:'departamento creado correctamente' });
    
  };


export const conteoDepartamentos = async(req, res)=>{
  try {
    const departamento = await departamentoModel.find();
    return res.status(200).json({numeroDepartamentos: departamento.length});

  } catch (error) {
    console.log(error)
  }
}
export const getAllDepartamentos = async (req, res) => {
  
    try {
      const departamento = await departamentoModel.find();
      return res.status(200).json({ departamento });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

