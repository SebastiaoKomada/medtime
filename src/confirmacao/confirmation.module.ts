import { Module } from '@nestjs/common';
import { ConfirmationController } from './confirmation.controller';
import { ConfirmationService } from './confirmation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfirmationEntity } from './entities/confirmation.entity';
import { TimeModule } from 'src/time/time.module';
import { MedicacaoModule } from 'src/medicacao/medicacao.module';
import { ProfileIdModule } from 'src/profile/profile-id/profile-id.module';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConfirmationEntity]),
    TimeModule, MedicacaoModule, ProfileModule, ProfileIdModule
  ],
  controllers: [ConfirmationController],
  providers: [ConfirmationService]
})
export class ConfirmationModule { }
