import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';
import { ShopPage } from '../shop/shop.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.page.html',
  styleUrls: ['./teller.page.scss'],
})
export class TellerPage implements OnInit {
  tabID = 1;
    slideCardOpts = {
        slidesPerView : 1.2
    };
    tellerForm:FormGroup;
    shop;
    loading=false;
  constructor(private fb:FormBuilder,private httpservice:GeneralService,private sho:ShopPage,private mdctrl:ModalController) { }
  // 'firstname',
  // 'lastname',
  // 'phone',
  // 'email',
  // 'password',
  ngOnInit() {
    this.shop = JSON.parse(localStorage.getItem('shop')).id;
    this.tellerForm = this.fb.group({
      shop_id: [this.shop],
      firstname: ['', [Validators.required,
      ]],
      lastname: ['', [Validators.required,
      ]],
      phone:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }


  sendTeller(){
    this.loading=true
  
 
    
    this.httpservice.postData(environment.url + "tellers",this.tellerForm.value).subscribe((res:any)=>{
      
      if (!res.success) {
         console.log(res.success);
         
        this.httpservice.presentToast(JSON.stringify(res.error))
        this.loading=false
      console.log(res);
      } else {
        this.mdctrl.dismiss();
        this.sho.ngOnInit();
        this.loading=false;
      }
    })
    
  }

}
