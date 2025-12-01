import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

interface Contato {
  id :number
  nome :string
  telefone :string
}

import agenda from '../app/agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indexa';

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos :Contato[] = agenda;

}
