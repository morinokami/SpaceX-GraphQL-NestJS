import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsResolver } from './rockets.resolver';
import { RocketsDataLoader } from './rockets.dataloader';

@Module({
  providers: [RocketsService, RocketsResolver, RocketsDataLoader],
  exports: [RocketsDataLoader],
})
export class RocketsModule {}
