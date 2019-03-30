import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toasts } from '../../providers/toast';
import { PrincipalPage } from '../principal/principal';
import { LoginProvider } from '../../providers/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listaAlunos = [];
  public exibirConteudo : boolean = true;
  private duration : number = 1000;
  private login : string; 
  private senha : string;
  constructor(public navCtrl: NavController, private toast : Toasts, 
  private logon : LoginProvider) {

  }

  // public showMessage(){
  //   this.message.loadingShow();
  // }

  // public showToast(){
  //   debugger;
  //   this.toast.toastShow('teste',this.duration); 
  // }

  public showToastLogin(){
    this.toast.toastLoginShow('Senha incorreta',this.duration);
  }

  public fazerLogin(){
    if (this.login === "admin@senai" || this.senha === "1234"){
      this.logon.login(this.login, this.senha).subscribe(
        (data : any) => {
          this.navCtrl.push(PrincipalPage)
        },
        (error : any) =>{
          this.showToastLogin()
        }
      )
    }
  }
}

  // public limparAlunos(){
  //   this.listaAlunos = [];
  // }
  // public adicionarAlunos(){
  //   this.listaAlunos.push({nome: "Aluno A"});
  //   this.listaAlunos.push({nome: "Aluno B"});
  //   this.listaAlunos.push({nome: "Aluno C"});
  //   this.listaAlunos.push({nome: "Aluno D"});
  //   this.listaAlunos.push({nome: "Aluno E"});
  // }

  // buttonClick(){
  //   this.exibirConteudo = !this.exibirConteudo;
  // }
