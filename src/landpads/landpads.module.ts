import { Module } from '@nestjs/common';
import { LandpadsService } from './landpads.service';
import { LandpadsResolver } from './landpads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [LandpadsService, LandpadsResolver],
})
export class LandpadsModule {}
