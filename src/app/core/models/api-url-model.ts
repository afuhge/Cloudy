import { IApiUrl } from '../definitions/api-url-interface';

export class ApiUrl implements IApiUrl {
  public url: string;

  constructor (newUrl: string) {
    this.url = newUrl;
  }
}
