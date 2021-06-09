import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpService } from '@core/services/http/http.service';
import { TokenService } from '@core/services/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  private authenticated: boolean;
  private currentUser: any;

  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.authenticated = false;
    this.currentUser = null;

    if (sessionStorage.getItem('credentials')){
      this.authenticated = true;
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  login(auth: { email: string, password: string }, opcion: number): Observable<any> {
    if (opcion == 1) {
      return this.httpService.post('/auth/login/pet-owner', {
        email: auth.email,
        password: auth.password
      })
        .pipe(
          tap((data: any) => {
            if ((data.user.role === 'petOwner')) {
              const token: string = data.access_token;
              this.currentUser = {
                user: data.authenticated,
                role: data.user.role
              };
              this.tokenService.addToken(token);
              this.authenticated = true;
              this.router.navigate(['paciente/citas']);
            } else {
              throw (new Error('Access denied!') && this.router.navigate(['visitor/inicio']));
            }
          })
        );
    } else {
      return this.httpService.post('/auth/login/specialist', {
        email: auth.email,
        password: auth.password
      })
        .pipe(
          tap((data: any) => {
            if ((data.user.role === 'specialist')) {
              const token: string = data.access_token;
              this.currentUser = {
                user: data.authenticated,
                role: data.user.role
              };
              this.tokenService.addToken(token);
              this.authenticated = true;
                this.router.navigate(['doctor/citas']);
            } else {
              throw (new Error('Access denied!') && this.router.navigate(['visitor/inicio']));
            }
          })
        );
    }
  }

  public logout(): void{
    this.currentUser = null;
    this.authenticated = false;
    sessionStorage.removeItem('credentials');
    this.router.navigate(['visitor/inicio']);
  }

}