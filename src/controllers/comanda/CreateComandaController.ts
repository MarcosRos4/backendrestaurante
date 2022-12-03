import { Request, Response } from "express";
import { CreateComandaService } from '../../services/comanda/CreateComandaService';

class CreateComandaController {
    async handle(req: Request, res: Response) {
        const { mesa, status, userid} = req.body;
        const createComandaService = new CreateComandaService();
        const comanda = await createComandaService.execute({ mesa, status, userid});
        return res.json(comanda);
    }
}

export { CreateComandaController }