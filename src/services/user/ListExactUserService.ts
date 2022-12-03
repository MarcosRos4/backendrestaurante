import prismaClient from '../../prisma';

interface UserRequest {
    userid: number;

}
class ListExactUserService {
    async execute({ userid }: UserRequest) {
        const ExactUser = await prismaClient.users.findUnique({
            where: {
                userid:userid
            }
        })
        return ExactUser;
    }
}

export { ListExactUserService }