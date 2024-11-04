import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBaseModelSeed1730392241462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "base_model" ("name") 
            VALUES ('Modelo Inicial');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "base_model" WHERE "name" = 'Modelo Inicial';
        `);
    }

}
