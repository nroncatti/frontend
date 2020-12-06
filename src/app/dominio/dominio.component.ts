import { Component, OnInit } from '@angular/core';
import { Dominio } from '../dominio';
import { DominioService } from '../dominio.service';

@Component({
  selector: 'dominio',
  templateUrl: './dominio.component.html',
  styleUrls: ['./dominio.component.css']
})
export class DominioComponent implements OnInit {

  //public dominio:Dominio
  public dominios:Dominio[] = []
  constructor(private dominioService:DominioService) { }

  ngOnInit() {

    //this.dominio = this.dominioService.getDominio()
    this.dominios = this.dominioService.listaDominio()

  }

}
