import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { CapsulesService } from './capsules.service';
import { Capsule } from './models/capsule.model';

@Resolver(() => Capsule)
export class CapsulesResolver {
  constructor(
    private readonly capsulesService: CapsulesService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Capsule], { description: 'Get all capsules' })
  async allCapsules(): Promise<Capsule[]> {
    return this.capsulesService.getAllCapsules();
  }

  @Query(() => Capsule, { description: 'Get one capsule' })
  async capsule(@Args('id') id: string): Promise<Capsule> {
    return this.capsulesService.getCapsule(id);
  }

  // TODO: Pagination

  @ResolveField(() => [Launch])
  async launches(@Parent() capsule: Capsule): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
