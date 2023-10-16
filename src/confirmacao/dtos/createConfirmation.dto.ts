import { Type } from "class-transformer";
import { IsDate, IsNumber } from "class-validator";

export class CreateConfirmationDto {

    @IsNumber()
    conMedId: number;

    @IsNumber()
    conHorId: number;

    @IsDate()
    @Type(() => Date)
    conData: Date;
}
