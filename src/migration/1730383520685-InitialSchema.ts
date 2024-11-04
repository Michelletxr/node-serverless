import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1730383520685 implements MigrationInterface {
    name = 'InitialSchema1730383520685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "base_model" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6858b0bfee6d486b76e323b3e9b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "base_model"`);
    }

}
