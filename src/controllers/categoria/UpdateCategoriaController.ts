import { Request, Response } from "express";
import { UpdateCategoriaService } from '../../services/categoria/UpdateCategoriaService';

class UpdateCategoriaController {
    async handle(req: Request, res: Response) {
        const { categoriaid, nomecategoria, alteracao} = req.body;
        const updateCategoriaService = new UpdateCategoriaService();
        const Categoria = await updateCategoriaService.execute({ categoriaid, nomecategoria, alteracao});
        return res.json(Categoria);
    }
}

export { UpdateCategoriaController }