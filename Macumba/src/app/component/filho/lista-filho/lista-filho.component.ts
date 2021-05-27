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

  linhas:string[]= []
  filhos:Filho[] = [];
  constructor(
    private http:HttpClient,
    private service:ArquivoService,
  ) { }

  ngOnInit(): void {

    this.montarFilhos();
  }
  montarFilhos() {
    this.http.get("assets/Filho.txt", { responseType: 'text'}).subscribe(data => {

      this.linhas = data.split(/\r?\n|\r/);

      this.linhas.forEach((linha:any, i:number) => {
      const aux = linha.split(';');
        if(i > 0) {
          const filho: Filho = new Filho();
          filho.id = aux[0];
          filho.nome = aux[1];
          filho.dtNacimento = aux[2] == "" ? "-" : aux[2];
          this.filhos.push(filho);
        }
      });
      console.log(this.filhos);
    });
  }
}
