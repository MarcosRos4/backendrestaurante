import { Request, Response } from 'express';
import { ListExactComandaService } from '../../services/comanda/ListExactComandaService';

class ListExactComandaController {
    async handle(req: Request, res: Response) {
        const { comandaid} = req.body;
        const listExactComanda = new ListExactComandaService();
        const comanda = await listExactComanda.execute({ comandaid });

        return res.json(comanda);
    }
}

export { ListExactComandaController }