import { Request, Response } from 'express';
import { ListAllComandaService } from '../../services/comanda/ListAllComandaService';

class ListAllComandaController {
    async handle(req:Request, res: Response) {

    const listAllComanda = new ListAllComandaService();
    const comanda = await listAllComanda.execute();

    return res.json(comanda);
    }
}

export { ListAllComandaController }