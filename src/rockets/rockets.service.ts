import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { DefaultService, Rocket as _Rocket } from 'src/generated';
import { PaginatedRockets } from './models/paginated-rockets.model';
import { Rocket } from './models/rocket.model';

@Injectable()
export class RocketsService {
  private convertToRocket(rocket: _Rocket): Rocket {
    return {
      id: rocket.id,
      name: rocket.name,
      type: rocket.type,
      active: rocket.active,
      stages: rocket.stages,
      boosters: rocket.boosters,
      costPerLaunch: rocket.cost_per_launch,
      successRatePct: rocket.success_rate_pct,
      firstFlight: rocket.first_flight,
      country: rocket.country,
      company: rocket.company,
      height: rocket.height,
      diameter: rocket.diameter,
      mass: rocket.mass,
      payloadWeights: rocket.payload_weights,
      firstStage: {
        reusable: rocket.first_stage.reusable,
        engines: rocket.first_stage.engines,
        fuelAmountTons: rocket.first_stage.fuel_amount_tons,
        burnTimeSec: rocket.first_stage.burn_time_sec,
        thrustSeaLevel: rocket.first_stage.thrust_sea_level,
        thrustVacuum: rocket.first_stage.thrust_vacuum,
      },
      secondStage: {
        reusable: rocket.second_stage.reusable,
        engines: rocket.second_stage.engines,
        fuelAmountTons: rocket.second_stage.fuel_amount_tons,
        burnTimeSec: rocket.second_stage.burn_time_sec,
        thrust: {
          kN: rocket.second_stage.thrust.kN,
          lbf: rocket.second_stage.thrust.lbf,
        },
        payloads: {
          option1: rocket.second_stage.payloads.option_1,
          compositeFairing: {
            height: rocket.second_stage.payloads.composite_fairing.height,
            diameter: rocket.second_stage.payloads.composite_fairing.diameter,
          },
        },
      },
      engines: {
        number: rocket.engines.number,
        type: rocket.engines.type,
        version: rocket.engines.version,
        layout: rocket.engines.layout,
        isp: {
          seaLevel: rocket.engines.isp.sea_level,
          vacuum: rocket.engines.isp.vacuum,
        },
        engineLossMax: rocket.engines.engine_loss_max,
        propellant1: rocket.engines.propellant_1,
        propellant2: rocket.engines.propellant_2,
        thrustSeaLevel: rocket.engines.thrust_sea_level,
        thrustVacuum: rocket.engines.thrust_vacuum,
        thrustToWeight: rocket.engines.thrust_to_weight,
      },
      landingLegs: {
        number: rocket.landing_legs.number,
        material: rocket.landing_legs.material,
      },
      flickrImages: rocket.flickr_images,
      wikipedia: rocket.wikipedia,
      description: rocket.description,
    };
  }

  async getAllRockets(): Promise<Rocket[]> {
    const rockets = await DefaultService.getAllRockets();
    return rockets.map((rocket) => this.convertToRocket(rocket));
  }

  async getRocket(id: string): Promise<Rocket> {
    const rocket = await DefaultService.getOneRocket(id);
    return this.convertToRocket(rocket);
  }

  async getRockets(options: QueryOptionsInput): Promise<PaginatedRockets> {
    const rockets = await DefaultService.queryRockets({ options });
    return {
      ...rockets,
      docs: rockets.docs.map((rocket) => this.convertToRocket(rocket)),
    };
  }
}
