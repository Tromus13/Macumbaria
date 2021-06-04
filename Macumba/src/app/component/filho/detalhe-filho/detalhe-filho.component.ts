import { Entidade } from './../../../module/entidade';
import { HttpClient } from '@angular/common/http';
import { Filho } from './../../../module/filho';
import { ArquivoService } from './../../../service/arquivo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-detalhe-filho',
  templateUrl: './detalhe-filho.component.html',
  styleUrls: ['./detalhe-filho.component.css']
})
export class DetalheFilhoComponent implements OnInit {

  mesVersario = Util.showAniversario;

  filho:Filho = new Filho();
  entidades:Entidade[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private arquivoServico:ArquivoService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.detalharFilho();
  }

  detalharFilho():void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id != null) {
      this.filho = this.arquivoServico.getFilhoById(parseInt(id));
    }

    this.http.get(this.arquivoServico.pathFilho + id +".txt", { responseType: 'text'}).subscribe(data => {

      const linhas = data.split(/\r?\n|\r/);

      linhas.forEach((linha:any, i:number) => {
      const aux = linha.split(';');
        if(i > 0) {
          const ent:Entidade = new Entidade();
          ent.id = parseInt(Util.validarCampo(aux[Entidade.P_ID]));
          ent.dijina = Util.validarCampo(aux[Entidade.P_DIJINA]);
          ent.categoria = Util.validarCampo(aux[Entidade.P_CATEGORIA]);
          ent.imagem = Util.validarCampo(aux[Entidade.P_IMAGEM]);
          ent.tipo = Util.validarCampo(aux[Entidade.P_TIPO]);

          this.entidades.push(ent);
        }
      });
    });
  }

}
