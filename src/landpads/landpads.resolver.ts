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
import { Landpad } from './models/landpad.model';
import { PaginatedLandpads } from './models/paginated-landpad.model';

@Resolver(() => Landpad)
export class LandpadsResolver {
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
  async launches(
    @Parent() landpad: Landpad,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return Promise.all(
      landpad.launchIds.map((id) => dataSources.launchesAPI.getLaunch(id)),
    );
  }
}
