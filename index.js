import express from 'express'
import mongoose from 'mongoose';
import routerdepartamento from './src/routes/departamento.js';


const app = express()
mongoose.connect('mongodb://localhost:27017/departamento', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json());
 app.use('/departamento', routerdepartamento)

 const port = 3001
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});