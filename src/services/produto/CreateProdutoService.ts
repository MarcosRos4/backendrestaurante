import { Decimal } from '@prisma/client/runtime';
import prismaClient from '../../prisma';
interface ProdutoRequest {
    nproduto: string;
    preco: Decimal;
    descricao: string;
    categoria: number;
}
class CreateProdutoService {
    async execute({ nproduto, preco, descricao, categoria }: ProdutoRequest) {
        
        const produtos = await prismaClient.produtos.create({
            data:{
                nomeproduto:nproduto,
                preco:preco,
                descricaoproduto:descricao,
                categoriaid:categoria
            }
        });
        console.log("Produto foi cadastrado");
        return produtos;
    }
}
export { CreateProdutoService }