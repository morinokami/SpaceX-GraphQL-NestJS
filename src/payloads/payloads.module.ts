import { Module } from '@nestjs/common';
import { PayloadsService } from './payloads.service';
import { PayloadsResolver } from './payloads.resolver';
import { PayloadsDataLoader } from './payloads.dataloader';

@Module({
  providers: [PayloadsService, PayloadsResolver, PayloadsDataLoader],
  exports: [PayloadsDataLoader],
})
export class PayloadsModule {}
