import { ConfirmationEntity } from "../entities/confirmation.entity";


export class ReturnConfirmationDto {
    conId: number;
    conMedId: number;
    conHorId: number;
    conPerId: number;
    conData: Date;
  
    constructor(confirmationEntity: ConfirmationEntity) {
      this.conId = confirmationEntity.conId;
      this.conMedId = confirmationEntity.conMedId;
      this.conHorId = confirmationEntity.conHorId;
      this.conPerId = confirmationEntity.conPerId;
      this.conData = confirmationEntity.conData;
    }
  }
  