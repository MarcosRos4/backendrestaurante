import prismaClient from '../../prisma';


interface ComandaRequest {
    comandaid: number;
    mesa: string;
    status: string;    
}

class UpdateComandaService {
    async execute({ comandaid, mesa, status}: ComandaRequest) {
        
        const comandas = await prismaClient.comandas.update({
            where:{
                comandaid:comandaid
            },
            data:{
                status:status                
            }
        });
        console.log("Comanda "+comandaid+" da mesa "+mesa+" foi atualizada");
        return comandas;
    }
}
export { UpdateComandaService }