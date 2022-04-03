import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { CrewService } from './crew.service';
import { Crew } from './models/crew.model';

@Injectable({ scope: Scope.REQUEST })
export class CrewDataLoader extends DataLoader<string, Crew> {
  constructor(private readonly crewService: CrewService) {
    super((ids: string[]) => {
      return this.crewService.getCrewsByIds(ids);
    });
  }
}
