import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TimeService } from 'src/time/time.service';
import { TimeEntity } from 'src/time/entities/time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from 'src/profile/entities/profile.entity';
import { UserModule } from 'src/user/user.module';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileIdModule } from 'src/profile/profile-id/profile-id.module';
import { NotificationGateway } from './notification.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([TimeEntity]), TypeOrmModule.forFeature([ProfileEntity]),UserModule, ProfileModule, ProfileIdModule],
  providers: [NotificationService, TimeService, NotificationGateway],
  controllers: [NotificationController],
  exports: [NotificationService]
})
export class NotificationModule {}
