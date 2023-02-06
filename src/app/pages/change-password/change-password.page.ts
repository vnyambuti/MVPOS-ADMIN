import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  passwordForm: FormGroup;
  loading = false
  constructor(private fb: FormBuilder, private route: Router, private router: ActivatedRoute, private httpservice: GeneralService) {

  }

  ngOnInit() {
    const code = localStorage.getItem('code')
    if (!code) {
      this.route.navigate(['/mobile-verify'])
    }
    this.passwordForm = this.fb.group({
      code: [localStorage.getItem('code'), [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required]
    }, { validator: this.ConfirmedValidator('password', 'password_confirmation') }
    )
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  get f() {
    return this.passwordForm.controls;
  }

  // goBack() {
  //     this.navCtrl.back();
  // }
  newPassword() {
    try {
      this.loading = true
     
      this.httpservice.postWithoutHeadersData(environment.url + 'password-changed', this.passwordForm.value).subscribe((res: any) => {
        this.loading = false
        if (!res.success) {
          this.httpservice.presentToast(res.message)

        } else {
          localStorage.removeItem('code');
          this.httpservice.presentSuccessToast(res.message,"bottom")
          this.route.navigate(['login'])
        }
      })
    } catch (error) {
      this.loading = false;
      this.httpservice.presentToast(error)
    }

  }
}
