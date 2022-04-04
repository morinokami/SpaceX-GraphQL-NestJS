import CapsulesAPI from './capsules-api';
import CompanyInfoAPI from './company-info-api';
import CoresAPI from './cores-api';
import CrewAPI from './crew-api';
import DragonsAPI from './dragons-api';
import HistoryAPI from './history-api';

export interface DataSources {
  capsulesAPI: CapsulesAPI;
  companyInfoAPI: CompanyInfoAPI;
  coresAPI: CoresAPI;
  crewAPI: CrewAPI;
  dragonsAPI: DragonsAPI;
  historyAPI: HistoryAPI;
}
