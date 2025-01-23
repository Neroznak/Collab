import {IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString} from "class-validator";
import {Categories} from "../../enums/categories.enum";
import {Difficulty} from "../../enums/difficulty.enum";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title:string


    @IsEnum(Categories)
    @IsNotEmpty()
    category:Categories

    @IsString()
    @IsNotEmpty()
    content:string

    @IsBoolean()
    @IsOptional()
    isDeleted:boolean

    @IsEnum(Difficulty)
    @IsNotEmpty()
    difficulty: Difficulty





}
