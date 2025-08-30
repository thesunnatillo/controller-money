import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UsersEntity } from "./users.entity";
import { TransactionsEntity } from "./transaction.entity";
import { GeneralEntity } from "../../utils/entity/base.entity";

@Entity({ name: "wallets" })
export class WalletsEntity extends GeneralEntity {

    @Column("varchar", { name: "name", length: 20, nullable: false })
    name: string;

    @Column("varchar", { name: "description", length: 55, nullable: true })
    description: string;

    @Column("decimal", { name: "balance", precision: 12, scale: 2, default: 0 })
    balance: number;

    @ManyToOne(() => UsersEntity)
    @JoinColumn({
        name: "user_id",
        referencedColumnName: "id"
    })
    user: UsersEntity;

    @OneToMany(() => TransactionsEntity, transaction => transaction.wallet)
    transactions: TransactionsEntity[];

}