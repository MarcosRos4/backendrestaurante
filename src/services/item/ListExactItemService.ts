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
        return ExactItem;
    }
}

export { ListExactItemService }