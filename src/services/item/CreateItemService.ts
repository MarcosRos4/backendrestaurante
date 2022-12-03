import prismaClient from '../../prisma';
interface ItemRequest {
    quantidade: number;
    comandaid: number;
    produtoid: number;
    
}
class CreateItemService {
    async execute({ quantidade, comandaid, produtoid}: ItemRequest) {
        
        const itens = await prismaClient.itens.create({
            data:{
                quantidade:quantidade,
                comandaid:comandaid,
                produtoid:produtoid
            }
        });
        console.log("Item foi cadastrado");
        return itens;
    }
}
export { CreateItemService }