import { IsDate, IsNumber } from "class-validator";

export class CreateConfirmacaoDto {

    @IsNumber()
    conPerId: number;

    @IsNumber()
    conMedId: number;

    @IsNumber()
    conHorId: number;

    @IsDate()
    conData: Date;
}
