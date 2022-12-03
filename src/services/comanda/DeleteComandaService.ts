import prismaClient from '../../prisma';
interface ComandaRequest {
    comandaid: number;
    
}
class DeleteComandaService {
    async execute({ comandaid}: ComandaRequest) {
        
        const comanda = await prismaClient.comandas.delete({
            where:{
                comandaid:comandaid
            }
        });
        console.log("Comanda "+comandaid +" foi D E L E T A D O");
        return comanda
    }
}
export { DeleteComandaService }