import { Decimal } from '@prisma/client/runtime';
import prismaClient from '../../prisma';


interface ProdutoRequest {
    produtoid: number;
    categoria: number;
    nproduto: string;
    preco: Decimal;
    descricao: string;
    alteracao: Date;
    
}
class UpdateProdutoService {
    async execute({ produtoid, nproduto, categoria, preco, descricao, alteracao }: ProdutoRequest) {
        
        const produtos = await prismaClient.produtos.update({
            where:{
                produtoid:produtoid
            },
            data:{
                nomeproduto:nproduto,
                categoriaid:categoria,
                preco:preco,
                descricaoproduto:descricao,
                alteracao:alteracao
                
            }
        });
        console.log("Produto foi atualizado");
        return produtos;
    }
}
export { UpdateProdutoService }