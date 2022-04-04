import { Context, Query, Resolver } from '@nestjs/graphql';
import { DataSources } from 'src/datasources';
import { CompanyInfo } from './models/company-info.model';

@Resolver(() => CompanyInfo)
export class CompanyInfoResolver {
  @Query(() => CompanyInfo, { description: 'Company info' })
  async companyInfo(
    @Context('dataSources') dataSources: DataSources,
  ): Promise<CompanyInfo> {
    return dataSources.companyInfoAPI.getCompanyInfo();
  }
}
