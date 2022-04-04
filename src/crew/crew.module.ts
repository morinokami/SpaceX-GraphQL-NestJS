import { Module } from '@nestjs/common';
import { CrewResolver } from './crew.resolver';

@Module({
  providers: [CrewResolver],
})
export class CrewModule {}
