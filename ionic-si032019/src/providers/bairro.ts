import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class BairroProvider {
  constructor(private http : HttpProvider) {
    
  }

  public getBairro(id){
    this.http.url = "http://104.196.102.231/bairros/" + id;
    return this.http.get()
  }
}
