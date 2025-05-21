import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SznComponent } from "./szn/szn.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SznComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'szn1';
}
