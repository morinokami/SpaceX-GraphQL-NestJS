import { Module } from '@nestjs/common';
import { PayloadsService } from './payloads.service';
import { PayloadsResolver } from './payloads.resolver';
import { LaunchesModule } from 'src/launches/launches.module';

@Module({
  imports: [LaunchesModule],
  providers: [PayloadsService, PayloadsResolver],
})
export class PayloadsModule {}
