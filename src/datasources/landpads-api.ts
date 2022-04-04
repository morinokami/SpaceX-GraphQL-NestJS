import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Landpad as _Landpad } from 'src/generated';
import { Landpad, LandpadStatus } from 'src/landpads/models/landpad.model';
import { PaginatedLandpads } from 'src/landpads/models/paginated-landpad.model';

class LandpadsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  private convertToLandpad(landpad: _Landpad): Landpad {
    return {
      id: landpad.id,
      name: landpad.name,
      fullName: landpad.full_name,
      status: landpad.status as LandpadStatus,
      type: landpad.type,
      locality: landpad.locality,
      region: landpad.region,
      latitude: landpad.latitude,
      longitude: landpad.longitude,
      landingAttempts: landpad.landing_attempts,
      landingSuccesses: landpad.landing_successes,
      wikipedia: landpad.wikipedia,
      details: landpad.details,
      launches: [],
      launchIds: landpad.launches,
      images: landpad.images,
    };
  }

  async getAllLandpads(): Promise<Landpad[]> {
    const landpads = await this.get<_Landpad[]>('landpads');
    return landpads.map((landpad) => this.convertToLandpad(landpad));
  }

  async getLandpad(id: string): Promise<Landpad> {
    const landpad = await this.get<_Landpad>(`landpads/${id}`);
    return this.convertToLandpad(landpad);
  }

  async getLandpads(options: QueryOptionsInput): Promise<PaginatedLandpads> {
    const landpads = await this.post<PaginatedLandpads>('landpads/query', {
      options,
    });
    return {
      ...landpads,
      docs: landpads.docs.map((landpad) => this.convertToLandpad(landpad)),
    };
  }
}

export default LandpadsAPI;
