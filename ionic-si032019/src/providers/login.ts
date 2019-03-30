import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class LoginProvider {
  

  constructor(private http : HttpProvider) {
      
  }

  public login(username : string, password : string){
    let json = {
      userName: username,
      password : password
      }
      this.http.url = "http://104.196.102.231/logon"
    return this.http.post(json)
  }
}
