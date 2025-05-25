import { Column, Entity, OneToMany } from "typeorm";
import { GeneralEntity } from "../../utils/entity/base.entity";
import { RatingsEntity } from "./rating.entity";

@Entity({ name: "posts", schema: "public" })
export class PostsEntity extends GeneralEntity {

    @Column("varchar", { name: "text" })
    text: string;

    @Column("varchar", { name: "photo_id", nullable: true })
    photoId: string;

    @OneToMany(() => RatingsEntity, (rating) => rating)
    ratings: RatingsEntity[];
}