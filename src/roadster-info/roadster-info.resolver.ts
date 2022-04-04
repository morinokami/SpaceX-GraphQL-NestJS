import { Context, Query, Resolver } from '@nestjs/graphql';
import { DataSources } from 'src/datasources';

import { RoadsterInfo } from './models/roadster-info.model';

@Resolver()
export class RoadsterInfoResolver {
  @Query(() => RoadsterInfo, { description: 'Roadster info' })
  async roadsterInfo(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<RoadsterInfo> {
    return dataSources.roadsterInfoAPI.getRoadsterInfo();
  }
}
