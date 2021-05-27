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

  constructor(
    private http:HttpClient
  ) { }
}
