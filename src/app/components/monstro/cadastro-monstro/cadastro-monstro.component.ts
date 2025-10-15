import { Component } from '@angular/core';
import { Monstro } from '../../../models/monstro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardMonstroComponent } from "../card-monstro/card-monstro.component";

@Component({
  selector: 'app-cadastro-monstro',
  standalone: true,
  imports: [FormsModule, CommonModule, CardMonstroComponent],
  templateUrl: './cadastro-monstro.component.html',
  styleUrl: './cadastro-monstro.component.css'
})
export class CadastroMonstroComponent {
  novoMonstro:Monstro = {
    id:0,
    nome: '',
    tipo: '',
    nivel: 0,
    ativo: false,
    habitat: ''
  };
  contador = 0;
  tipos = ['Dragão','Troll','Elfo','Orc','Gnomo','Goblin']

  monstros:Monstro[] = [];

  salvarMonstro(){
    
    if(!this.novoMonstro.nome || !this.novoMonstro.tipo || !this.novoMonstro.habitat){
      alert("Preencha todos os cambos obrigatórios!");
      return;
    }
    this.contador++;

    this.novoMonstro.id = this.contador;
    
    this.monstros.push({... this.novoMonstro})

    // FAZER CODIGO PARA LIMPAR O FORMULARIO

    this.novoMonstro = {
    id:0,
    nome: '',
    tipo: '',
    nivel: 0,
    ativo: false,
    habitat: ''
  };

  }
}
