import { MainModalPage } from './../main-modal/main-modal.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';
import { CategoryPage } from '../category/category.page';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  shops;
  load = false;
  load1=false;
  load2=false
  cats;
  sliders = [
    'assets/imgs/10.jpg',
    'assets/imgs/11.jpg',
    'assets/imgs/14.jpg',
  ];
 
products
product = [
  'assets/imgs/5.jpg',
  'assets/imgs/6.jpg',
  'assets/imgs/7.jpg',
  'assets/imgs/8.jpg',
  'assets/imgs/9.jpg',
  'assets/imgs/10.jpg',
  'assets/imgs/11.jpg',
  'assets/imgs/12.jpg',
];
  constructor(private router: Router, private modalCrtl: ModalController, private HTTP: GeneralService) {
   
   }

  ngOnInit() {
    // this.openModal();
    this.load = true;
    this.load1=true;
    this.load2=true;
    //--load shop
    this.HTTP.getData(environment.url + "shops").subscribe((shops: any) => {
      this.load = false;
      if (shops.success) {
        this.shops=shops.data.shops[0];
        const store=JSON.stringify(this.shops);
        localStorage.setItem("shop",store);
        if (this.shops.tellers == 0 ) {
          this.goToNewTeller();
        } else {
          if (this.shops.categories.length == 0 ) {
            this.goToNewCategory();
       
          } else {
            if (this.shops.products.length == 0) {
              this.goToProduct();
            } else {
              this.cats=this.shops.categories
              this.products=this.shops.products
            }
          }
        }
       
      console.log(shops);
      
    
      } else {
        console.log(shops);
      }
      
      

    });
  //   const newstore=JSON.parse(localStorage.getItem('shop'));
  //   const cat={
  //     shop_id:newstore.id
  //   }
  //   this.HTTP.postData(environment.url + "categories",cat).subscribe((cats:any)=>{
  //     if (cats.success) {
  //       console.log(cats);
  //       this.cats=cats.categories;
  //       console.log(this.cats.length);
        
  //     } else {
        
  //     }
  //  })

  }

  goToNewTeller(){
    this.router.navigate(['/teller']);
  }

  goToProduct(){
    this.router.navigate(['/product']);
  }
 
  goToShopPage() {
    this.router.navigate(['/shop-detail']);
  }

  goToProductDetail() {
    this.router.navigate(['/product-detail']);
  }

  async openModal() {
    const modal = await this.modalCrtl.create({
      component: MainModalPage,
      cssClass: 'main_modal'
    });
    return await modal.present();
  }

   goToNewCategory(){
  
    this.router.navigate(['/category']);
  }

  goExplorePro() {
    const navData: NavigationExtras = {
      queryParams: {
        value: 'Women Collection'
      }
    };
    this.router.navigate(['/explore-products'], navData);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
