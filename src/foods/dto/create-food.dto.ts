import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import { Category } from "src/categories/entities/category.entity";


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
    category!: Category;
}
