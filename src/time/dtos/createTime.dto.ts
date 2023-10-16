import { IsInt, IsString } from 'class-validator';

export class CreateTimeDto {
  @IsInt()
  horMedId: number;

  @IsString()
  horario: string;
}
