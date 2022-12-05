import { Request, Response } from "express";
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { userid, nmuser, senha, perfil, alteracao } = req.body;
        const updateUserService = new UpdateUserService();
        const User = await updateUserService.execute({userid, nmuser, senha, perfil, alteracao });
        return res.json(User);
    }
}

export { UpdateUserController }