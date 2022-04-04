import { Injectable } from '@nestjs/common';
import { DefaultService, Landpad as _Landpad } from 'src/generated';
import { Landpad, LandpadStatus } from './models/landpad.model';

// TODO: Delete this file
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

  async getLandpadsByIds(ids: string[]): Promise<Landpad[]> {
    const landpads = await Promise.all(
      ids.map((id) => DefaultService.getOneLandpad(id)),
    );
    return landpads.map((landpad) => this.convertToLandpad(landpad));
  }
}
