import { Request, Response } from 'express';
import { ListExactItemService } from '../../services/item/ListExactItemService';

class ListExactItemController {
    async handle(req: Request, res: Response) {
        const { iditem} = req.body;
        const listExactItem = new ListExactItemService();
        const item = await listExactItem.execute({ iditem });

        return res.json(item);
    }
}

export { ListExactItemController }