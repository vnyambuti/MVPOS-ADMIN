import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  currentUser

  id;
  constructor(private http: HttpClient, private toastcontroller: ToastController) {
    this.currentUser = localStorage.getItem('token');
  }
  getData(source: string) {
    return this.http.get(source).pipe(
      tap((res: any) => res),

      catchError(this.handleError)
    );
  }
  postWithoutHeadersData(source: string, data: any, isFormData?: any) {
    let headers = new HttpHeaders();
    headers = this.apiHeaders(headers, isFormData);
    return this.http.post(source, data)
  }
  postData(source: string, data: any, isFormData?: any) {
    let headers = new HttpHeaders();
    headers = this.apiHeaders(headers, isFormData);
    return this.http.post(source, data)
  }
  putData(source: string, data: any) {
    let headers = new HttpHeaders();
    headers = this.apiHeaders(headers);
    return this.http.put(source, data, { headers: headers }).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }
  patchData(source: string, data: any) {
    let headers = new HttpHeaders();
    headers = this.apiHeaders(headers);
    return this.http.patch(source, data).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }
  deleteData(source: string) {
    const headers = new HttpHeaders();
    // const httpOptions = {
    //   headers: this.apiHeaders(headers),
    //   body: data
    // };
    return this.http.delete(source).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }
  apiHeaders(headers: any, isFormData?: any) {
    if (isFormData !== undefined) {
      headers = headers.append('mimeType', 'multipart/form-data');
    } else {
      headers = headers.append('Content-Type', 'application/json');
    }
    headers = headers.append('Accept', 'application/json');
    // console.log(headers);
    return headers;
  }

  private handleError(error: any) {
    // this.load=false;
    return [this.presentToast(error.error || 'Server error'), null];
  }


  async presentToast(arg0: any) {
    const toast = await this.toastcontroller.create({
      message: arg0,
      duration: 2000,
      color: 'danger',
      position:'bottom'
    });
    toast.present();
  }


  async presentSuccessToast(arg0: any,pos) {
    const toast = await this.toastcontroller.create({
      message: arg0,
      duration: 2000,
      color: 'success',
      position:pos

    });
    toast.present();
  }


  setCat(catid) {
 
    this.id = catid;
  }
 
  getCaT() {
    return this.id ;
  }

}

