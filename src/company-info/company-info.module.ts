import { Module } from '@nestjs/common';
import { CompanyInfoService } from './company-info.service';
import { CompanyInfoResolver } from './company-info.resolver';

@Module({
  providers: [CompanyInfoService, CompanyInfoResolver],
})
export class CompanyInfoModule {}
