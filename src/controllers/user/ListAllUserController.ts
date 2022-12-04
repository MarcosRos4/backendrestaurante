import { Request, Response } from 'express';
import { ListAllUserService } from '../../services/user/ListAllUserService';

class ListAllUserController {
    async handle(req:Request, res: Response) {

    const listAllUser = new ListAllUserService();
    const user = await listAllUser.execute();

    return res.json(user);
    }
}

export { ListAllUserController }