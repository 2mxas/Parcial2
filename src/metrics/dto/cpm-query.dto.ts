import { IsNumber, Min } from "class-validator";

export class CpmQueryDto {
    @IsNumber()
    @Min(0)
    cost: number;

    @IsNumber()
    @Min(1)
    impressions: number;
}