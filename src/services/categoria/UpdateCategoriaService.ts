import prismaClient from '../../prisma';


interface CategoriaRequest {
    categoriaid: number;
    nomecategoria: string;
    alteracao: string;    
}

class UpdateCategoriaService {
    async execute({ categoriaid, nomecategoria, alteracao}: CategoriaRequest) {
        
        const Categorias = await prismaClient.categorias.update({
            where:{
                categoriaid:categoriaid
            },
            data:{
                nomecategoria: nomecategoria,
                alteracao:alteracao              
            }
        });
        console.log("Categoria "+nomecategoria+" foi atualizada");
        return Categorias;
    }
}
export { UpdateCategoriaService }