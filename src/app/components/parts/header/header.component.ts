import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCloud, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { includes } from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public cloud: IconDefinition = faCloud;
  public menu: IconDefinition = faBars;
  public info: IconDefinition = faInfoCircle;

  public show = false;
  public infoUrl = '/info';
  private snapshot: ActivatedRouteSnapshot;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public openMenu (): void {
    this.show = !this.show;
  }

  public navigate (): void {
    this.snapshot = this.route.snapshot;
    const path: string = this.snapshot.firstChild.routeConfig.path;
    includes(path, 'home')
      ? window.location.reload()
      : this.router.navigate(['/home']).then();
  }
}
