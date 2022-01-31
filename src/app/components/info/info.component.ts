import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { faGrinWink } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent {
  public meteor: IconDefinition = faMeteor;
  public smiley: IconDefinition = faGrinWink;

  constructor (
    private router: Router,
  ) { }

  public navigateToHome (): void {
    this.router.navigate(['/home']);
  }
}
