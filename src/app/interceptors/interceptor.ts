import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralService } from "../services/general.service";
import { environment } from "src/environments/environment";

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    constructor(private service:GeneralService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currentUser = JSON.parse(localStorage.getItem('user'));
        let usertoken =  localStorage.getItem('token');
        if (currentUser && usertoken) {

            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${usertoken}`
                }
            })
            console.log(req);
            const data={

            }
         
        }
        return next.handle(req);
    }
}
