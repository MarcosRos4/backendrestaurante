import { Request, Response } from 'express';
import { ListAllItemService } from '../../services/item/ListAllItemService';

class ListAllItemController {
    async handle(req:Request, res: Response) {

    const listAllItem = new ListAllItemService();
    const item = await listAllItem.execute();

    return res.json(item);
    }
}

export { ListAllItemController }