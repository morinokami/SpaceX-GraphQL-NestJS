import { Injectable } from '@nestjs/common';
import { DefaultService, Roadster } from 'src/generated';
import { RoadsterInfo } from './models/roadster-info.model';

@Injectable()
export class RoadsterInfoService {
  private convertToRoadsterInfo(roadster: Roadster): RoadsterInfo {
    return {
      id: roadster.id,
      name: roadster.name,
      launchDateUtc: roadster.launch_date_utc,
      launchDateUnix: roadster.launch_date_unix,
      launchMassKg: roadster.launch_mass_kg,
      launchMassLbs: roadster.launch_mass_lbs,
      noradId: roadster.norad_id,
      epochJd: roadster.epoch_jd,
      orbitType: roadster.orbit_type,
      apoapsisAu: roadster.apoapsis_au,
      periapsisAu: roadster.periapsis_au,
      semiMajorAxisAu: roadster.semi_major_axis_au,
      eccentricity: roadster.eccentricity,
      inclination: roadster.inclination,
      longitude: roadster.longitude,
      periapsisArg: roadster.periapsis_arg,
      periodDays: roadster.period_days,
      speedKph: roadster.speed_kph,
      speedMph: roadster.speed_mph,
      earthDistanceKm: roadster.earth_distance_km,
      earthDistanceMi: roadster.earth_distance_mi,
      marsDistanceKm: roadster.mars_distance_km,
      marsDistanceMi: roadster.mars_distance_mi,
      flickrImages: roadster.flickr_images,
      wikipedia: roadster.wikipedia,
      video: roadster.video,
      details: roadster.details,
    };
  }

  async getRoadsterInfo(): Promise<RoadsterInfo> {
    const roadsterInfo = await DefaultService.getRoadsterInfo();
    return this.convertToRoadsterInfo(roadsterInfo);
  }
}
