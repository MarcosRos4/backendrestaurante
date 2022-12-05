
import prismaClient from '../../prisma';


interface ItemRequest {
    iditem: number;
    comandaid: number;
    produtoid: number;
    quantidade: number
    
}
class UpdateItemService {
    async execute({ iditem, comandaid, produtoid, quantidade  }: ItemRequest) {
        
        const Items = await prismaClient.itens.update({
            where:{
                iditem:iditem
            },
            data:{
                comandaid:comandaid,
                produtoid:produtoid,
                quantidade:quantidade
                
            }
        });
        console.log("Item foi atualizado");
        return Items;
    }
}
export { UpdateItemService }