import { Component, ElementRef, Host, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataConstants } from "../data/constants";
import { Experience } from "./experience.component";
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, of, switchMap } from "rxjs";
import { Links } from "./links.component";
import { Resume } from "./resume.component";

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
          <div class="nav-location" (click)="scrollTo(skills)" [ngClass]="{'active': activeSection === 'skills'}">Skills</div>
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
        <div class="skills" #skills>
          Convert to projects section
        </div>
      </div>
    </div>
  `,
  selector: 'app-main-page-desktop',
  standalone: true,
  imports: [Experience, Links, Resume, CommonModule],
  styleUrl: './main-page-desktop.component.scss'
})
export class MainPageDesktop {
  dataConstants = new DataConstants();
  activeSection: string = 'about';

  private _aboutBottom!: number;
  private _aboutTop!: number;
  private _experienceBottom!: number;
  private _experienceTop!: number;
  private _skillsBottom!: number;
  private _skillsTop!: number;

  ngAfterViewInit() {
    this.setupScrollData();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.setupScrollData();
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {

    const bottomOfScreen = window.scrollY + window.innerHeight;

    if (bottomOfScreen > this._aboutTop && bottomOfScreen <= this._aboutBottom) {
      this.activeSection = 'about';
    } else if (bottomOfScreen > this._experienceTop && bottomOfScreen <= this._experienceBottom) {
      this.activeSection = 'experience';
    } else if (bottomOfScreen > this._skillsTop && bottomOfScreen <= this._skillsBottom) {
      this.activeSection = 'skills';
    }

  }

  private setupScrollData() {
    const aboutDomRect = this.getDomRect('.about');
    const experienceDomRect = this.getDomRect('.experience');
    const skillsDomRect = this.getDomRect('.skills');

    if (!aboutDomRect || !experienceDomRect || !skillsDomRect) {
      return;
    }

    this._aboutBottom = aboutDomRect.height;
    this._aboutTop = aboutDomRect.top;
    this._experienceBottom = experienceDomRect.height + this._aboutBottom;
    this._experienceTop = experienceDomRect.top;
    this._skillsBottom = skillsDomRect.height + this._experienceBottom;
    this._skillsTop = skillsDomRect.top;
  }

  private getDomRect(className: string): DOMRect | undefined {
    return document.querySelector(className)?.getBoundingClientRect();
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
