import { Module } from '@nestjs/common';
import { CapsulesService } from './capsules.service';
import { CapsulesResolver } from './capsules.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { CapsulesDataLoader } from './capsules.dataloader';

@Module({
  imports: [LaunchesModule],
  providers: [CapsulesService, CapsulesResolver, CapsulesDataLoader],
  exports: [CapsulesDataLoader],
})
export class CapsulesModule {}
