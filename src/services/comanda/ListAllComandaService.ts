import prismaClient from '../../prisma';


class ListAllComandaService {
    async execute() {
        const allComanda = await prismaClient.comandas.findMany()
        console.log("Comandas  acessados")
        return allComanda;
    }
}

export { ListAllComandaService }