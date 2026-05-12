import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    caption: string;

    @Column()
    likes: number;

    @ManyToOne(() => User, (user) => user.posts)
    author: User;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    @CreateDateColumn()
    createdAt: Date;
}
