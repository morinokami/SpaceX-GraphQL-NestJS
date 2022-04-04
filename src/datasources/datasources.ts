import CapsulesAPI from './capsules-api';
import CompanyInfoAPI from './company-info-api';
import CoresAPI from './cores-api';

export interface DataSources {
  capsulesAPI: CapsulesAPI;
  companyInfoAPI: CompanyInfoAPI;
  coresAPI: CoresAPI;
}
