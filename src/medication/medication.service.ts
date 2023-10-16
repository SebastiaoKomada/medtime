import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { MedicationEntity } from "./entities/medication.entity";
import { CreateMedicationDto } from "./dtos/createMedication.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MedicationService {

    constructor(
        @InjectRepository(MedicationEntity)
        private readonly medicationRepository: Repository<MedicationEntity>,
    ){}


    async createMedication(createMedicationDto: CreateMedicationDto, medPerId: number): Promise<MedicationEntity> {
        return this.medicationRepository.save({
            ...createMedicationDto,
            medPerId,
        })
    }

    async findMedicationById(medId: number): Promise<MedicationEntity> {
      const time = await this.medicationRepository.findOne({
        where: {
          medId,
        }
      });
  
      if (!time) {
          throw new NotFoundException(`usuId: ${medId} Not Found`);
      }
  
      return time;
  }

    async getMedicationByIdUsingRelations(medId: number): Promise<MedicationEntity> {
        return this.medicationRepository.findOne({
          where: {
            medId,
          },
          relations: ['times'],
        })
      }
}