import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { QueryOptionsInput } from 'src/common';
import { DataSources } from 'src/datasources';
import { Launch } from 'src/launches/models/launch.model';

import { Core } from './models/core.model';
import { PaginatedCores } from './models/paginated-cores.model';

@Resolver(() => Core)
export class CoresResolver {
  @Query(() => [Core], { description: 'Get all cores' })
  async allCores(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Core[]> {
    return dataSources.coresAPI.getAllCores();
  }

  @Query(() => Core, { description: 'Get one core' })
  async core(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Core> {
    return dataSources.coresAPI.getCore(id);
  }

  @Query(() => PaginatedCores, { description: 'Query cores' })
  async cores(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedCores> {
    return dataSources.coresAPI.getCores(options);
  }

  @ResolveField(() => [Launch])
  async launches(
    @Parent() capsule: Capsule,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => dataSources.launchesAPI.getLaunch(id)),
    );
  }
}
