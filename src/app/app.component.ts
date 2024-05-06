import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageDesktop } from "./components/main-page-desktop.component";

@Component({
  template: `
    <div class="main">
      <div *ngIf="isMobile; then mobile else desktop"></div>
      <ng-template #mobile>Mobile</ng-template>
      <ng-template #desktop>
        <app-main-page-desktop/>
      </ng-template>
    </div>

    <router-outlet />
  `,
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, MainPageDesktop]
})
export class AppComponent {
  public isMobile = true;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 960;
  }
}
