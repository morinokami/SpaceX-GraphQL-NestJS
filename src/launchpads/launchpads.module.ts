import { Module } from '@nestjs/common';
import { LaunchpadsService } from './launchpads.service';
import { LaunchpadsResolver } from './launchpads.resolver';
import { RocketsModule } from 'src/rockets/rockets.module';
import { LaunchpadsDataLoader } from './launchpads.dataloader';

@Module({
  imports: [RocketsModule],
  providers: [LaunchpadsService, LaunchpadsResolver, LaunchpadsDataLoader],
  exports: [LaunchpadsDataLoader],
})
export class LaunchpadsModule {}
