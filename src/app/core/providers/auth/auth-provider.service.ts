import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '@core/models/doctor.model';
import { Paciente } from '@core/models/paciente.model';
import { HttpService } from '@core/services/http/http.service';
import { TokenService } from '@core/services/token/token.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  private authenticated: boolean;
  private currentUser: any;

  constructor(private httpService: HttpService, private tokenService: TokenService, private router: Router) {
    this.authenticated = false;
    this.currentUser = null;

    if (sessionStorage.getItem('credentials')) {
      this.authenticated = true;
    }
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public async getCurrentUser(): Promise<Paciente | Doctor>{
    if (!this.currentUser){
      this.currentUser = await this.httpService.get<Paciente | Doctor>('').toPromise();
    }
    return this.currentUser;
  }

  public login(auth: { email: string, password: string }): Observable<any> {
    return this.httpService.post<any>('/login', {
      email: auth.email,
      password: auth.password,
      gethash: true
    })
    .pipe(
      tap((data: any) => {
        this.currentUser = data.user;
        const token: string = data.token;
        this.tokenService.addToken(token);
        this.authenticated = true;
        if (data.especialidad) {
          this.router.navigate(['doctor/home']);
        }
        else { this.router.navigate(['paciente/home']); }
      })
    );
  }

  public logout(): void{
    this.currentUser = null;
    this.authenticated = false;
    sessionStorage.removeItem('credentials');
    this.router.navigate(['visitor/login']);
  }
}