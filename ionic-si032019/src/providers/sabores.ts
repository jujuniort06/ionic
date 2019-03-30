import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class SaboresProvider {
  constructor(private http : HttpProvider) {
    
  }

  public getSabores(id : any){
    this.http.url = "http://104.196.102.231/sabores/" + id;
    return this.http.get()
  }
}
