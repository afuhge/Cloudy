import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faCloud, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public search: IconDefinition = faSearch;
  public reset: IconDefinition = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
