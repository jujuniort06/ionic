import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';

@Injectable()
export class TamanhosProvider {
  constructor(private http : HttpProvider) {
    
  }

  public getTamanhos(){
    this.http.url = "http://104.196.102.231/tamanhos"
    return this.http.get()
  }
}
