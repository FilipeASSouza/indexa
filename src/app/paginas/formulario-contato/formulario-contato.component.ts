import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm !:FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome :new FormControl('Test'),
      telefone :new FormControl(''),
      email :new FormControl(''),
      aniversario :new FormControl(''),
      redes :new FormControl(''),
      observacoes :new FormControl('')
    });
  }

}
