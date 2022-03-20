import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CapsulesDataLoader } from 'src/capsules/capsules.dataloader';
import { Capsule } from 'src/capsules/models/capsule.model';
import { Ship } from 'src/ships/models/ship.model';
import { ShipsDataLoader } from 'src/ships/ships.dataloader';
import { LaunchesService } from './launches.service';
import { Launch } from './models/launch.model';

@Resolver(() => Launch)
export class LaunchesResolver {
  constructor(
    private readonly launchesService: LaunchesService,
    private readonly shipsDataLoader: ShipsDataLoader,
    private readonly capsulesDataLoader: CapsulesDataLoader,
  ) {}

  @Query(() => [Launch], { description: 'Get all launches' })
  async allLaunches(): Promise<Launch[]> {
    return this.launchesService.getAllLaunches();
  }

  @ResolveField(() => [Ship])
  async ships(@Parent() launch: Launch): Promise<Ship[]> {
    return Promise.all(
      launch.shipIds.map((id) => this.shipsDataLoader.load(id)),
    );
  }

  @ResolveField(() => [Capsule])
  async capsules(@Parent() launch: Launch): Promise<Capsule[]> {
    return Promise.all(
      launch.capsuleIds.map((id) => this.capsulesDataLoader.load(id)),
    );
  }
}
