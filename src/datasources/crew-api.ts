import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Crew, CrewStatus } from 'src/crew/models/crew.model';
import { PaginatedCrew } from 'src/crew/models/paginated-crew-model';
import { Crew as _Crew } from 'src/generated';

class CrewAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

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
    const crew = await this.get<_Crew[]>('crew');
    return crew.map((crew) => this.convertToCrew(crew));
  }

  async getCrew(id: string): Promise<Crew> {
    const crew = await this.get<_Crew>(`crew/${id}`);
    return this.convertToCrew(crew);
  }

  async getCrews(options: QueryOptionsInput): Promise<PaginatedCrew> {
    const crew = await this.post<PaginatedCrew>('crew', { options });
    return {
      ...crew,
      docs: crew.docs.map((crew) => this.convertToCrew(crew)),
    };
  }
}

export default CrewAPI;
