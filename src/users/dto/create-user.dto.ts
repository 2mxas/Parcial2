import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsOptional()
    bio: string;

    @IsNumber()
    @Min(0)
    followers: number;
}
