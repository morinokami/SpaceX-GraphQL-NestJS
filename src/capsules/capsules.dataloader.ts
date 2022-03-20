import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { CapsulesService } from './capsules.service';
import { Capsule } from './models/capsule.model';

@Injectable({ scope: Scope.REQUEST })
export class CapsulesDataLoader extends DataLoader<string, Capsule> {
  constructor(private readonly capsulesService: CapsulesService) {
    super((ids: string[]) => {
      return this.capsulesService.getCapsulesByIds(ids);
    });
  }
}
