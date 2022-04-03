import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { LaunchpadsService } from './launchpads.service';
import { Launchpad } from './models/launchpad.model';

@Injectable({ scope: Scope.REQUEST })
export class LaunchpadsDataLoader extends DataLoader<string, Launchpad> {
  constructor(private readonly launchpadsService: LaunchpadsService) {
    super((ids: string[]) => {
      return this.launchpadsService.getLaunchpadsByIds(ids);
    });
  }
}
