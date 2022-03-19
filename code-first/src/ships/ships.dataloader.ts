import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Ship } from './models/ship.model';
import { ShipsService } from './ships.service';

@Injectable({ scope: Scope.REQUEST })
export class ShipsDataLoader extends DataLoader<string, Ship> {
  constructor(private readonly shipsService: ShipsService) {
    super((ids: string[]) => {
      return this.shipsService.getShipsByIds(ids);
    });
  }
}
