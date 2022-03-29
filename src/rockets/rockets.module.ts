import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsResolver } from './rockets.resolver';

@Module({
  providers: [RocketsService, RocketsResolver]
})
export class RocketsModule {}
