import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';
import { FormService } from '@core/services/form/form.service';
import { NotificationService } from '../../../core/services/notification/notification.service';


@Component({
  selector: 'visitor-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  public checkoutForm: FormGroup;
  public opcion: number;
  public passwordVisibility: boolean;


  constructor(
    private notificationService: NotificationService,
    private formService: FormService,
    private authService: AuthProviderService,
    private router: Router
  ) {
    this.opcion = 1;
    this.checkoutForm;
    this.passwordVisibility = false;
    this.createFormGroup();
  }

  ngOnInit(): void {
  }


  public setOption(n: number): void {
    this.opcion = n;
  };

  private createFormGroup() {
    this.checkoutForm = this.formService.buildFormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(9)]),
    })
  }

  public controlIsRequired(formControlName: string): boolean {
    return this.formService.controlIsRequired(this.checkoutForm, formControlName);
  }

  public controlIsInvalid(formControlName: string): boolean {
    return this.formService.controlIsInvalid(this.checkoutForm, formControlName);
  }

  public controlIsInvalidEmail(formControlName: string): boolean {
    return this.formService.controlIsInvalidEmail(this.checkoutForm, formControlName);
  }

  public controlIsInvalidPattern(formControlName: string): boolean {
    return this.formService.controlIsInvalidPattern(this.checkoutForm, formControlName);
  }

  public controlIsInvalidLength(formControlName: string): boolean {
    return this.formService.controlIsInvalidLength(this.checkoutForm, formControlName);
  }

  public async login(form: FormGroupDirective): Promise<void> {
    if (this.checkoutForm?.valid) {
        try {
            await this.authService.login(this.checkoutForm?.value, this.opcion).toPromise();
        } catch (error) {
            if (error.message === 'Access denied!') {
                this.notificationService.error('Tu cuenta no esta registrada');
                return;
            } else {
                this.notificationService.error('Los datos ingresados son incorrectos!');
                return;
            }
        }
    }
  }

  public togglePasswordVisibility(): void {
    this.passwordVisibility = !this.passwordVisibility;
  }

  public goToRegister(opcion: number) {
    if (opcion === 1) { //Paciente
      this.router.navigate(['visitor/registrate']);
    } else {
      this.router.navigate(['visitor/registratePersonal']);
    }
  }
}