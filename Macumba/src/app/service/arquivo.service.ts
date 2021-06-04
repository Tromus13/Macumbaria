import { Util } from './../util/util';
import { Filho } from './../module/filho';
import { ServiceFilhoService } from './service-filho.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  linhas:string[] = [];
  filhos:Filho[] = [];

  pathAsset = "assets/";
  pathFilho = this.pathAsset + "filhos/";

  constructor(
    private http:HttpClient
  ) { }

  montarFilhos() {

    this.http.get(this.pathAsset + "Filho.txt", { responseType: 'text'}).subscribe(data => {

      this.linhas = data.split(/\r?\n|\r/);

      this.linhas.forEach((linha:any, i:number) => {
      const aux = linha.split(';');
        if(i > 0) {
          const filho: Filho = new Filho();
          filho.id = parseInt(Util.validarCampo(aux[Filho.P_ID]));
          filho.nome = Util.validarCampo(aux[Filho.P_NOME]);
          filho.dtNacimento = new Date(Util.validarCampo(aux[Filho.P_DTNASCIMENTO]));
          filho.telefone = Util.formatTelefone(Util.validarCampo(aux[Filho.P_TELEFONE]));
          filho.cargo = Util.validarCampo(aux[Filho.P_CARGO]);
          filho.img = Util.validarCampo(aux[Filho.P_IMG]);
          this.filhos.push(filho);
        }
      });
    });
  }
  getFilhoById(id:number):any {
    const result = this.filhos.find((filho) => filho.id == id);
    return result;
  }
}
