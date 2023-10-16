import { Injectable, NotFoundException } from '@nestjs/common';
import { MedicacaoEntity } from './entities/medicacao.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedicacaoService {
    constructor(@InjectRepository(MedicacaoEntity)
        private readonly medicacaoRepository: Repository<MedicacaoEntity>,
    ) { }
  

    async findMedicationById(medId: number): Promise<MedicacaoEntity> {
        const medication = await this.medicacaoRepository.findOne({
          where: {
            medId,
          }
        });
    
        if (!medication) {
          throw new NotFoundException(`medication id: ${medId} Not Found`);
        }
    
        return medication;
    }
  
}
