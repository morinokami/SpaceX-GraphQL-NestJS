import { Module } from '@nestjs/common';
import { LaunchpadsResolver } from './launchpads.resolver';

@Module({
  providers: [LaunchpadsResolver],
})
export class LaunchpadsModule {}
