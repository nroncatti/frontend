import { Injectable } from '@angular/core';
import { Dominio } from './dominio';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  constructor() { }

  public getDominio(): Dominio{
    let dominio = new Dominio()
    dominio.codigo = "1"
    dominio.valor = "Seguro Novo"

    return dominio

  }

    public listaDominio():Dominio[]{
      return [
        {
          codigo: "1",
          valor: "Seguro Novo"
        },
        {
          codigo: "2",
          valor: "Renovação Congênere"
        },
        {
          codigo: "3",
          valor: "Endosso"
        },  
      ]
    }
}
