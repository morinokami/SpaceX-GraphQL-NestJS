import { Module } from '@nestjs/common';
import { CapsulesService } from './capsules.service';
import { CapsulesResolver } from './capsules.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [CapsulesService, CapsulesResolver],
  exports: [CapsulesService],
})
export class CapsulesModule {}
