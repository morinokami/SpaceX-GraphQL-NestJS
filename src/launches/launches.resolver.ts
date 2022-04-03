import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CapsulesDataLoader } from 'src/capsules/capsules.dataloader';
import { Capsule } from 'src/capsules/models/capsule.model';
import { CrewDataLoader } from 'src/crew/crew.dataloader';
import { Crew } from 'src/crew/models/crew.model';
import { Payload } from 'src/payloads/models/payload.model';
import { PayloadsDataLoader } from 'src/payloads/payloads.dataloader';
import { Rocket } from 'src/rockets/models/rocket.model';
import { RocketsDataLoader } from 'src/rockets/rockets.dataloader';
import { Ship } from 'src/ships/models/ship.model';
import { ShipsDataLoader } from 'src/ships/ships.dataloader';
import { LaunchesService } from './launches.service';
import { Launch } from './models/launch.model';

@Resolver(() => Launch)
export class LaunchesResolver {
  constructor(
    private readonly launchesService: LaunchesService,
    private readonly rocketsDataLoader: RocketsDataLoader,
    private readonly crewDataLoader: CrewDataLoader,
    private readonly shipsDataLoader: ShipsDataLoader,
    private readonly capsulesDataLoader: CapsulesDataLoader,
    private readonly payloadsDataLoader: PayloadsDataLoader,
  ) {}

  @Query(() => [Launch], { description: 'Get all launches' })
  async allLaunches(): Promise<Launch[]> {
    return this.launchesService.getAllLaunches();
  }

  @ResolveField(() => Rocket)
  async rocket(@Parent() launch: Launch): Promise<Rocket> {
    if (!launch.rocketId) {
      return null;
    }
    return this.rocketsDataLoader.load(launch.rocketId);
  }

  @ResolveField(() => [Crew])
  async crew(@Parent() launch: Launch): Promise<Crew[]> {
    return Promise.all(
      launch.crewIds.map((id) => this.crewDataLoader.load(id)),
    );
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

  @ResolveField(() => [Payload])
  async payloads(@Parent() launch: Launch): Promise<Payload[]> {
    return Promise.all(
      launch.payloadIds.map((id) => this.payloadsDataLoader.load(id)),
    );
  }
}
