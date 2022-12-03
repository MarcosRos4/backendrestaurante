import prismaClient from '../../prisma';
interface ItemRequest {
    iditem: number;
    
}
class DeleteItemService {
    async execute({ iditem}: ItemRequest) {
        
        const item = await prismaClient.itens.delete({
            where:{
                iditem:iditem
            }
        });
        console.log("Item "+iditem +" foi D E L E T A D O");
        return item
    }
}
export { DeleteItemService }