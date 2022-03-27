import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { DefaultService, Landpad as _Landpad } from 'src/generated';
import { Landpad, LandpadStatus } from './models/landpad.model';
import { PaginatedLandpads } from './models/paginated-landpad.model';

@Injectable()
export class LandpadsService {
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
    const landpads = await DefaultService.getAllLandpads();
    return landpads.map((landpad) => this.convertToLandpad(landpad));
  }

  async getLandpad(id: string): Promise<Landpad> {
    const landpad = await DefaultService.getOneLandpad(id);
    return this.convertToLandpad(landpad);
  }

  async getLandpads(options: QueryOptionsInput): Promise<PaginatedLandpads> {
    const landpads = await DefaultService.queryLandpads({ options });
    return {
      ...landpads,
      docs: landpads.docs.map((landpad) => this.convertToLandpad(landpad)),
    };
  }
}
