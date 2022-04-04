import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryOptionsInput } from 'src/common';
import { Ship as _Ship } from 'src/generated';
import { PaginatedShips } from 'src/ships/models/paginated-ships.model';
import { Ship } from 'src/ships/models/ship.model';

class ShipsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  private convertToShip(ship: _Ship): Ship {
    return {
      id: ship.id,
      name: ship.name,
      legacyId: ship.legacy_id,
      model: ship.model,
      type: ship.type,
      roles: ship.roles,
      active: ship.active,
      imo: ship.imo,
      mmsi: ship.mmsi,
      abs: ship.abs,
      class: ship.class,
      massLbs: ship.mass_lbs,
      yearBuilt: ship.year_built,
      homePort: ship.home_port,
      status: ship.status,
      speedKn: ship.speed_kn,
      courseDeg: ship.course_deg,
      latitude: ship.latitude,
      longitude: ship.longitude,
      lastAisUpdate: ship.last_ais_update,
      link: ship.link,
      image: ship.image,
      launches: [],
      launchIds: ship.launches,
    };
  }

  async getAllShips(): Promise<Ship[]> {
    const ships = await this.get<_Ship[]>('ships');
    return ships.map((ship) => this.convertToShip(ship));
  }

  async getShip(id: string): Promise<Ship> {
    const ship = await this.get<_Ship>(`ships/${id}`);
    return this.convertToShip(ship);
  }

  async getShips(options: QueryOptionsInput): Promise<PaginatedShips> {
    const ships = await this.post<PaginatedShips>('ships/query', { options });
    return {
      ...ships,
      docs: ships.docs.map((ship) => this.convertToShip(ship)),
    };
  }
}

export default ShipsAPI;
