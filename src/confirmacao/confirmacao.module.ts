import { Module } from '@nestjs/common';
import { ConfirmacaoController } from './confirmacao.controller';
import { ConfirmacaoService } from './confirmacao.service';

@Module({
  controllers: [ConfirmacaoController],
  providers: [ConfirmacaoService]
})
export class ConfirmacaoModule {}
