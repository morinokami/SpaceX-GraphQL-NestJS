import { Module } from '@nestjs/common';
import { CapsulesResolver } from './capsules.resolver';

@Module({
  providers: [CapsulesResolver],
})
export class CapsulesModule {}
