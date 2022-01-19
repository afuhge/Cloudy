import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { faGrinWink } from '@fortawesome/free-regular-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  meteor: IconDefinition = faMeteor;
  smiley: IconDefinition = faGrinWink;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
