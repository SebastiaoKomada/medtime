import { ReturnTimeDto } from 'src/time/dtos/returnTime.dto';
import { MedicationEntity } from '../entities/medication.entity';

export class ReturnMedicationDto {
  medId: number;
  medForma: string;
  medQuantidade: number;
  medDataInicio: string;
  medDataFim: string;
  usuTelefone: string;
  times?: ReturnTimeDto[];

  constructor(medicationEntity: MedicationEntity) {
    this.medId = medicationEntity.medId;
    this.medForma = medicationEntity.medForma;
    this.medQuantidade = medicationEntity.medQuantidade;
    this.medDataInicio = medicationEntity.medDataInicio;
    this.medDataFim = medicationEntity.medDataFim;
    
    this.times = medicationEntity.times ? medicationEntity.times.map((times) => new ReturnTimeDto(times)) : undefined;
  }
}
