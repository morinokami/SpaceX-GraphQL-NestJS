import { Module } from '@nestjs/common';
import { CapsulesService } from './capsules.service';
import { CapsulesResolver } from './capsules.resolver';

@Module({
  providers: [CapsulesService, CapsulesResolver],
})
export class CapsulesModule {}
