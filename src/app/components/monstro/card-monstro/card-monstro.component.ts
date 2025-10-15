import { Component, Input } from '@angular/core';
import { Monstro } from '../../../models/monstro.model';

@Component({
  selector: 'app-card-monstro',
  standalone: true,
  imports: [],
  templateUrl: './card-monstro.component.html',
  styleUrl: './card-monstro.component.css'
})
export class CardMonstroComponent {
  @Input() monstro!: Monstro;
}
