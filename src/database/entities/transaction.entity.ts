import { Column, Entity, ManyToOne } from "typeorm";
import { WalletsEntity } from "./wallets.entity";
import { TransactionsTypeEnum } from "../../utils/enums/enums";
import { GeneralEntity } from "../../utils/entity/base.entity";

@Entity({ name: "transactions" })
export class TransactionsEntity extends GeneralEntity {

  @Column({ type: "enum", enum: TransactionsTypeEnum })
  type: TransactionsTypeEnum;

  @Column("decimal", { precision: 12, scale: 2 })
  amount: string;

  @Column("varchar", { length: 255, nullable: true })
  description: string;

  @ManyToOne(() => WalletsEntity, (wallet) => wallet.transactions, { onDelete: "CASCADE" })
  wallet: WalletsEntity;

}
