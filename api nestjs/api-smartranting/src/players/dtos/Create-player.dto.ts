/* eslint-disable prettier/prettier */
import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreatePlayerDto{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    phoneNumber: string

    @IsNotEmpty()
    @IsString()
    ranking: string

    @IsNotEmpty()
    rankingPosition: number


}