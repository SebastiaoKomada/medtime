import { TimeEntity } from './entities/time.entity';
import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { ProfileService } from 'src/profile/profile.service';
import { UserModule } from 'src/user/user.module';
import { ProfileModule } from 'src/profile/profile.module';
import { ProfileIdModule } from 'src/profile/profile-id/profile-id.module';

@Module({
  imports: [TypeOrmModule.forFeature([TimeEntity]), UserModule, ProfileModule, ProfileIdModule],
  providers: [TimeService],
  controllers: [TimeController],
  exports: [TimeService],

})
export class TimeModule {}
