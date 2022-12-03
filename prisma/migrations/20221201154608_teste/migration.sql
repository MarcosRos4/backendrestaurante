-- CreateTable
CREATE TABLE "categorias" (
    "categoriaid" SERIAL NOT NULL,
    "nomecategoria" VARCHAR(50),
    "criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "alteracao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("categoriaid")
);

-- CreateTable
CREATE TABLE "comandas" (
    "comandaid" SERIAL NOT NULL,
    "mesa" CHAR(2),
    "status" VARCHAR(15),
    "userid" SERIAL NOT NULL,

    CONSTRAINT "comandas_pkey" PRIMARY KEY ("comandaid")
);

-- CreateTable
CREATE TABLE "itens" (
    "iditem" SERIAL NOT NULL,
    "quantidade" INTEGER,
    "comandaid" SERIAL NOT NULL,
    "produtoid" SERIAL NOT NULL,

    CONSTRAINT "itens_pkey" PRIMARY KEY ("iditem")
);

-- CreateTable
CREATE TABLE "produtos" (
    "produtoid" SERIAL NOT NULL,
    "categoriaid" SERIAL NOT NULL,
    "nomeproduto" VARCHAR(50),
    "preco" DECIMAL(7,2),
    "descricaoproduto" VARCHAR(150),
    "criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "alteracao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("produtoid")
);

-- CreateTable
CREATE TABLE "users" (
    "userid" SERIAL NOT NULL,
    "nomeuser" VARCHAR(50),
    "senha" VARCHAR(30),
    "perfiluser" CHAR(1) NOT NULL,
    "criacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "alteracao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- AddForeignKey
ALTER TABLE "comandas" ADD CONSTRAINT "fk_user" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "fk_comanda" FOREIGN KEY ("comandaid") REFERENCES "comandas"("comandaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "fk_produto" FOREIGN KEY ("produtoid") REFERENCES "produtos"("produtoid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "fk_categoria" FOREIGN KEY ("categoriaid") REFERENCES "categorias"("categoriaid") ON DELETE NO ACTION ON UPDATE NO ACTION;
