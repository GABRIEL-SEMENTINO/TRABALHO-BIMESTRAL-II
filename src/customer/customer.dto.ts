import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Optional } from "@nestjs/common";

export class CustomerDto {

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    name: string;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    @MinLength(11, { message: 'O campo deve ter 11 caracteres.' })
    cpf: number;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    @MinLength(9, { message: 'O campo deve ter 9 caracteres.' })
    rg: number;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    birth: string;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(100, { message: 'O campo deve ter no máximo 100 caracteres.' })
    gender: string;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    cellphone: string;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    age: number;

    @Optional()
    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    address: string;

    @IsInt({ message: 'Não é um inteiro válido!' })
    id: number;
}
