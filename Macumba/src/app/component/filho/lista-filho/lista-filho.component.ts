import { Util } from './../../../util/util';
import { HttpClient } from '@angular/common/http';
import { Filho } from './../../../module/filho';
import { ServiceFilhoService } from './../../../service/service-filho.service';
import { ArquivoService } from './../../../service/arquivo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-filho',
  templateUrl: './lista-filho.component.html',
  styleUrls: ['./lista-filho.component.css']
})
export class ListaFilhoComponent implements OnInit {

  formatData = Util.formatData;

  linhas:string[]= []
  filhos:Filho[] = [];
  constructor(
    private http:HttpClient,
    private arquivoServico:ArquivoService,
  ) { }

  ngOnInit(): void {
    this.filhos = this.arquivoServico.filhos;
  }
}
