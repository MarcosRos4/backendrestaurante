import prismaClient from '../../prisma';


class ListallProdutoService {
    async execute() {
        const allProduto = await prismaClient.produtos.findMany()
        console.log("Produtos acessados")
        return allProduto;
    }
}

export { ListallProdutoService }