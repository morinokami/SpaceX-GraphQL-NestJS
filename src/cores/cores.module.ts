import { Module } from '@nestjs/common';

import { CoresResolver } from './cores.resolver';

@Module({
  providers: [CoresResolver],
})
export class CoresModule {}
