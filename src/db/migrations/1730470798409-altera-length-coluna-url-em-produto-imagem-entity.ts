import { MigrationInterface, QueryRunner } from "typeorm";

export class AlteraLengthColunaUrlEmProdutoImagemEntity1730470798409 implements MigrationInterface {
    name = 'AlteraLengthColunaUrlEmProdutoImagemEntity1730470798409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto_imagens" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "produto_imagens" ADD "url" character varying(600) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto_imagens" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "produto_imagens" ADD "url" character varying(500) NOT NULL`);
    }

}
