import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileIdModule } from 'src/profile/profile-id/profile-id.module';
import { MedicationController } from './medication.controller';
import { MedicationService } from './medication.service';
import { MedicationEntity } from './entities/medication.entity';
@Module({
  imports: [TypeOrmModule.forFeature([MedicationEntity]), ProfileIdModule],
  controllers: [MedicationController],
  providers: [MedicationService],
  exports: [MedicationService],
})
export class MedicationModule { }