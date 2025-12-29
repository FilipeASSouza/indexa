import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm !:FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome :new FormControl('', Validators.required),
      telefone :new FormControl('', Validators.required),
      email :new FormControl('', [Validators.required, Validators.email]),
      aniversario :new FormControl('', Validators.required),
      redes :new FormControl('', Validators.required),
      observacoes :new FormControl('', Validators.required)
    });
  }

  salvarContato(){
    if(this.contatoForm.valid){
      console.info(this.contatoForm.value);
    }
  }

}
