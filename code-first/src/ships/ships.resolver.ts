import { Query, Resolver } from '@nestjs/graphql';
import { Ship } from './models/ship.model';
import { ShipsService } from './ships.service';

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(private readonly shipsService: ShipsService) {}

  @Query(() => [Ship], { description: 'Get all ships' })
  async allShips(): Promise<Ship[]> {
    return this.shipsService.getAllShips();
  }
}
