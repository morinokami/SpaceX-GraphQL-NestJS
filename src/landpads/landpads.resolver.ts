import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { LandpadsService } from './landpads.service';
import { Landpad } from './models/landpad.model';
import { PaginatedLandpads } from './models/paginated-landpad.model';

@Resolver(() => Landpad)
export class LandpadsResolver {
  constructor(
    private readonly landpadsService: LandpadsService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Landpad], { description: 'Get all landpads' })
  async allLandpads(): Promise<Landpad[]> {
    return this.landpadsService.getAllLandpads();
  }

  @Query(() => Landpad, { description: 'Get one landpad' })
  async landpad(@Args('id') id: string): Promise<Landpad> {
    return this.landpadsService.getLandpad(id);
  }

  @Query(() => PaginatedLandpads, { description: 'Query landpads' })
  async landpads(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedLandpads> {
    return this.landpadsService.getLandpads(options);
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() landpad: Landpad): Promise<Launch[]> {
    return Promise.all(
      landpad.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
