import { Request, Response } from 'express';
import { ListallProdutoService } from '../../services/produto/ListallProdutoService';

class ListallProdutoController {
    async handle(req: Request, res: Response) {
        const listallProduto = new ListallProdutoService();
        const produto = await listallProduto.execute();

        return res.json(produto);
    }
}

export { ListallProdutoController }