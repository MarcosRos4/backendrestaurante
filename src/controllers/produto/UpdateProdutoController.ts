import { Request, Response } from "express";
import { UpdateProdutoService } from '../../services/produto/UpdateProdutoService';

class UpdateProdutoController {
    async handle(req: Request, res: Response) {
        const { produtoid, categoria, nproduto, preco, descricao, alteracao } = req.body;
        const updateProdutoService = new UpdateProdutoService();
        const produto = await updateProdutoService.execute({ produtoid, categoria, nproduto, preco, descricao, alteracao });
        return res.json(produto);
    }
}

export { UpdateProdutoController }