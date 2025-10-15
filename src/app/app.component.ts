import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { Ex01Component } from "./components/ex01/ex01.component";
import { CadastroProdutoComponent } from "./components/cadastro-produto/cadastro-produto.component";
import { CadastroMonstroComponent } from "./components/monstro/cadastro-monstro/cadastro-monstro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CardComponent, Ex01Component, CadastroProdutoComponent, CadastroMonstroComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-spa';

  nome = "Andreia Angular"
  idade:number = 10

  clicar(){
    this.nome = "Angular LALAL"
    this.idade++
  }

  retornarAlgo():string {
    return "ABC"
  }

}
