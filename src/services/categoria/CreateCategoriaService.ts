import prismaClient from '../../prisma';
interface CategoriaRequest {
    ncategoria: string;  
}

class CreateCategoriaService {
    async execute({ ncategoria}: CategoriaRequest) {
        
        const categorias = await prismaClient.categorias.create({
            data:{
                nomecategoria:ncategoria
            }
        });
        console.log("Categoria foi cadastrado");
        return categorias;
    }
}
export { CreateCategoriaService }