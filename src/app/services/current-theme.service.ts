import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentThemeService {
  public isDarkTheme$: Observable<boolean> = new Observable<boolean>();
  private isDarkSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor () {
    this.isDarkTheme$ = this.isDarkSubject.asObservable();
  }

  public setDarkTheme (): void {
    this.isDarkSubject.next(true);
  }

  public setLightTheme (): void {
    this.isDarkSubject.next(false);
  }
}
