import prismaClient from '../../prisma';
interface CategoriaRequest {
    categoriaid: number;
    
}
class DeleteCategoriaService {
    async execute({ categoriaid}: CategoriaRequest) {
        
        const categoria = await prismaClient.categorias.delete({
            where:{
                categoriaid:categoriaid
            }
        });
        console.log("Categoria "+categoriaid +" foi D E L E T A D O");
        return categoria
    }
}
export { DeleteCategoriaService }