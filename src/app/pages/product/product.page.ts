import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { GeneralService } from 'src/app/services/general.service';
import { PaymentMethodPage } from '../payment-method/payment-method.page';
import { Local } from 'protractor/built/driverProviders';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  productForm: FormGroup;
  loading: boolean = false;
  shop;
  ports: Port[];
  categories;
  colors = [
    {
      color: "Neutral"
    }
  ];

  newcolor=[];
  prods = {
    color: '',
    stock: '',
    lowstock:''
  };
  ddata: Array<{}> = [];
  tabID = 3;
  slideCardOpts = {
      slidesPerView : 1.2
  };
  // regex = /^(?:254|\+254|0)?([0-7](?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
  constructor(private route: Router, private navCtrl: NavController, private modalCtrl: ModalController,private alertCtrl:AlertController, private httpservice: GeneralService, private fb: FormBuilder) {
 
  }
  public myData: string[] = [];
  ngOnInit() {
    this.categories=JSON.parse(localStorage.getItem("shop")).categories;
    console.log(this.categories);
    
    this.colors=JSON.parse(localStorage.getItem("Colors"));
    // const initialcolours = JSON.stringify(this.colors);
    // localStorage.setItem("Colours", initialcolours);
    this.shop = JSON.parse(localStorage.getItem('shop')).id;
    console.log(this.shop);
    
    this.productForm = this.fb.group({
      shop_id: [this.shop],
      name: ['', [Validators.required,
      ]],
      price:['',Validators.required],
      category:['',Validators.required]
    })


  }
  openDrawer(e: {
    component: PaymentMethodPage,
  }) {
    console.log(e);

  };
  portChange(event: {
    component: PaymentMethodPage,
    value: any
  }) {
    console.log('port:', event.value);
  }

  async showDrawer() {
    const modal = await this.modalCtrl.create({
      component: PaymentMethodPage,
      cssClass: 'custom_modal',
      componentProps: {
        article: this.newcolor 
      },
    });
    return await modal.present();
  }
  async chooseColor(i){
    const modal = await this.modalCtrl.create({
      component: PaymentMethodPage,
      cssClass: 'custom_modal',
      componentProps: {
        kala: i 
      },
    });
    return await modal.present();

  }

  async addColor(){
    
    const alert = await this.alertCtrl.create({
      // header: 'DIRECTOR',
      // message: 'Please add name and tax number',
      inputs: [
        {
          name: 'color',
          type: 'text',
          placeholder: 'Colour'
        },
        {
          name: 'stock',
          type: 'number',
          placeholder: 'Stock Count',

        },
        {
          name: 'lowstock',
          type: 'number',
          placeholder: 'Low Stock',

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',

        }, {
          text: 'Add',

          handler: (data) => {
            console.log(data);
            
            if (data.color.length < 1) {
              const message = "Colour required";
              this.httpservice.presentToast(message)

            } else if (data.stock.length < 1) {
              const message1 = "Stock required";
              this.httpservice.presentToast(message1)

            }else if(data.lowstock.length < 1){
              const message3 = "Low Stock required";
              this.httpservice.presentToast(message3)
            }else {
              this.prods = {
                color: data.color,
                stock: data.stock,
                lowstock:data.lowstock
              }
              this.ddata.push(this.prods);
              // this.store.set('directors', this.ddata).then(r => {
              //   this.bankForm.controls.dname.setValidators(null);

              //   this.bankForm.controls.dpin.setValidators(null);
              //   this.bankForm.controls.dname.updateValueAndValidity();
              //   this.bankForm.controls.dpin.updateValueAndValidity();
              //   this.ddata = r

              // })
              console.log(this.ddata);
              // console.log(this.bankForm.controls.dname.setValidators(null));


            }




          },
        }
      ]
    });

    await alert.present();
  }

  sendProduct(){
    this.loading=true
    let id = JSON.parse(localStorage.getItem('shop')).id;
    let product={
      shop:id,
      name:this.productForm.controls.name.value,
      category:this.productForm.controls.category.value,
      price:this.productForm.controls.price.value,
      colour:this.ddata
    }
    console.log(product);
    this.httpservice.postData(environment.url + "products",product).subscribe((res)=>{
      this.loading=false
      console.log(res);
      
    })
  }

}

