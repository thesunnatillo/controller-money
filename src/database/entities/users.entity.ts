import { Column, Entity } from "typeorm";
import { GeneralEntity } from "../../utils/entity/base.entity";

@Entity({ name: "users", schema: "public" })
export class UsersEntity extends GeneralEntity {

    @Column("varchar", { name: "telegram_id" })
    telegramId: string;

    @Column("varchar", { name: "name" })
    name: string;

    @Column("varchar", { name: "username", nullable: true })
    username: string;

}