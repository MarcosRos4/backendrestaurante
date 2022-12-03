import prismaClient from '../../prisma';
interface ComandaRequest {
    mesa: string;
    status: string;
    userid: number;
    
}
class CreateComandaService {
    async execute({ mesa, status, userid}: ComandaRequest) {
        
        const comandas = await prismaClient.comandas.create({
            data:{
                mesa:mesa,
                status:status,
                userid:userid
            }
        });
        console.log("Comanda foi cadastrado");
        return comandas;
    }
}
export { CreateComandaService }