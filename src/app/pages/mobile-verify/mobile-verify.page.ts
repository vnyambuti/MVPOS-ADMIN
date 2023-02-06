import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.page.html',
  styleUrls: ['./mobile-verify.page.scss'],
})
export class MobileVerifyPage implements OnInit {

  loading=false;
  constructor(private route: Router, private loc: Location,private httpservice:GeneralService) { }

  ngOnInit() {
  }

  onOtpChange(eve) {
    try {
     const res={
       code:eve
     }
 
     if (eve.length === 6) {
       this.loading=true;
       this.httpservice.postData(environment.url +'resetcode',res).subscribe((res:any)=>{
         this.loading=false
         if (!res.success) {
           this.httpservice.presentToast(res.error)
         } else {
           this.httpservice.presentSuccessToast(res.message,"bottom")
         localStorage.setItem('code',res.code)
           this.route.navigate(['/change-password'])
         }
       })
     }
    } catch (error) {
     this.loading=false
     this.httpservice.presentToast(error)
    }
   }
  goToTabs() {
      this.route.navigate(['/tabs']);
  }
  goBack(){
    this.loc.back();
  }

}
