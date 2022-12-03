import prismaClient from '../../prisma';
interface UserRequest {
    nmuser: string;
    senha: string;
    perfil: string;
}
class CreateUserService {
    async execute({ nmuser, senha, perfil }: UserRequest) {
        
        const users = await prismaClient.users.create({
            data:{
                nomeuser:nmuser,
                senha:senha,
                perfiluser:perfil,
            }
        });
        console.log("Usuario "+nmuser+" foi cadastrado");
        
        return users;
    }
}

export { CreateUserService }