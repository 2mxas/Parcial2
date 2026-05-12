import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    caption: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    likes: number;
}
