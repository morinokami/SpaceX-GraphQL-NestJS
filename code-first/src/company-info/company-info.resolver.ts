import { Query, Resolver } from '@nestjs/graphql';
import { CompanyInfoService } from './company-info.service';
import { CompanyInfo } from './models/company-info.model';

@Resolver(() => CompanyInfo)
export class CompanyInfoResolver {
  constructor(private readonly companyInfoService: CompanyInfoService) {}

  @Query(() => CompanyInfo, { description: 'Company info' })
  async companyInfo(): Promise<CompanyInfo> {
    return this.companyInfoService.getCompanyInfo();
  }
}
