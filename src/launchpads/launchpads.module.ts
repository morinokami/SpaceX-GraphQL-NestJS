import { forwardRef, Module } from '@nestjs/common';
import { LaunchpadsService } from './launchpads.service';
import { LaunchpadsResolver } from './launchpads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { RocketsModule } from 'src/rockets/rockets.module';
import { LaunchpadsDataLoader } from './launchpads.dataloader';

@Module({
  imports: [RocketsModule, forwardRef(() => LaunchesModule)],
  providers: [LaunchpadsService, LaunchpadsResolver, LaunchpadsDataLoader],
  exports: [LaunchpadsDataLoader],
})
export class LaunchpadsModule {}
