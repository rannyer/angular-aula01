import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex01.component.html',
  styleUrl: './ex01.component.css'
})
export class Ex01Component {
  titulo:string = 'Funcionários';

  funcionarios = [
    {
      nome:"João Java",cargo:"Desenvolvedor", ativo: true,
    }, 
    {
      nome:"Andreia Angular",cargo:"Gerente de Produto", ativo: true,
    }, 
    {
      nome:"Téo Typescript",cargo:"Analista de qualidade", ativo: false,
    }, 
    {
      nome:"Célia CSS", cargo:"Designer", ativo: true,
    }, 
  ]

  trocarTitulo(){
    this.titulo = this.titulo == "Funcionários" ? "Seres Místicos":"Funcionários"
  }
  mudarStatus(i:number){
    this.funcionarios[i].ativo = !this.funcionarios[i].ativo
  }
}
