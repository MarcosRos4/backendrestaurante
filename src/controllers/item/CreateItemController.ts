import { Request, response, Response } from "express";
import { CreateItemService } from '../../services/item/CreateItemService';

class CreateItemController {
    async handle(req: Request, res: Response) {
        const { quantidade, comandaid, produtoid} = req.body;
        const createItemService = new CreateItemService();
        const item = await createItemService.execute({ quantidade, comandaid, produtoid});
        return res.json(item);
    }
}

export { CreateItemController }