import { Request, Response } from "express";
import { UpdateComandaService } from '../../services/comanda/UpdateComandaService';

class UpdateComandaController {
    async handle(req: Request, res: Response) {
        const { comandaid, mesa, status} = req.body;
        const updateComandaService = new UpdateComandaService();
        const comanda = await updateComandaService.execute({ comandaid, mesa, status});
        return res.json(comanda);
    }
}

export { UpdateComandaController }