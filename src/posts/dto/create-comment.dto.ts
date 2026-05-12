import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    author: string;
}