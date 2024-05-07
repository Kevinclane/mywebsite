import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperienceDesktop } from "./experience-desktop.component";
import { Links } from "../links.component";
import { Resume } from "../resume.component";
import { ProjectDesktop } from "./project-desktop.component";
import { MainPageBase } from "../main-page-base.component";

@Component({
  template: `
    <div class="container">
      <div class="nav-section">
        <div class="name-section">
          <div class="name">Kevin Lane</div>
          <div class="title">Software Engineer</div>
        </div>
        <img src="assets/k.jpg" alt="image not found">
        <div class="nav-locations">
          <div class="nav-location" (click)="scrollTo(about)" [ngClass]="{'active': activeSection === 'about'}">About</div>
          <div class="nav-location" (click)="scrollTo(experience)" [ngClass]="{'active': activeSection === 'experience'}">Experience</div>
          <div class="nav-location" (click)="scrollTo(projects)" [ngClass]="{'active': activeSection === 'projects'}">Projects</div>
        </div>
        <app-resume />
        <app-links />
      </div>

      <div class="content-section">
        <div class="about" #about>
          <div>{{ dataConstants.ABOUT_ONE }}</div>
          <div>{{ dataConstants.ABOUT_TWO }}</div>
          <div>{{ dataConstants.ABOUT_THREE }}</div>
        </div>
        <div class="experience" #experience>
          <div *ngFor="let job of dataConstants.JOB_EXPERIENCES;">
            <app-experience-desktop [jobExperience]="job"/>
          </div>
        </div>
        <div class="projects" #projects>
          <div *ngFor="let project of dataConstants.PROJECTS">
            <app-project-desktop [project]="project" />
          </div>
        </div>
      </div>
    </div>
  `,
  selector: 'app-main-page-desktop',
  standalone: true,
  imports: [ExperienceDesktop, Links, ProjectDesktop, Resume, CommonModule],
  styleUrl: './main-page-desktop.component.scss'
})
export class MainPageDesktop extends MainPageBase {
}
