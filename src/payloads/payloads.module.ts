import { Module } from '@nestjs/common';
import { PayloadsService } from './payloads.service';
import { PayloadsResolver } from './payloads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';
import { CapsulesModule } from 'src/capsules/capsules.module';

@Module({
  imports: [LaunchesModule, CapsulesModule],
  providers: [PayloadsService, PayloadsResolver],
})
export class PayloadsModule {}
