import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { LaunchesService } from './launches.service';
import { Launch } from './models/launch.model';

@Injectable({ scope: Scope.REQUEST })
export class LaunchesDataLoader extends DataLoader<string, Launch> {
  constructor(private readonly launchesService: LaunchesService) {
    super((ids: string[]) => {
      return this.launchesService.getLaunchesByIds(ids);
    });
  }
}
