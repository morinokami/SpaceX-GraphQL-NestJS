import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { LaunchpadsService } from './launchpads.service';
import { Launchpad } from './models/launchpad.model';
import { PaginatedLaunchpads } from './models/paginated-launchpad.model';

@Resolver(() => Launchpad)
export class LaunchpadsResolver {
  constructor(
    private readonly launchpadsService: LaunchpadsService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Launchpad], { description: 'Get all launchpads' })
  async allLaunchpads(): Promise<Launchpad[]> {
    return this.launchpadsService.getAllLaunchpads();
  }

  @Query(() => Launchpad, { description: 'Get one launchpad' })
  async launchpad(@Args('id') id: string): Promise<Launchpad> {
    return this.launchpadsService.getLaunchpad(id);
  }

  @Query(() => PaginatedLaunchpads, { description: 'Query launchpads' })
  async launchpads(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedLaunchpads> {
    return this.launchpadsService.getLaunchpads(options);
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() launchpad: Launchpad): Promise<Launch[]> {
    return Promise.all(
      launchpad.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
