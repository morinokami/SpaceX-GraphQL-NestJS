import { Module } from '@nestjs/common';
import { PayloadsResolver } from './payloads.resolver';

@Module({
  providers: [PayloadsResolver],
})
export class PayloadsModule {}
