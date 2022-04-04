import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { DataSources } from 'src/datasources';
import { Launch } from 'src/launches/models/launch.model';

import { PaginatedStarlinks } from './models/paginated-starlinks.model';
import { Starlink } from './models/starlink.model';

@Resolver(() => Starlink)
export class StarlinkResolver {
  @Query(() => [Starlink], { description: 'Get all starlinks' })
  async allStarlinks(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Starlink[]> {
    return dataSources.starlinkAPI.getAllStarlinks();
  }

  @Query(() => Starlink, { description: 'Get one starlink' })
  async starlink(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Starlink> {
    return dataSources.starlinkAPI.getStarlink(id);
  }

  @Query(() => PaginatedStarlinks, { description: 'Query starlinks' })
  async starlinks(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedStarlinks> {
    return dataSources.starlinkAPI.getStarlinks(options);
  }

  @ResolveField(() => Launch)
  async launch(
    @Parent() starlink: Starlink,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch> {
    if (!starlink.launchId) {
      return null;
    }
    return dataSources.launchesAPI.getLaunch(starlink.launchId);
  }
}
