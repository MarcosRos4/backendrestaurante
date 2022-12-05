import prismaClient from '../../prisma';
interface UserRequest {
    userid: number;
    nmuser: string;
    senha: string;
    perfil:string;
    alteracao: Date;
    
}
class UpdateUserService {
    async execute({ userid, nmuser, senha, perfil, alteracao }: UserRequest) {
        
        const Users = await prismaClient.users.update({
            where:{
                userid:userid
            },
            data:{
                nomeuser:nmuser,
                senha:senha,
                perfiluser:perfil,            
                alteracao:alteracao
                
            }
        });
        console.log("User foi atualizado");
        return Users;
    }
}
export { UpdateUserService }