import prismaClient from '../../prisma';

interface ProdutoRequest {
    produtoid: number;

}
class ListExactProdutoService {
    async execute({ produtoid }: ProdutoRequest) {
        const ExactProduto = await prismaClient.produtos.findUnique({
            where: {
                produtoid:produtoid
            }
        })
        return ExactProduto;
    }
}

export { ListExactProdutoService }