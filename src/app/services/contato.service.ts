import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email" : "email@email.com"}];

  constructor() {
    //tentar obter os dados do local storage

    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if(contatosLocalStorage !== null){
      this.contatos = contatosLocalStorage || null;
    }

    //salvar os contatos no local storage

    localStorage.setItem('contatos', JSON.stringify(this.contatos));

  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato:Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }


}
