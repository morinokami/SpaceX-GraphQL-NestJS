import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { CoresService } from './cores.service';
import { Core } from './models/core.model';

@Injectable({ scope: Scope.REQUEST })
export class CoresDataLoader extends DataLoader<string, Core> {
  constructor(private readonly coresService: CoresService) {
    super((ids: string[]) => {
      return this.coresService.getCoresByIds(ids);
    });
  }
}
