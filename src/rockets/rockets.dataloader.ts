import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Rocket } from './models/rocket.model';
import { RocketsService } from './rockets.service';

@Injectable({ scope: Scope.REQUEST })
export class RocketsDataLoader extends DataLoader<string, Rocket> {
  constructor(private readonly rocketsService: RocketsService) {
    super((ids: string[]) => {
      return this.rocketsService.getRocketsByIds(ids);
    });
  }
}
