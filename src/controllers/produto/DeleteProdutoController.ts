import { Request, Response } from "express";
import { DeleteProdutoService } from '../../services/produto/DeleteProdutoService';

class DeleteProdutoController {
    async handle(req: Request, res: Response) {
        const { produtoid } = req.body;
        const deleteProdutoService = new DeleteProdutoService();
        const user = await deleteProdutoService.execute({produtoid});
        return res.json(user);
    }
}

export { DeleteProdutoController }