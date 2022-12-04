import prismaClient from '../../prisma';

interface ComandaRequest {
    comandaid: number;

}
class ListExactComandaService {
    async execute({ comandaid }: ComandaRequest) {
        const ExactComanda = await prismaClient.comandas.findUnique({
            where: {
               comandaid:comandaid
            }
        })
        console.log("Comanda "+comandaid+" acessado")
        return ExactComanda;
    }
}

export { ListExactComandaService }