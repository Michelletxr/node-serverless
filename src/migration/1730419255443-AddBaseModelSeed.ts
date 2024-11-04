import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBaseModelSeed1730419255443 implements MigrationInterface {
    name = 'AddBaseModelSeed1730419255443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_model" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_model" DROP COLUMN "description"`);
    }

}
