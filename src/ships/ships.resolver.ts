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
import { DataSources } from 'src/datasources';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { PaginatedShips } from './models/paginated-ships.model';
import { Ship } from './models/ship.model';

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(private readonly launchesDataLoader: LaunchesDataLoader) {}

  @Query(() => [Ship], { description: 'Get all ships' })
  async allShips(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Ship[]> {
    return dataSources.shipsAPI.getAllShips();
  }

  @Query(() => Ship, { description: 'Get one ship' })
  async ship(
    @Args('id') id: string,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Ship> {
    return dataSources.shipsAPI.getShip(id);
  }

  @Query(() => PaginatedShips, { description: 'Query ships' })
  async ships(
    @Args('input') options: QueryOptionsInput,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<PaginatedShips> {
    return dataSources.shipsAPI.getShips(options);
  }

  @ResolveField(() => [Launch])
  async launches(
    @Parent() capsule: Capsule,
    @Context('dataSources') dataSources: DataSources,
  ): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => dataSources.launchesAPI.getLaunch(id)),
    );
  }
}
