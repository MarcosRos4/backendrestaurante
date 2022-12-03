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
        return ExactComanda;
    }
}

export { ListExactComandaService }