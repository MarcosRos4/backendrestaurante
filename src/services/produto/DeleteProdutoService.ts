import prismaClient from '../../prisma';
interface ProdutoRequest {
    produtoid: number;
    
}
class DeleteProdutoService {
    async execute({ produtoid}: ProdutoRequest) {
        
        const produtos = await prismaClient.produtos.delete({
            where:{
                produtoid:produtoid
            }
        });
        console.log("Produto "+ produtoid +" foi D E L E T A D O");
        return produtos;
    }
}
export { DeleteProdutoService }