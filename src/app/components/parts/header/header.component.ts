import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faBars, faCloud, faCog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cloud: IconDefinition = faCloud;
  public menu: IconDefinition = faBars;
  public coq: IconDefinition = faCog;

  public show = false;
  public settingsUrl: string = '/settings';
  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(): void {
   this.show = !this.show;
  }
}
