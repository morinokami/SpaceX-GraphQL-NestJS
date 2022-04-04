import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { QueryOptionsInput } from 'src/common';
import { Crew } from 'src/crew/models/crew.model';
import { DataSources } from 'src/datasources';
import { Launchpad } from 'src/launchpads/models/launchpad.model';
import { Payload } from 'src/payloads/models/payload.model';
import { Rocket } from 'src/rockets/models/rocket.model';
import { Ship } from 'src/ships/models/ship.model';
import { Fairings, Launch, LaunchCore } from './models/launch.model';
import { PaginatedLaunch } from './models/paginated-launch.model';

@Resolver(() => Launch)
export class LaunchesResolver {
  @Query(() => [Launch], { description: 'Get all launches' })
  async allLaunches(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return dataSources.launchesAPI.getAllLaunches();
  }

  @Query(() => Launch, { description: 'Get one launch' })
  async launch(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch> {
    return dataSources.launchesAPI.getLaunch(id);
  }

  @Query(() => PaginatedLaunch, { description: 'Query launches' })
  async launches(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedLaunch> {
    return dataSources.launchesAPI.getLaunches(options);
  }

  @Query(() => [Launch], { description: 'Get past launches' })
  async pastLaunches(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return dataSources.launchesAPI.getPastLaunches();
  }

  @Query(() => [Launch], { description: 'Get upcoming launches' })
  async upcomingLaunches(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return dataSources.launchesAPI.getUpcomingLaunches();
  }

  @Query(() => Launch, { description: 'Get latest launch' })
  async latestLaunch(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch> {
    return dataSources.launchesAPI.getLatestLaunch();
  }

  @Query(() => Launch, { description: 'Get next launch' })
  async nextLaunch(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch> {
    return dataSources.launchesAPI.getNextLaunch();
  }

  @ResolveField(() => Rocket)
  async rocket(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Rocket> {
    if (!launch.rocketId) {
      return null;
    }
    return dataSources.rocketsAPI.getRocket(launch.rocketId);
  }

  @ResolveField(() => Fairings)
  async fairings(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Fairings> {
    if (launch.shipIdsForFairings.length === 0) {
      return launch.fairings;
    }
    const ships = await Promise.all(
      launch.shipIdsForFairings.map((id) => dataSources.shipsAPI.getShip(id)),
    );
    return { ...launch.fairings, ships };
  }

  @ResolveField(() => [Crew])
  async crew(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Crew[]> {
    return Promise.all(
      launch.crewIds.map((id) => dataSources.crewAPI.getCrew(id)),
    );
  }

  @ResolveField(() => [Ship])
  async ships(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Ship[]> {
    return Promise.all(
      launch.shipIds.map((id) => dataSources.shipsAPI.getShip(id)),
    );
  }

  @ResolveField(() => [Capsule])
  async capsules(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Capsule[]> {
    return Promise.all(
      launch.capsuleIds.map((id) => dataSources.capsulesAPI.getCapsule(id)),
    );
  }

  @ResolveField(() => [Payload])
  async payloads(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Payload[]> {
    return Promise.all(
      launch.payloadIds.map((id) => dataSources.payloadsAPI.getPayload(id)),
    );
  }

  @ResolveField(() => Launchpad)
  async launchpad(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launchpad> {
    if (!launch.launchpadId) {
      return null;
    }
    return dataSources.launchpadsAPI.getLaunchpad(launch.launchpadId);
  }

  @ResolveField(() => [LaunchCore])
  async cores(
    @Parent() launch: Launch,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<LaunchCore[]> {
    return Promise.all(
      launch.cores.map(async (core) => ({
        ...core,
        core: core.coreId
          ? await dataSources.coresAPI.getCore(core.coreId)
          : null,
        landpad: core.landpadId
          ? await dataSources.landpadsAPI.getLandpad(core.landpadId)
          : null,
      })),
    );
  }
}
