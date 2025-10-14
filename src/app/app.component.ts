import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
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
