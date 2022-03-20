import { Injectable } from '@nestjs/common';
import { DefaultService } from 'src/generated';
import { CompanyInfo } from './models/company-info.model';

@Injectable()
export class CompanyInfoService {
  async getCompanyInfo(): Promise<CompanyInfo> {
    const companyInfo = await DefaultService.getCompanyInfo();
    return {
      id: companyInfo.id,
      name: companyInfo.name,
      founder: companyInfo.founder,
      founded: companyInfo.founded,
      employees: companyInfo.employees,
      vehicles: companyInfo.vehicles,
      launchSites: companyInfo.launch_sites,
      testSites: companyInfo.test_sites,
      ceo: companyInfo.ceo,
      cto: companyInfo.cto,
      coo: companyInfo.coo,
      ctoPropulsion: companyInfo.cto_propulsion,
      valuation: companyInfo.valuation,
      headquarters: companyInfo.headquarters,
      links: {
        ...companyInfo.links,
        elonTwitter: companyInfo.links.elon_twitter,
      },
      summary: companyInfo.summary,
    };
  }
}
