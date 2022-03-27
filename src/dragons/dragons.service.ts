import { Injectable } from '@nestjs/common';
import { QueryOptionsInput } from 'src/common';
import { DefaultService, Dragon as _Dragon } from 'src/generated';
import { Dragon } from './models/dragon.model';
import { PaginatedDragons } from './models/paginated-dragons.model';

@Injectable()
export class DragonsService {
  private convertToDragon(dragon: _Dragon): Dragon {
    return {
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      active: dragon.active,
      crewCapacity: dragon.crew_capacity,
      sidewallAngleDeg: dragon.sidewall_angle_deg,
      orbitDurationYr: dragon.orbit_duration_yr,
      dryMassKg: dragon.dry_mass_kg,
      dryMassLb: dragon.dry_mass_lb,
      firstFlight: dragon.first_flight,
      heatShield: {
        material: dragon.heat_shield.material,
        sizeMeters: dragon.heat_shield.size_meters,
        tempDegrees: dragon.heat_shield.temp_degrees,
        devPartner: dragon.heat_shield.dev_partner,
      },
      thrusters: dragon.thrusters.map((thruster) => ({
        type: thruster.type,
        amount: thruster.amount,
        pods: thruster.pods,
        fuel1: thruster.fuel_1,
        fuel2: thruster.fuel_2,
        isp: thruster.isp,
        thrust: {
          kN: thruster.thrust.kN,
          lbf: thruster.thrust.lbf,
        },
      })),
      launchPayloadMass: {
        kg: dragon.launch_payload_mass.kg,
        lb: dragon.launch_payload_mass.lb,
      },
      launchPayloadVol: {
        cubicMeters: dragon.launch_payload_vol.cubic_meters,
        cubicFeet: dragon.launch_payload_vol.cubic_feet,
      },
      returnPayloadMass: {
        kg: dragon.return_payload_mass.kg,
        lb: dragon.return_payload_mass.lb,
      },
      returnPayloadVol: {
        cubicMeters: dragon.return_payload_vol.cubic_meters,
        cubicFeet: dragon.return_payload_vol.cubic_feet,
      },
      pressurizedCapsule: {
        payloadVolume: {
          cubicMeters: dragon.pressurized_capsule.payload_volume.cubic_meters,
          cubicFeet: dragon.pressurized_capsule.payload_volume.cubic_feet,
        },
      },
      trunk: {
        trunkVolume: {
          cubicMeters: dragon.trunk.trunk_volume.cubic_meters,
          cubicFeet: dragon.trunk.trunk_volume.cubic_feet,
        },
        cargo: {
          solarArray: dragon.trunk.cargo.solar_array,
          unpressurizedCargo: dragon.trunk.cargo.unpressurized_cargo,
        },
      },
      heightWTrunk: {
        meters: dragon.height_w_trunk.meters,
        feet: dragon.height_w_trunk.feet,
      },
      diameter: {
        meters: dragon.diameter.meters,
        feet: dragon.diameter.feet,
      },
      flickrImages: dragon.flickr_images,
      wikipedia: dragon.wikipedia,
      description: dragon.description,
    };
  }

  async getAllDragons(): Promise<Dragon[]> {
    const dragons = await DefaultService.getAllDragons();
    return dragons.map((dragon) => this.convertToDragon(dragon));
  }

  async getDragon(id: string): Promise<Dragon> {
    const dragon = await DefaultService.getOneDragon(id);
    return this.convertToDragon(dragon);
  }

  async getDragons(options: QueryOptionsInput): Promise<PaginatedDragons> {
    const dragons = await DefaultService.queryDragons({ options });
    return {
      ...dragons,
      docs: dragons.docs.map((dragon) => this.convertToDragon(dragon)),
    };
  }
}
