import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  /* propriedades */
  public nome_usuario:string="Danilo Lobao";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  public somadoisnumeros(num1:number,num2:number): void{
     alert("Bem vindo "+this.nome_usuario+" a Àrea de noticias..");  
     alert("A soma dos numeros é " +(num1+num2));     
  }

  ionViewDidLoad() {
    //this.somadoisnumeros(10,99);
    //console.log('ionViewDidLoad FeedPage');
  }

}
