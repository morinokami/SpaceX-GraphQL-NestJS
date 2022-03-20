import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { CoresService } from './cores.service';
import { Core } from './models/core.model';

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

  @ResolveField(() => [Launch])
  async launches(@Parent() capsule: Capsule): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
