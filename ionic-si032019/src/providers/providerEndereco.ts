import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class ProviderEnderecoProvider {
  constructor(private http : HttpProvider) {
    
  }

  public getEndereco(){
    this.http.url = "http://104.196.102.231/cidades"
    return this.http.get()
  }
}
