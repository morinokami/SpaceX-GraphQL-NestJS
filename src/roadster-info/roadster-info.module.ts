import { Module } from '@nestjs/common';
import { RoadsterInfoResolver } from './roadster-info.resolver';

@Module({
  providers: [RoadsterInfoResolver],
})
export class RoadsterInfoModule {}
