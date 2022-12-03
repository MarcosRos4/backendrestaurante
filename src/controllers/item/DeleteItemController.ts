import { Request, Response } from "express";
import { DeleteItemService } from '../../services/item/DeleteItemService';

class DeleteItemController {
    async handle(req: Request, res: Response) {
        const { iditem } = req.body;
        const deleteItemService = new DeleteItemService();
        const item = await deleteItemService.execute({iditem});
        return res.json(item);
    }
}

export { DeleteItemController }