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
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { Core } from './models/core.model';
import { PaginatedCores } from './models/paginated-cores.model';

@Resolver(() => Core)
export class CoresResolver {
  constructor(private readonly launchesDataLoader: LaunchesDataLoader) {}

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
  async launches(@Parent() capsule: Capsule): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
