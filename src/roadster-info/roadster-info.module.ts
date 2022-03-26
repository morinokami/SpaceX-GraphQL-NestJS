import { Module } from '@nestjs/common';
import { RoadsterInfoService } from './roadster-info.service';
import { RoadsterInfoResolver } from './roadster-info.resolver';

@Module({
  providers: [RoadsterInfoService, RoadsterInfoResolver],
})
export class RoadsterInfoModule {}
