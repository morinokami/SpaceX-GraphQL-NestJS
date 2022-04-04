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
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { Landpad } from './models/landpad.model';
import { PaginatedLandpads } from './models/paginated-landpad.model';

@Resolver(() => Landpad)
export class LandpadsResolver {
  constructor(private readonly launchesDataLoader: LaunchesDataLoader) {}

  @Query(() => [Landpad], { description: 'Get all landpads' })
  async allLandpads(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Landpad[]> {
    return dataSources.landpadsAPI.getAllLandpads();
  }

  @Query(() => Landpad, { description: 'Get one landpad' })
  async landpad(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Landpad> {
    return dataSources.landpadsAPI.getLandpad(id);
  }

  @Query(() => PaginatedLandpads, { description: 'Query landpads' })
  async landpads(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedLandpads> {
    return dataSources.landpadsAPI.getLandpads(options);
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() landpad: Landpad): Promise<Launch[]> {
    return Promise.all(
      landpad.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
