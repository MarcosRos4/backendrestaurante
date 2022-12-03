import prismaClient from '../../prisma';
interface UserRequest {
    userid: number;
    
}
class DeleteUserService {
    async execute({ userid}: UserRequest) {
        
        const users = await prismaClient.users.delete({
            where:{
                userid:userid
            }
        });
        console.log("Usuario "+ userid +" foi D E L E T A D O");
        return users;
    }
}
export { DeleteUserService }