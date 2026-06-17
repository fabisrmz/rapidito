import { IsString, IsNotEmpty, IsBoolean, IsOptional } from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsString()
    description!: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;
}