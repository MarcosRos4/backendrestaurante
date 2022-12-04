import prismaClient from '../../prisma';


class ListAllItemService {
    async execute() {
        const allItem = await prismaClient.itens.findMany()
        console.log("Itens acessados")
        return allItem;
    }
}

export { ListAllItemService }