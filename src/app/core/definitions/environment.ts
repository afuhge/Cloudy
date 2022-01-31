import { IService } from './service-interface';

export interface IEnvironment {
  weatherForecastService?: IService;
  cityService?: IService;
}
