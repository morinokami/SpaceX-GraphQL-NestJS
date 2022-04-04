import { Injectable } from '@nestjs/common';
import { Crew as _Crew, DefaultService } from 'src/generated';
import { Crew, CrewStatus } from './models/crew.model';

// TODO: Delete this file
@Injectable()
export class CrewService {
  private convertToCrew(crew: _Crew): Crew {
    return {
      id: crew.id,
      name: crew.name,
      status: crew.status as CrewStatus,
      agency: crew.agency,
      image: crew.image,
      wikipedia: crew.wikipedia,
      launches: [],
      launchIds: crew.launches,
    };
  }

  async getCrewsByIds(ids: string[]): Promise<Crew[]> {
    const crew = await Promise.all(
      ids.map((id) => DefaultService.getOneCrewMember(id)),
    );
    return crew.map((crew) => this.convertToCrew(crew));
  }
}
