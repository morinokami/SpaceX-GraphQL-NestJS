import { Query, Resolver } from '@nestjs/graphql';
import { RoadsterInfo } from './models/roadster-info.model';
import { RoadsterInfoService } from './roadster-info.service';

@Resolver()
export class RoadsterInfoResolver {
  constructor(private readonly roadsterInfoService: RoadsterInfoService) {}

  @Query(() => RoadsterInfo, { description: 'Roadster info' })
  async roadsterInfo(): Promise<RoadsterInfo> {
    return this.roadsterInfoService.getRoadsterInfo();
  }
}
