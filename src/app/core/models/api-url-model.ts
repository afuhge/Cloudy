import { IApiUrl } from '../definitions/api-url-interface';

export class ApiUrl implements IApiUrl {
  public url: string;
  public paramName: string[];

  constructor(newUrl: string, newParameters?: string[]) {
    this.url = newUrl;
    this.paramName = newParameters;
  }
}
