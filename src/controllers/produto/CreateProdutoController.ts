import { Request, response, Response } from "express";
import { CreateProdutoService } from '../../services/produto/CreateProdutoService';

class CreateProdutoController {
    async handle(req: Request, res: Response) {
        const { nproduto, preco, descricao, categoria } = req.body;
        const createProdutoService = new CreateProdutoService();
        const produto = await createProdutoService.execute({ nproduto, preco, descricao, categoria });
        return res.json(produto);
    }
}

export { CreateProdutoController }