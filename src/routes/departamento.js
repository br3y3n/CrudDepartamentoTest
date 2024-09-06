import { Router } from 'express'
import { createDepartamento, getAllDepartamentos } from '../controllers/departamentos.js'
 


const routerdepartamento= Router()


routerdepartamento.post('/', createDepartamento )
routerdepartamento.get('/',getAllDepartamentos)


export default routerdepartamento