import { MigrationInterface, QueryRunner } from "typeorm";

export class First1748173112821 implements MigrationInterface {
    name = 'First1748173112821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ratings" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "from" character varying NOT NULL, "to" character varying NOT NULL, "emotion" smallint NOT NULL, "post_id" integer, CONSTRAINT "PK_0f31425b073219379545ad68ed9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "text" character varying NOT NULL, "photo_id" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "telegram_id" character varying NOT NULL, "name" character varying NOT NULL, "username" character varying, "post_id" integer, CONSTRAINT "REL_15b1a774299a16118cef2aabac" UNIQUE ("post_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_f1960558bda55a4df3e0a6892b7" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_15b1a774299a16118cef2aabac4" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_15b1a774299a16118cef2aabac4"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_f1960558bda55a4df3e0a6892b7"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "ratings"`);
    }

}
