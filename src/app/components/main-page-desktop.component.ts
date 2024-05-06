import { Component, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataConstants } from "../data/constants";
import { Experience } from "./experience.component";
import { Links } from "./links.component";
import { Resume } from "./resume.component";
import { Project } from "./project.component";

@Component({
  template: `
    <div class="container">
      <div class="nav-section">
        <div class="name-section">
          <div class="name">Kevin Lane</div>
          <div class="title">Software Engineer</div>
        </div>
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
            <app-experience [jobExperience]="job"/>
          </div>
        </div>
        <div class="section-padding"></div>
        <div class="projects" #projects>
          <div *ngFor="let project of dataConstants.PROJECTS">
            <app-project [project]="project"></app-project>
          </div>
        </div>
      </div>
    </div>
  `,
  selector: 'app-main-page-desktop',
  standalone: true,
  imports: [Experience, Links, Project, Resume, CommonModule],
  styleUrl: './main-page-desktop.component.scss'
})
export class MainPageDesktop {
  dataConstants = new DataConstants();
  activeSection: string = 'about';

  private _aboutBottom!: number;
  private _aboutTop!: number;
  private _experienceBottom!: number;
  private _experienceTop!: number;
  private _projectsBottom!: number;
  private _projectsTop!: number;

  ngAfterViewInit() {
    this.setupScrollData();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.setupScrollData();
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {

    const screenFocusLine = window.scrollY + (window.innerHeight / 2);

    if (screenFocusLine > this._aboutTop && screenFocusLine <= this._aboutBottom) {
      this.activeSection = 'about';
    } else if (screenFocusLine > this._experienceTop && screenFocusLine <= this._experienceBottom) {
      this.activeSection = 'experience';
    } else if (screenFocusLine > this._projectsTop && screenFocusLine <= this._projectsBottom) {
      this.activeSection = 'projects';
    }

  }

  private setupScrollData() {
    const aboutDomRect = this.getDomRect('.about');
    const experienceDomRect = this.getDomRect('.experience');
    const projectsDomRect = this.getDomRect('.projects');

    if (!aboutDomRect || !experienceDomRect || !projectsDomRect) {
      return;
    }

    this._aboutBottom = aboutDomRect.height;
    this._aboutTop = aboutDomRect.top;
    this._experienceBottom = experienceDomRect.height + this._aboutBottom;
    this._experienceTop = experienceDomRect.top;
    this._projectsBottom = projectsDomRect.height + this._experienceBottom;
    this._projectsTop = projectsDomRect.top;
  }

  private getDomRect(className: string): DOMRect | undefined {
    return document.querySelector(className)?.getBoundingClientRect();
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
