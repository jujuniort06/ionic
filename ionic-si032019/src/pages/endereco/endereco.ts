import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderEnderecoProvider } from '../../providers/providerEndereco';
import { BairroProvider } from '../../providers/bairro';

/**
 * Generated class for the EnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
})
export class EnderecoPage {
  listaEndereco = [];
  listaBairro = [];
  desativarBairro = [];
  idEndereco : any;
  bairroo : Boolean;
  rua : String;
  numero : String;
  complemento : String;
  referencia : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerEndereco : ProviderEnderecoProvider, public bairro : BairroProvider) {
    this.chamarWebService();
  }

  chamarWebService(){
    this.providerEndereco.getEndereco().subscribe(
      (data : any) => {
        debugger;
        this.listaEndereco = data;    
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  buscarBairro(){
    this.bairro.getBairro(this.idEndereco).subscribe(
      (data : any) => {
        debugger;
        this.listaBairro = data;
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  limparCampos(){
    debugger;
    this.listaBairro = [];
    this.rua = "";
    this.numero = "";
    this.complemento = "";
    this.referencia = "";

    this.idEndereco = null;
    this.bairroo = false;
  }
  
  aparecerCampos(){
    this.bairroo = true;
  }

}
