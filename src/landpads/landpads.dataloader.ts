import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { LandpadsService } from './landpads.service';
import { Landpad } from './models/landpad.model';

@Injectable({ scope: Scope.REQUEST })
export class LandpadsDataLoader extends DataLoader<string, Landpad> {
  constructor(private readonly landpadsService: LandpadsService) {
    super((ids: string[]) => {
      return this.landpadsService.getLandpadsByIds(ids);
    });
  }
}
