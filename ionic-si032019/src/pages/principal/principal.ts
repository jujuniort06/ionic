import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TamanhosProvider } from '../../providers/tamanhos';
import { SaboresProvider } from '../../providers/sabores';
import { EnderecoPage } from '../endereco/endereco';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  listaTamanhos = [];
  idTamanhos : any;
  quantidades : any;
  listaSabores = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public tamanhos : TamanhosProvider, public sabores : SaboresProvider) {
    this.buscarTamanhos();    
  }

  buscarTamanhos(){
    this.tamanhos.getTamanhos().subscribe(
      (data : any) => {
        this.listaTamanhos = data;
        debugger;
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  buscarSabores(){
    debugger;
    this.sabores.getSabores(this.idTamanhos).subscribe(
      (data : any) => {
        this.listaSabores = data;
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  buscarEndereco(){
    debugger
    this.navCtrl.push(EnderecoPage)
  }

}
