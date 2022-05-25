/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class updatedPlayerdto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    phoneNumber: string;
}