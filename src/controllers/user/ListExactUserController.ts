import { Request, Response } from 'express';
import { ListExactUserService } from '../../services/user/ListExactUserService';

class ListExactUserController {
    async handle(req: Request, res: Response) {
        const { userid} = req.body;
        const listExactUser = new ListExactUserService();
        const user = await listExactUser.execute({ userid });

        return res.json(user);
    }
}

export { ListExactUserController }