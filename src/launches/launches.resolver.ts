import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CapsulesDataLoader } from 'src/capsules/capsules.dataloader';
import { Capsule } from 'src/capsules/models/capsule.model';
import { QueryOptionsInput } from 'src/common';
import { CoresDataLoader } from 'src/cores/cores.dataloader';
import { CrewDataLoader } from 'src/crew/crew.dataloader';
import { Crew } from 'src/crew/models/crew.model';
import { LandpadsDataLoader } from 'src/landpads/landpads.dataloader';
import { LaunchpadsDataLoader } from 'src/launchpads/launchpads.dataloader';
import { Launchpad } from 'src/launchpads/models/launchpad.model';
import { Payload } from 'src/payloads/models/payload.model';
import { PayloadsDataLoader } from 'src/payloads/payloads.dataloader';
import { Rocket } from 'src/rockets/models/rocket.model';
import { RocketsDataLoader } from 'src/rockets/rockets.dataloader';
import { Ship } from 'src/ships/models/ship.model';
import { ShipsDataLoader } from 'src/ships/ships.dataloader';
import { LaunchesService } from './launches.service';
import { Fairings, Launch, LaunchCore } from './models/launch.model';
import { PaginatedLaunch } from './models/paginated-launch.model';

@Resolver(() => Launch)
export class LaunchesResolver {
  constructor(
    private readonly launchesService: LaunchesService,
    private readonly rocketsDataLoader: RocketsDataLoader,
    private readonly crewDataLoader: CrewDataLoader,
    private readonly shipsDataLoader: ShipsDataLoader,
    private readonly capsulesDataLoader: CapsulesDataLoader,
    private readonly payloadsDataLoader: PayloadsDataLoader,
    private readonly launchpadsDataLoader: LaunchpadsDataLoader,
    private readonly coresDataLoader: CoresDataLoader,
    private readonly landpadsDataLoader: LandpadsDataLoader,
  ) {}

  @Query(() => [Launch], { description: 'Get all launches' })
  async allLaunches(): Promise<Launch[]> {
    return this.launchesService.getAllLaunches();
  }

  @Query(() => Launch, { description: 'Get one launch' })
  async launch(@Args('id') id: string): Promise<Launch> {
    return this.launchesService.getLaunch(id);
  }

  @Query(() => PaginatedLaunch, { description: 'Query launches' })
  async launches(
    @Args('input') options: QueryOptionsInput,
  ): Promise<PaginatedLaunch> {
    return this.launchesService.getLaunches(options);
  }

  @Query(() => [Launch], { description: 'Get past launches' })
  async pastLaunches(): Promise<Launch[]> {
    return this.launchesService.getPastLaunches();
  }

  @Query(() => [Launch], { description: 'Get upcoming launches' })
  async upcomingLaunches(): Promise<Launch[]> {
    return this.launchesService.getUpcomingLaunches();
  }

  @Query(() => Launch, { description: 'Get latest launch' })
  async latestLaunch(): Promise<Launch> {
    return this.launchesService.getLatestLaunch();
  }

  @Query(() => Launch, { description: 'Get next launch' })
  async nextLaunch(): Promise<Launch> {
    return this.launchesService.getNextLaunch();
  }

  @ResolveField(() => Rocket)
  async rocket(@Parent() launch: Launch): Promise<Rocket> {
    if (!launch.rocketId) {
      return null;
    }
    return this.rocketsDataLoader.load(launch.rocketId);
  }

  @ResolveField(() => Fairings)
  async fairings(@Parent() launch: Launch): Promise<Fairings> {
    if (launch.shipIdsForFairings.length === 0) {
      return launch.fairings;
    }
    const ships = await Promise.all(
      launch.shipIdsForFairings.map((id) => this.shipsDataLoader.load(id)),
    );
    return { ...launch.fairings, ships };
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

  @ResolveField(() => Launchpad)
  async launchpad(@Parent() launch: Launch): Promise<Launchpad> {
    if (!launch.launchpadId) {
      return null;
    }
    return this.launchpadsDataLoader.load(launch.launchpadId);
  }

  @ResolveField(() => [LaunchCore])
  async cores(@Parent() launch: Launch): Promise<LaunchCore[]> {
    return Promise.all(
      launch.cores.map(async (core) => ({
        ...core,
        core: core.coreId ? await this.coresDataLoader.load(core.coreId) : null,
        landpad: core.landpadId
          ? await this.landpadsDataLoader.load(core.landpadId)
          : null,
      })),
    );
  }
}
