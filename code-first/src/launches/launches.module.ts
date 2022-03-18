import { Module } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { LaunchesResolver } from './launches.resolver';

@Module({
  providers: [LaunchesService, LaunchesResolver],
})
export class LaunchesModule {}
