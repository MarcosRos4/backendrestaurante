import { Request, Response } from "express";
import { CreateCategoriaService } from '../../services/categoria/CreateCategoriaService';

class CreateCategoriaController {
    async handle(req: Request, res: Response) {
        const { ncategoria} = req.body;
        const createCategoriaService = new CreateCategoriaService();
        const categoria = await createCategoriaService.execute({ ncategoria});
        return res.json(categoria);
    }
}

export { CreateCategoriaController }