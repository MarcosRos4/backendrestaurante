import { Request, Response } from 'express';
import { ListExactUserService } from '../../services/user/ListExactUserService';

class ListExactUserController {
    async handle(req:Request, res: Response) {

    const userid = req.params.userid
    
    }
}

export { ListExactUserController }