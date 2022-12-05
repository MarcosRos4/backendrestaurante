import prismaClient from '../../prisma';


class ListAllCategoriaService {
    async execute() {
        const allCategoria = await prismaClient.categorias.findMany()
        console.log("Categorias  acessados")
        return allCategoria;
    }
}

export { ListAllCategoriaService }