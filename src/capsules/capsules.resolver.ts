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
import { Capsule } from './models/capsule.model';
import { PaginatedCapsules } from './models/paginated-capsules.model';

@Resolver(() => Capsule)
export class CapsulesResolver {
  constructor(private readonly launchesDataLoader: LaunchesDataLoader) {}

  @Query(() => [Capsule], { description: 'Get all capsules' })
  async allCapsules(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Capsule[]> {
    return dataSources.capsulesAPI.getAllCapsules();
  }

  @Query(() => Capsule, { description: 'Get one capsule' })
  async capsule(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Capsule> {
    return dataSources.capsulesAPI.getCapsule(id);
  }

  @Query(() => PaginatedCapsules, { description: 'Query capsules' })
  async capsules(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedCapsules> {
    return dataSources.capsulesAPI.getCapsules(options);
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() capsule: Capsule): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
