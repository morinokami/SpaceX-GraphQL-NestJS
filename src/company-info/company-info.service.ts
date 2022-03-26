import { Injectable } from '@nestjs/common';
import { Company, DefaultService } from 'src/generated';
import { CompanyInfo } from './models/company-info.model';

@Injectable()
export class CompanyInfoService {
  private convertToCompanyInfo(company: Company): CompanyInfo {
    return {
      id: company.id,
      name: company.name,
      founder: company.founder,
      founded: company.founded,
      employees: company.employees,
      vehicles: company.vehicles,
      launchSites: company.launch_sites,
      testSites: company.test_sites,
      ceo: company.ceo,
      cto: company.cto,
      coo: company.coo,
      ctoPropulsion: company.cto_propulsion,
      valuation: company.valuation,
      headquarters: company.headquarters,
      links: {
        ...company.links,
        elonTwitter: company.links.elon_twitter,
      },
      summary: company.summary,
    };
  }

  async getCompanyInfo(): Promise<CompanyInfo> {
    const companyInfo = await DefaultService.getCompanyInfo();
    return this.convertToCompanyInfo(companyInfo);
  }
}
