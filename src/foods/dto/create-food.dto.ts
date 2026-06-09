import { IsString, IsNumber, IsNotEmpty } from "class-validator";


export class CreateFoodDto {
    @IsNotEmpty()
    @IsString()
    name!: string;
    @IsNotEmpty()
    @IsString()
    description!: string;
    @IsNotEmpty()
    @IsNumber()
    price!: number;
    @IsNotEmpty()
    @IsString()
    image!: string;
    @IsNotEmpty()
    @IsString()
    category!: string;
}
