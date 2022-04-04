import { Module } from '@nestjs/common';
import { CompanyInfoResolver } from './company-info.resolver';

@Module({
  providers: [CompanyInfoResolver],
})
export class CompanyInfoModule {}
