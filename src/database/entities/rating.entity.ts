import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { GeneralEntity } from "../../utils/entity/base.entity";
import { PostsEntity } from "./posts.entity";

@Entity({ name: "ratings", schema: "public" })
export class RatingsEntity extends GeneralEntity {

    @Column("varchar", { name: "from", nullable: false })
    from: string;

    @Column("varchar", { name: "to", nullable: false })
    to: string;

    @Column("smallint", { name: "emotion", nullable: false })
    emotion: number;

    @ManyToOne(() => PostsEntity, (post) => post.ratings)
    @JoinColumn({
        name: "post_id"
    })
    post: PostsEntity;

}