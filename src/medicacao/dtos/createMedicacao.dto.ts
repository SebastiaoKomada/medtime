import { IsOptional, IsString } from "class-validator";

export class CreateMedicacaoDto {
    @IsString()
    medNome: string;

    @IsString()
    @IsOptional()
    medDescricao: string;
}
