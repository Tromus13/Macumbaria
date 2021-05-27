import { Injectable } from '@angular/core';
import { Filho } from '../module/filho';

@Injectable({
  providedIn: 'root'
})
export class ServiceFilhoService {

  linhas = [];
  filhos:Filho[] = [];

  constructor() { }
}
