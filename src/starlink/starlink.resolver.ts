import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QueryOptionsInput } from 'src/common';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { PaginatedStarlinks } from './models/paginated-starlinks.model';
import { Starlink } from './models/starlink.model';
import { StarlinkService } from './starlink.service';

@Resolver(() => Starlink)
export class StarlinkResolver {
  constructor(
    private readonly starlinkService: StarlinkService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Starlink], { description: 'Get all starlinks' })
  async allStarlinks(): Promise<Starlink[]> {
    return this.starlinkService.getAllStarlinks();
  }

  @Query(() => Starlink, { description: 'Get one starlink' })
  async starlink(@Args('id') id: string): Promise<Starlink> {
    return this.starlinkService.getStarlink(id);
  }

  @Query(() => PaginatedStarlinks, { description: 'Query starlinks' })
  async starlinks(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedStarlinks> {
    return this.starlinkService.getStarlinks(options);
  }

  @ResolveField(() => Launch)
  async launch(@Parent() starlink: Starlink): Promise<Launch> {
    if (!starlink.launchId) {
      return null;
    }
    return this.launchesDataLoader.load(starlink.launchId);
  }
}
