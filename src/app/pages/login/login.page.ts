import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  loading=false;
  constructor(private route: Router, private fb: FormBuilder, private httpservice: GeneralService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

  }

  get f() { return this.loginForm.controls; }
  goToRegister() {
      this.route.navigate(['/register']);
  }

  goToForgot() {
      this.route.navigate(['/forgot']);
  }

  goToTabs() {
      this.route.navigate(['/tabs']);
  }

  onSubmit() {
    this.loading=true
    this.httpservice.postWithoutHeadersData(environment.url + 'login', this.loginForm.value).subscribe((res: any) => {

      console.log(res);
      if (res.success) {
        this.loading=false;
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.route.navigate(['']);
      } else {
        this.loading=false
       this.httpservice.presentToast(res.error);
       
      }
    })

  }

}
