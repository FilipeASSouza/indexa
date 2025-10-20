import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    ɵEmptyOutletComponent,
    ContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indexa';
}
