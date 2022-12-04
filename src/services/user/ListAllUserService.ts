import prismaClient from '../../prisma';


class ListAllUserService {
    async execute() {
        const allUser = await prismaClient.users.findMany()
        console.log("Usuarios  acessados")
        return allUser;
    }
}

export { ListAllUserService }