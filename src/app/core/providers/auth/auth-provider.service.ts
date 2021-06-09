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

  private authenticated: boolean[];
  private currentUser: any;

  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.authenticated = [false];
    this.currentUser = null;
  }

  isAuthenticated(ruta: number): boolean {
    if (ruta === 1) { //Admin
      return this.authenticated[0];
    } else {
      if (ruta === 2) { //Pacient
        return this.authenticated[1];
      } else {
        if (ruta === 3) { //Specialist
          return this.authenticated[2];
        }
      }
    }
    return false;
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
                user: data.user._id,
                role: data.user.role
              };
              this.tokenService.addToken(token);
              this.authenticated[1] = true;
                this.authenticated[0] = false;
                this.authenticated[2] = false;
              this.router.navigate(['paciente/citas']);
            } else {
              throw (this.router.navigate(['visitor/inicio']));
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
                user: data.user._id,
                role: data.user.role
              };
              this.tokenService.addToken(token);
              this.authenticated[2] = true;
                this.authenticated[0] = false;
                this.authenticated[1] = false;
                this.router.navigate(['doctor/citas']);
            } else {
              throw (this.router.navigate(['visitor/inicio']));
            }
          })
        );
    }
  }

  public logout(): void{
    this.currentUser = null;
    this.authenticated = [false];
    sessionStorage.removeItem('credentials');
    this.router.navigate(['visitor/inicio']);
  }

}