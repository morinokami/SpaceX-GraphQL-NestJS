import { forwardRef, Module } from '@nestjs/common';
import { LandpadsService } from './landpads.service';
import { LandpadsResolver } from './landpads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { LandpadsDataLoader } from './landpads.dataloader';

@Module({
  imports: [forwardRef(() => LaunchesModule)],
  providers: [LandpadsService, LandpadsResolver, LandpadsDataLoader],
  exports: [LandpadsDataLoader],
})
export class LandpadsModule {}
