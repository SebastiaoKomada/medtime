import { Module } from '@nestjs/common';
import { MedicacaoController } from './medicacao.controller';
import { MedicacaoService } from './medicacao.service';

@Module({
  controllers: [MedicacaoController],
  providers: [MedicacaoService]
})
export class MedicacaoModule {}
