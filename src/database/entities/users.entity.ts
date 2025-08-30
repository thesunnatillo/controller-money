import { Column, Entity, OneToMany } from "typeorm";
import { GeneralEntity } from "../../utils/entity/base.entity";
import { WalletsEntity } from "./wallets.entity";

@Entity({ name: "users", schema: "cash" })
export class UsersEntity extends GeneralEntity {

    @Column("bigint", { name: "telegram_id", unique: true, nullable: false })
    telegramId: string;

    @Column("varchar", { name: "name", nullable: false })
    name: string;

    @Column("varchar", { name: "username", nullable: true })
    username: string;

    @OneToMany(() => WalletsEntity, wallet => wallet.user)
    wallets: WalletsEntity[];

}