import { Request, Response } from "express";
import { DeleteComandaService } from '../../services/comanda/DeleteComandaService';

class DeleteComandaController {
    async handle(req: Request, res: Response) {
        const { comandaid } = req.body;
        const deleteComandaService = new DeleteComandaService();
        const comanda = await deleteComandaService.execute({comandaid});
        return res.json(comanda);
    }
}

export { DeleteComandaController }