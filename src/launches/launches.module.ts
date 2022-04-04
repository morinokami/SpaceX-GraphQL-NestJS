import { Module } from '@nestjs/common';
import { LaunchesResolver } from './launches.resolver';

@Module({
  providers: [LaunchesResolver],
})
export class LaunchesModule {}
