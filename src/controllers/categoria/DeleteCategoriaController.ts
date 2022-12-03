import { Request, Response } from "express";
import { DeleteCategoriaService } from '../../services/categoria/DeleteCategoriaService';

class DeleteCategoriaController {
    async handle(req: Request, res: Response) {
        const { categoriaid } = req.body;
        const deleteCategoriaService = new DeleteCategoriaService();
        const categoria = await deleteCategoriaService.execute({categoriaid});
        return res.json(categoria);
    }
}

export { DeleteCategoriaController }