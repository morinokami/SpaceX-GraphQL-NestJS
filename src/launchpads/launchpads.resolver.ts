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
import { Rocket } from 'src/rockets/models/rocket.model';
import { RocketsDataLoader } from 'src/rockets/rockets.dataloader';
import { Launchpad } from './models/launchpad.model';
import { PaginatedLaunchpads } from './models/paginated-launchpad.model';

@Resolver(() => Launchpad)
export class LaunchpadsResolver {
  constructor(private readonly rocketsDataLoader: RocketsDataLoader) {}

  @Query(() => [Launchpad], { description: 'Get all launchpads' })
  async allLaunchpads(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launchpad[]> {
    return dataSources.launchpadsAPI.getAllLaunchpads();
  }

  @Query(() => Launchpad, { description: 'Get one launchpad' })
  async launchpad(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launchpad> {
    return dataSources.launchpadsAPI.getLaunchpad(id);
  }

  @Query(() => PaginatedLaunchpads, { description: 'Query launchpads' })
  async launchpads(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedLaunchpads> {
    return dataSources.launchpadsAPI.getLaunchpads(options);
  }

  @ResolveField(() => [Rocket])
  async rockets(@Parent() launchpad: Launchpad): Promise<Rocket[]> {
    return Promise.all(
      launchpad.rocketIds.map((id) => this.rocketsDataLoader.load(id)),
    );
  }

  @ResolveField(() => [Launch])
  async launches(
    @Parent() launchpad: Launchpad,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return Promise.all(
      launchpad.launchIds.map((id) => dataSources.launchesAPI.getLaunch(id)),
    );
  }
}
