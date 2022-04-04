import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Payload as _Payload } from 'src/generated';
import { PaginatedPayload } from 'src/payloads/models/paginated-payload.model';
import { Payload } from 'src/payloads/models/payload.model';

class PayloadsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  private convertToPayload(payload: _Payload): Payload {
    return {
      id: payload.id,
      name: payload.name,
      type: payload.type,
      reused: payload.reused,
      launch: null,
      launchId: payload.launch,
      customers: payload.customers,
      noradIds: payload.norad_ids,
      nationalities: payload.nationalities,
      manufacturers: payload.manufacturers,
      massKg: payload.mass_kg,
      massLbs: payload.mass_lbs,
      orbit: payload.orbit,
      referenceSystem: payload.reference_system,
      regime: payload.regime,
      longitude: payload.longitude,
      semiMajorAxisKm: payload.semi_major_axis_km,
      eccentricity: payload.eccentricity,
      periapsisKm: payload.periapsis_km,
      apoapsisKm: payload.apoapsis_km,
      inclinationDeg: payload.inclination_deg,
      periodMin: payload.period_min,
      lifespanYears: payload.lifespan_years,
      epoch: payload.epoch,
      meanMotion: payload.mean_motion,
      raan: payload.raan,
      argOfPericenter: payload.arg_of_pericenter,
      meanAnomaly: payload.mean_anomaly,
      dragon: {
        capsule: null,
        capsuleId: payload.dragon.capsule,
        massReturnedKg: payload.dragon.mass_returned_kg,
        massReturnedLbs: payload.dragon.mass_returned_lbs,
        flightTimeSec: payload.dragon.flight_time_sec,
        manifest: payload.dragon.manifest,
        waterLanding: payload.dragon.water_landing,
        landLanding: payload.dragon.land_landing,
      },
    };
  }

  async getAllPayloads(): Promise<Payload[]> {
    const payloads = await this.get<_Payload[]>('payloads');
    return payloads.map((payload) => this.convertToPayload(payload));
  }

  async getPayload(id: string): Promise<Payload> {
    const payload = await this.get<_Payload>(`payloads/${id}`);
    return this.convertToPayload(payload);
  }

  async getPayloads(options: QueryOptionsInput): Promise<PaginatedPayload> {
    const payloads = await this.post<PaginatedPayload>('payloads/query', {
      options,
    });
    return {
      ...payloads,
      docs: payloads.docs.map((payload) => this.convertToPayload(payload)),
    };
  }
}

export default PayloadsAPI;
