import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { GeneralEntity } from "../../utils/entity/base.entity";
import { PostsEntity } from "./posts.entity";

@Entity({ name: "users", schema: "public" })
export class UsersEntity extends GeneralEntity {

    @Column("varchar", { name: "telegram_id" })
    telegramId: string;

    @Column("varchar", { name: "name", nullable: true })
    name: string;

    @Column("varchar", { name: "username", nullable: true })
    username: string;

    @OneToOne(() => PostsEntity )
    @JoinColumn({
        name: "post_id"
    })
    post: PostsEntity;
}