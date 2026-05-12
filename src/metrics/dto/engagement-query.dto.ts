import { IsNumber, Min } from "class-validator";

export class EngagementQueryDto {
    @IsNumber()
    @Min(0)
    likes: number;

    @IsNumber()
    @Min(0)
    comments: number;

    @IsNumber()
    @Min(1)
    followers: number;
}