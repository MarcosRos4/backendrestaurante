import prismaClient from '../../prisma';

interface ItemRequest {
    iditem: number;

}
class ListExactItemService {
    async execute({ iditem }: ItemRequest) {
        const ExactItem = await prismaClient.itens.findUnique({
            where: {
               iditem:iditem
            }
        })
        console.log("Item "+iditem+" acessado")
        return ExactItem;
    }
}

export { ListExactItemService }