import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

    emailForm: FormGroup;
    loading: boolean = false;
    // regex = /^(?:254|\+254|0)?([0-7](?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
    constructor(private route: Router, private navCtrl: NavController, private httpservice: GeneralService, private fb: FormBuilder) { }

    ngOnInit() {
        this.emailForm = this.fb.group({
            email: ['', [Validators.required, Validators.email,
            ]],
        })
    }

    goToMobileVerify() {
        this.route.navigate(['/mobile-verify']);
    }

    
    sendRequest() {
        try {
            this.loading = true
            this.emailForm.invalid;
            this.httpservice.postData(environment.url + 'reset', this.emailForm.value).subscribe((g: any) => {
                console.log(g);
                this.loading = false;
                
                if (!g.success) {
                  this.httpservice.presentToast(g.error)
                } else {
                      this.httpservice.presentSuccessToast(g.message,'bottom').then(()=>{
                        this.route.navigate(['/mobile-verify']);
                      });  
                }

                // this.close()
            }, err => {
                this.emailForm.valid
                this.loading = false;
               this.httpservice.presentToast(err)

            });
        } catch (error) {
            this.loading = false
            this.emailForm.valid
            this.httpservice.presentToast(error)
        }

    }
    goToBack() {
        this.navCtrl.back();
    }
    goToVerify(){
        this.route.navigate(['/mobile-verify']);
    }
}
