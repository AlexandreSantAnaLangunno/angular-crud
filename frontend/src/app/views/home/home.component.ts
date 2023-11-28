import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { RedDirective } from '../../directives/red.directive';
import { ForDirective } from '../../directives/for.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, RedDirective, ForDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
    longText = `Sistema para exemplificação de um cadastro em Angular`;
}
