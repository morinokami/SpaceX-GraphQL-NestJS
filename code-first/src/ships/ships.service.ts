import { Injectable } from '@nestjs/common';
import { DefaultService } from 'generated';
import { Ship } from './models/ship.model';

@Injectable()
export class ShipsService {
  async getAllShips(): Promise<Ship[]> {
    const ships = await DefaultService.getAllShips();
    return ships.map((ship) => {
      return {
        id: ship.id as string,
      };
    });
  }

  async getShipsByIds(ids: string[]): Promise<Ship[]> {
    const ships = await Promise.all(
      ids.map((id) => {
        return DefaultService.getAShip(id);
      }),
    );
    return ships.map((ship) => {
      return {
        id: ship.id as string,
      };
    });
  }
}
