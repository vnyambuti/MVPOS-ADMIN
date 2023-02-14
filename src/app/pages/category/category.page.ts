import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';
import { ShopPage } from '../shop/shop.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryForm: FormGroup;
  loading: boolean = false;
  shop;
  tabID = 2;
  slideCardOpts = {
      slidesPerView : 1.2
  };
  // regex = /^(?:254|\+254|0)?([0-7](?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
  constructor(private route: Router,private sho:ShopPage,private mclCtrl:ModalController, private navCtrl: NavController, private httpservice: GeneralService, private fb: FormBuilder) { }

  ngOnInit() {
    this.shop=JSON.parse(localStorage.getItem('shop')).id;
      this.categoryForm = this.fb.group({
        shop_id:[this.shop],
          name: ['', [Validators.required,
          ]],
      })
  }

  sendCategory(){
    this.loading=true;

    
    this.httpservice.postData(environment.url + 'categories',this.categoryForm.value).subscribe((category:any)=>{
     if (!category.success) {
     
      // this.httpservice.presentSuccessToast(category.message,'bottom').then(()=>{
       
      // });
      this.httpservice.presentToast(JSON.stringify(category.error))
      this.loading=false;
    
     } else {
      this.loading=false;
      this.sho.ngOnInit();
       
     }
      
    })
  }
}
