import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle, faHandPointRight} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  public warning: IconDefinition = faExclamationTriangle;
  public homeUrl: string = '/home';
  public arrow: IconDefinition = faHandPointRight;

  constructor(
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    document.body.classList.remove('page-not-found');
  }

  ngOnInit(): void {
    document.body.classList.add('page-not-found');
  }



  public navigateToHome(): void {
    this.router.navigateByUrl(this.homeUrl).then(() => {
      // window.location.reload();
    });
  }
}
