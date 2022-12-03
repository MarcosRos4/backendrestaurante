import { Request, Response } from "express";
import { DeleteUserService } from '../../services/user/DeleteUserService';

class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { userid } = req.body;
        const deleteUserService = new DeleteUserService();
        const user = await deleteUserService.execute({userid});
        return res.json(user);
    }
}

export { DeleteUserController }