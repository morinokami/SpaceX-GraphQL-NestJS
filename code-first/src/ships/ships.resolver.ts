import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Capsule } from 'src/capsules/models/capsule.model';
import { LaunchesDataLoader } from 'src/launches/launches.dataloader';
import { Launch } from 'src/launches/models/launch.model';
import { Ship } from './models/ship.model';
import { ShipsService } from './ships.service';

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(
    private readonly shipsService: ShipsService,
    private readonly launchesDataLoader: LaunchesDataLoader,
  ) {}

  @Query(() => [Ship], { description: 'Get all ships' })
  async allShips(): Promise<Ship[]> {
    return this.shipsService.getAllShips();
  }

  @ResolveField(() => [Launch])
  async launches(@Parent() capsule: Capsule): Promise<Launch[]> {
    return Promise.all(
      capsule.launchIds.map((id) => this.launchesDataLoader.load(id)),
    );
  }
}
