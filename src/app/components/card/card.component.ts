import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  produto = {
    nome:"Cadeira Azul",
    marca:"Angular Chairs",
    preco:19.90,
    categorias:["madeira","móvel","casa","cozinha","decoração"],
    img:"https://www.oppa.com.br/cdn/shop/products/Cadeira_Uma_Azul_900x.jpg?v=1724248408"
  }

}
