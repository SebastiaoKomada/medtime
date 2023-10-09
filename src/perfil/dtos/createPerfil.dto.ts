import { IsOptional, IsString } from "class-validator";

export class CreatePerfilDto {
    @IsString()
    perNome: string;

    @IsString()
    @IsOptional()
    perImagem: string;
}
