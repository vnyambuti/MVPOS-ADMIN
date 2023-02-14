import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  colors: any;
  result: string;
  constructor(private actionSheetCtrl: ActionSheetController) { }
  ngOnInit(): void {


    this.colors = JSON.parse(localStorage.getItem("Colors"));




  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
        
        },
        {
          text: 'Share',
         
        },
        {
          text: 'Cancel',
          role: 'cancel',
          
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);

  }
}
