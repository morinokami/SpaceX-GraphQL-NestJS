import { Module } from '@nestjs/common';
import { LaunchpadsService } from './launchpads.service';
import { LaunchpadsResolver } from './launchpads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [LaunchpadsService, LaunchpadsResolver],
})
export class LaunchpadsModule {}
