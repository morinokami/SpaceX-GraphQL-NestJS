import { forwardRef, Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewResolver } from './crew.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { CrewDataLoader } from './crew.dataloader';

@Module({
  imports: [forwardRef(() => LaunchesModule)],
  providers: [CrewService, CrewResolver, CrewDataLoader],
  exports: [CrewDataLoader],
})
export class CrewModule {}
