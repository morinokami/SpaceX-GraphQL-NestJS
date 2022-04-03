import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { Crew as _Crew, DefaultService } from 'src/generated';
import { Crew, CrewStatus } from './models/crew.model';
import { PaginatedCrew } from './models/paginated-crew-model';

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

  async getAllCrew(): Promise<Crew[]> {
    const crew = await DefaultService.getAllCrewMembers();
    return crew.map((crew) => this.convertToCrew(crew));
  }

  async getCrew(id: string): Promise<Crew> {
    const crew = await DefaultService.getOneCrewMember(id);
    return this.convertToCrew(crew);
  }

  async getCrews(options: QueryOptionsInput): Promise<PaginatedCrew> {
    const crew = await DefaultService.queryCrewMembers({ options });
    return {
      ...crew,
      docs: crew.docs.map((crew) => this.convertToCrew(crew)),
    };
  }

  async getCrewsByIds(ids: string[]): Promise<Crew[]> {
    const crew = await Promise.all(
      ids.map((id) => DefaultService.getOneCrewMember(id)),
    );
    return crew.map((crew) => this.convertToCrew(crew));
  }
}
