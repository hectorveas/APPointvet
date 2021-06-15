import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientGuard implements CanActivate {

  constructor(
    private authProvider: AuthProviderService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authProvider.isAuthenticated('patient')) {
        return true;
      } else {
        console.log(this.authProvider.isAuthenticated('patient'), 'guardia');
        this.router.navigate(['visitor/inicio']);
        return false;
      }
  }
}