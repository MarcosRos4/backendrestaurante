import { Request, Response } from 'express';
import { ListExactProdutoService } from '../../services/produto/ListExactProdutoService';

class ListExactProdutoController {
    async handle(req: Request, res: Response) {
        const { produtoid} = req.body;
        const listExactProduto = new ListExactProdutoService();
        const produto = await listExactProduto.execute({ produtoid });

        return res.json(produto);
    }
}

export { ListExactProdutoController }