import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CapsulesService } from 'src/capsules/capsules.service';
import { Capsule } from 'src/capsules/models/capsule.model';
import { Ship } from 'src/ships/models/ship.model';
import { ShipsService } from 'src/ships/ships.service';
import { LaunchesService } from './launches.service';
import { Launch } from './models/launch.model';

@Resolver(() => Launch)
export class LaunchesResolver {
  constructor(
    private readonly launchesService: LaunchesService,
    private readonly shipsService: ShipsService,
    private readonly capsulesService: CapsulesService,
  ) {}

  @Query(() => [Launch], { description: 'Get all launches' })
  async allLaunches(): Promise<Launch[]> {
    return this.launchesService.getAllLaunches();
  }

  @ResolveField()
  async ships(@Parent() launch: Launch): Promise<Ship[]> {
    return this.shipsService.getShipsByIds(launch.shipIds);
  }

  @ResolveField()
  async capsules(@Parent() launch: Launch): Promise<Capsule[]> {
    return this.capsulesService.getCapsulesByIds(launch.capsuleIds);
  }
}
