import { Router} from "express";
import { CreateCategoriaController } from "./controllers/categoria/CreateCategoriaController";
import { CreateComandaController } from "./controllers/comanda/CreateComandaController";
import { CreateItemController } from "./controllers/item/CreateItemController";
import { CreateProdutoController } from "./controllers/produto/CreateProdutoController";
import { UpdateProdutoController } from "./controllers/produto/UpdateProdutoController";
import { DeleteProdutoController } from "./controllers/produto/DeleteProdutoController";
import {CreateUserController} from'./controllers/user/CreateUserController';
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { DeleteItemController } from "./controllers/item/DeleteItemController";
import { DeleteComandaController } from "./controllers/comanda/DeleteComandaController";
import { UpdateComandaController } from "./controllers/comanda/UpdateComandaController";
import { DeleteCategoriaController } from "./controllers/categoria/DeleteCategoriaController";
import { ListExactUserController } from "./controllers/user/ListExactUserController";
import { ListExactProdutoController } from "./controllers/produto/ListExactProdutoController";
import { ListExactItemController } from "./controllers/item/ListExactItemController";
import { ListExactComandaController } from "./controllers/comanda/ListExactComandaController";
const router = Router();

//Rotas USER ------------
router.post(   '/users',   new CreateUserController(       ).handle)   // criar
router.delete( '/users',   new DeleteUserController(       ).handle)   // apagar
router.get(    '/users',   new ListExactUserController(    ).handle)   // procurar

//ROTAS PRODUTOS
router.post(   '/produtos',new CreateProdutoController(    ).handle)   // criar
router.put(    '/produtos',new UpdateProdutoController(    ).handle)   // atualizar
router.delete( '/produtos',new DeleteProdutoController(    ).handle)   // apagar
router.get(    '/produtos',new ListExactProdutoController( ).handle)   // procurar

//ROTAS ITENS
router.post(   '/itens',   new CreateItemController(       ).handle)   // criar          
router.delete( '/itens',   new DeleteItemController(       ).handle)   // apagar  
router.get(    '/itens',   new ListExactItemController(    ).handle)   // procurar   

//ROTAS COMANDAS
router.post(  '/comandas', new CreateComandaController(    ).handle)   // criar
router.put(   '/comandas', new UpdateComandaController(    ).handle)   // atualizar
router.delete('/comandas', new DeleteComandaController(    ).handle)   // apagar
router.get(   '/comandas', new ListExactComandaController( ).handle)   // procurar

//ROTAS CATEGORIAS
router.post(  '/categorias',new CreateCategoriaController( ).handle)   // criar 
router.delete('/categorias',new DeleteCategoriaController( ).handle)   // apagar

export { router };
