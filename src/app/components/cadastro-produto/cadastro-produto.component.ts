import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule }from '@angular/forms'

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  nome:string = ''
  preco:number | null = null
  categoria:string = ''
  cargo:string=''

  cargos=[
    {
      id:1,
      nome: 'Desenvolvedor(a)'
    },
    {
      id:2,
      nome: 'Design(a)'
    },
    {
      id:3,
      nome: 'RH(a)'
    }
]
  

}
