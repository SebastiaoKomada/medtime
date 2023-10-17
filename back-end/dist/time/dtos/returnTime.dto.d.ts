import { TimeEntity } from '../entities/time.entity';
export declare class ReturnTimeDto {
    horId: number;
    horMedId: number;
    horUsuId: number;
    horPerId: number;
    horario: string;
    constructor(timeEntity: TimeEntity);
}
