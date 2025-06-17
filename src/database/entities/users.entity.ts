import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { GeneralEntity } from "../../utils/entity/base.entity";

@Entity({ name: "users", schema: "public" })
export class UsersEntity extends GeneralEntity {

    @Column("bigint", { name: "telegram_id" })
    telegramId: number;

    @Column("varchar", { name: "name", nullable: true })
    name: string;

    @Column("varchar", { name: "username", nullable: true })
    username: string;

}