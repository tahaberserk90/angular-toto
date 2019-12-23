import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { User } from './User';

@Injectable()
export class AuthenticationService implements CanActivate{
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let user:User =JSON.parse(localStorage.getItem('currentUser')) as User;
    let res=false;
    if(user.userName=='admin'){
      res=true;
    }
    return res;
  }

   url:string="http://localhost:2403/users";

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    this.url+="?userName="+username+"&password="+password;
    console.log('url ='+this.url);
    return this.http.get(this.url).pipe(
      map((t:any)=>{
      console.log(t);
      let user:{};
      if(t.length>0){
        user=t[0];
        localStorage.setItem('currentUser',JSON.stringify(user));
      }else{
        throw new Error('Auth error');
      }
      return user;
    }
    ));
  }
}


/* map((r:any)=>{
  let user:{};
  console.log('length ='+r.json().length);
  if(r.json().length>0){
    user=r.json()[0];
    localStorage.setItem('currentUser',JSON.stringify(user));
  }else{
    throw new Error('Auth error');
  }
  return user;
}
)
 */