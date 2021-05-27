import { ArquivoService } from './service/arquivo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Macumba';

  constructor(
    private arquivoServico:ArquivoService
  ) { }

  ngOnInit() {
    this.arquivoServico.montarFilhos();
  }
}
