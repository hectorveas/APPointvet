import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';
import { TokenService } from '@core/services/token/token.service';

@Component({
  selector: 'patient-user-me-screen',
  templateUrl: './user-me-screen.component.html',
  styleUrls: ['./user-me-screen.component.less']
})
export class UserMeScreenComponent implements OnInit {

  public user: any;

  constructor(
    private authProvider: AuthProviderService,
    private tokenService: TokenService
  ) {
    this.user = this.getCurrentUser();
  }

  ngOnInit(): void {
  }

  public getCurrentUser(): any {
    this.user = this.authProvider.getCurrentUser();
    if ((this.user === null) || (this.user === undefined)) {
      this.user = this.tokenService.getUser();
      if (this.user) return this.user;
    }
    return this.user;
  };

}
