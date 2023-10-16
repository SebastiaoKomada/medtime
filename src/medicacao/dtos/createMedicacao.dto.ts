import { IsDate, IsNumber, IsOptional, IsString, isNumber } from "class-validator";

export class CreateMedicacaoDto {
    @IsString()
    medNome: string;

    @IsString()
    medForma: string;

    @IsNumber()
    medQuantidade: number;

    @IsDate()
    medDataInicio: Date;

    @IsDate()
    @IsOptional()
    medDataFim: Date;

    @IsNumber()
    medPerId: number;
}
