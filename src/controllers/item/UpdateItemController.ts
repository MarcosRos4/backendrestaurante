import { Request, Response } from "express";
import { UpdateItemService } from '../../services/item/UpdateItemService';

class UpdateItemController {
    async handle(req: Request, res: Response) {
        const { iditem, comandaid, produtoid, quantidade } = req.body;
        const updateItemService = new UpdateItemService();
        const Item = await updateItemService.execute({ iditem, comandaid, produtoid, quantidade });
        return res.json(Item);
    }
}

export { UpdateItemController }