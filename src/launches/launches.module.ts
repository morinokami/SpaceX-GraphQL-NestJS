import { forwardRef, Module } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { LaunchesResolver } from './launches.resolver';
import { ShipsModule } from 'src/ships/ships.module';
import { CapsulesModule } from 'src/capsules/capsules.module';
import { LaunchesDataLoader } from './launches.dataloader';
import { RocketsModule } from 'src/rockets/rockets.module';
import { CrewModule } from 'src/crew/crew.module';

@Module({
  imports: [
    ShipsModule,
    forwardRef(() => CapsulesModule),
    RocketsModule,
    CrewModule,
  ],
  providers: [LaunchesService, LaunchesResolver, LaunchesDataLoader],
  exports: [LaunchesDataLoader],
})
export class LaunchesModule {}
