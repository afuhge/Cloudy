import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowCurrentWeatherDetailsService {
  public showDetails$: Observable<boolean> = new Observable<boolean>();
  private showDetailsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor () {
    this.showDetails$ = this.showDetailsSubject.asObservable();
  }

  public show (): void {
    this.showDetailsSubject.next(true);
  }

  public hide (): void {
    this.showDetailsSubject.next(false);
  }
}
