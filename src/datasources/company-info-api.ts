import { RESTDataSource } from 'apollo-datasource-rest';
import { CompanyInfo } from 'src/company-info/models/company-info.model';
import { Company } from 'src/generated';

class CompanyInfoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

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
    const companyInfo = await this.get<Company>('company');
    return this.convertToCompanyInfo(companyInfo);
  }
}

export default CompanyInfoAPI;
