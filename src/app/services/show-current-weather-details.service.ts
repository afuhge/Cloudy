import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowCurrentWeatherDetailsService {
  public showDetails: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
