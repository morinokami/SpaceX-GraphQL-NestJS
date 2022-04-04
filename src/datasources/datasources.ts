import { LaunchpadsAPI } from '.';
import CapsulesAPI from './capsules-api';
import CompanyInfoAPI from './company-info-api';
import CoresAPI from './cores-api';
import CrewAPI from './crew-api';
import DragonsAPI from './dragons-api';
import HistoryAPI from './history-api';
import LandpadsAPI from './landpads-api';
import LaunchesAPI from './launches-api';

export interface DataSources {
  capsulesAPI: CapsulesAPI;
  companyInfoAPI: CompanyInfoAPI;
  coresAPI: CoresAPI;
  crewAPI: CrewAPI;
  dragonsAPI: DragonsAPI;
  historyAPI: HistoryAPI;
  landpadsAPI: LandpadsAPI;
  launchesAPI: LaunchesAPI;
  launchpadsAPI: LaunchpadsAPI;
}
