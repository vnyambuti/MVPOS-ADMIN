import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
token
  constructor(private router:Router){
    
  }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const helper = new JwtHelperService();
    this.token=localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(this.token);
    console.log(!isExpired);
    
    if (this.token && !isExpired) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

   
  }
  
}
