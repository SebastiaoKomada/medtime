import { Module } from '@nestjs/common';
import { MedicacaoController } from './medicacao.controller';
import { MedicacaoService } from './medicacao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicacaoEntity } from './entities/medicacao.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicacaoEntity]),
],
  controllers: [MedicacaoController],
  providers: [MedicacaoService],
  exports: [MedicacaoService],

})
export class MedicacaoModule {}
