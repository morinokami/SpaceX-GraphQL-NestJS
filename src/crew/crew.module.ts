import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewResolver } from './crew.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [CrewService, CrewResolver],
})
export class CrewModule {}
