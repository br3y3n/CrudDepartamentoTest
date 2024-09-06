import { getAllDepartamentos } from "../controllers/departamentos.js";
import departamentoModel from "../models/models.js";

jest.mock("../models/models.js", () => ({
  find: jest.fn()
}));

describe('Departamento Controller', () => {
    it('devolverDepartamentos', async () => {
        const depaTest = [{ id: 1, nombre: 'nariño' }];
        
        departamentoModel.find.mockResolvedValue(depaTest);
        
        const req = {}; // Mock de la solicitud
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        
        await getAllDepartamentos(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ departamento: depaTest });
    });
});
