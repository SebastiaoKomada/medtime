import { Type } from "class-transformer";
import { IsDate, IsNumber } from "class-validator";

export class CreateConfirmationDto {

    @IsDate()
    @Type(() => Date)
    conData: Date;
}
