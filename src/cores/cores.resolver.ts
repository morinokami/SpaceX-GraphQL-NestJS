import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { QueryOptionsInput } from 'src/common';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { CoresService } from './cores.service';
import { Core } from './models/core.model';
import { PaginatedCores } from './models/paginated-cores.model';

@Resolver(() => Core)
export class CoresResolver {
  constructor(
    private readonly coresService: CoresService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Core], { description: 'Get all cores' })
  async allCores(): Promise<Core[]> {
    return this.coresService.getAllCores();
  }

  @Query(() => Core, { description: 'Get one core' })
  async core(@Args('id') id: string): Promise<Core> {
    return this.coresService.getCore(id);
  }

  @Query(() => PaginatedCores, { description: 'Query cores' })
  async cores(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedCores> {
    return this.coresService.getCores(options);
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() capsule: Capsule): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
