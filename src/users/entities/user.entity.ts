import { IsOptional } from "class-validator";
import { Post } from "src/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    @IsOptional()
    bio: string;

    @Column()
    followers: number;

    @OneToMany(() => Post, (post) => post.author)
    posts: Post[];

    @CreateDateColumn()
    createdAt: Date;
}
