import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { faBars, faCloud, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cloud: IconDefinition = faCloud;
  public menu: IconDefinition = faBars;
  public info: IconDefinition = faInfoCircle;

  public show = false;
  public infoUrl: string = '/info';
  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(): void {
   this.show = !this.show;
  }
}
