import prismaClient from '../../prisma';


class ListExactUserService {
    async execute({ userid }) {
        const ExactUser = await prismaClient.users.findFirst({"userid":12})
        console.log("Usuario "+userid+" acessado")
        return ExactUser;
    }
}

export { ListExactUserService }