import { Request, Response } from 'express';
import { ListAllCategoriaService } from '../../services/categoria/ListAllCategoriaService';

class ListAllCategoriaController {
    async handle(req:Request, res: Response) {

    const listAllCategoria = new ListAllCategoriaService();
    const Categoria = await listAllCategoria.execute();

    return res.json(Categoria);
    }
}

export { ListAllCategoriaController }