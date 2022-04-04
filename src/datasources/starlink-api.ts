import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Starlink as _Starlink } from 'src/generated';
import { PaginatedStarlinks } from 'src/starlink/models/paginated-starlinks.model';
import { Starlink } from 'src/starlink/models/starlink.model';

class StarlinkAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  private convertToStarlink(starlink: _Starlink): Starlink {
    return {
      id: starlink.id,
      version: starlink.version,
      launch: null,
      launchId: starlink.launch,
      longitude: starlink.longitude,
      latitude: starlink.latitude,
      heightKm: starlink.height_km,
      velocityKms: starlink.velocity_kms,
      spaceTrack: starlink.spaceTrack,
    };
  }

  async getAllStarlinks(): Promise<Starlink[]> {
    const starlinks = await this.get<_Starlink[]>('/starlink');
    return starlinks.map((starlink) => this.convertToStarlink(starlink));
  }

  async getStarlink(id: string): Promise<Starlink> {
    const starlink = await this.get<_Starlink>(`/starlink/${id}`);
    return this.convertToStarlink(starlink);
  }

  async getStarlinks(options: QueryOptionsInput): Promise<PaginatedStarlinks> {
    const starlinks = await this.post<PaginatedStarlinks>('/starlink/query', {
      options,
    });
    return {
      ...starlinks,
      docs: starlinks.docs.map((starlink) => this.convertToStarlink(starlink)),
    };
  }
}

export default StarlinkAPI;
