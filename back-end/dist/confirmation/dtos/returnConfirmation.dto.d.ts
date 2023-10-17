import { ConfirmationEntity } from "../entities/confirmation.entity";
export declare class ReturnConfirmationDto {
    conId: number;
    conMedId: number;
    conHorId: number;
    conPerId: number;
    conData: Date;
    constructor(confirmationEntity: ConfirmationEntity);
}
