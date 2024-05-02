import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataConstants } from "../data/constants";
import { Experience } from "./experience.component";

@Component({
  template: `
    <div class="container">
      <div class="nav-section">
        <div class="name">Kevin Lane</div>
        <div class="title">Software Engineer</div>
        <div class="img-wrapper">
          <img src="../assets/headshot.jpg" alt="image not found">
        </div>
      </div>
      <div class="divider"></div>
      <div class="content-section">
        <div class="about">
          <div>{{ dataConstants.ABOUT_ONE }}</div>
          <div>{{ dataConstants.ABOUT_TWO }}</div>
          <div>{{ dataConstants.ABOUT_THREE }}</div>
        </div>
        <div class="experience">
          <div *ngFor="let job of dataConstants.JOB_EXPERIENCES;">
            <app-experience [jobExperience]="job"/>
          </div>
        </div>
        <div class="skills">
          <img src="../assets/napoleon-dynamite-skills.gif" alt="image not found">
        </div>
      </div>
    </div>
  `,
  selector: 'app-main-page-desktop',
  standalone: true,
  imports: [Experience, CommonModule],
  styleUrl: './main-page-desktop.component.scss'
})
export class MainPageDesktop {
  dataConstants = new DataConstants();
}
