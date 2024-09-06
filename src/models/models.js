import mongoose from "mongoose";

const departamentoSchema = mongoose.Schema( 
    {
    nombre: {
      type:String,
      trim: true,
      require:true
    },
  
      
    }, {timestamps:true}    
  );
    
  const departamentoModel = mongoose.model('departamento', departamentoSchema)
  
export default departamentoModel
    