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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indexa';

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos :Contato[] = agenda;

  filtroPorTexto :string = '';

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtraContatosPorTexto() :Contato[] {
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtraContatosPorLetraInicial(letra :string) :Contato[] {
    return this.filtraContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }

}
