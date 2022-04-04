import { Module } from '@nestjs/common';
import { RocketsResolver } from './rockets.resolver';

@Module({
  providers: [RocketsResolver],
})
export class RocketsModule {}
