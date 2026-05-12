import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content: string;

    @Column()
    author: string;

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;

    @CreateDateColumn()
    createdAt: Date;
}