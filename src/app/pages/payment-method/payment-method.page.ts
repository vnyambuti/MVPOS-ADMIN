import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductPage } from '../product/product.page';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {
  colorForm: FormGroup;
  @Input() newcolor;
  @Input() kala
  constructor(private modalCtrl: ModalController,private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.kala);

if (this.kala) {
  this.colorForm = this.fb.group({

    color: [this.kala.color, [Validators.required,
    ]],
    stock: [this.kala.stock, [Validators.required,
    ]],
    lowstock: [this.kala.lowstock, [Validators.required,
    ]],
  })
} else {
  this.colorForm = this.fb.group({

    color: ['', [Validators.required,
    ]],
    stock: ['', [Validators.required,
    ]],
    lowstock: ['', [Validators.required,
    ]],
  })
}
    
  }

  modalClose() {
    this.modalCtrl.dismiss({
      tabID: 2
    });
    // this.modalCtrl.dismiss();
  }
  addColour() {
    let color = localStorage.getItem("Colors");
    if (this.kala) {
    let existing=JSON.parse(color);
    existing.find((obj,index)=>{
      
      if(obj.color === this.kala.color){
        console.log(index);
           localStorage.removeItem(index);
      }
      
    })
     console.log(color);
     
      
    }else{
      


      if (!color) {
  
         let newset=[]
  
        var colors = {
          color: this.colorForm.controls.color.value,
          stock: this.colorForm.controls.stock.value,
          lowstock: this.colorForm.controls.lowstock.value
        }
        newset.push(colors)
        localStorage.setItem("Colors",JSON.stringify(newset));
  
        // let replacec = );
        console.log(this.newcolor);
  
        // localStorage.setItem("Colours", JSON.stringify());
      } else {
        const colors = {
          color: this.colorForm.controls.color.value,
          stock: this.colorForm.controls.stock.value,
          lowstock: this.colorForm.controls.lowstock.value
        }
        let oldcolor=JSON.parse(color);
  
      oldcolor.push(colors);
      localStorage.setItem("Colors",JSON.stringify(oldcolor));
     
       
        
      }
  
    }
  




    this.modalCtrl.dismiss().then(() => {

    });


  }
}
