import { Component, HostListener } from "@angular/core";
import { DataConstants } from "../data/constants";

@Component({
    template: ``,
    selector: 'app-main-page-base',
    standalone: true
})
export class MainPageBase {
    dataConstants = new DataConstants();
    activeSection!: string;

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
        this.calculateActiveSection();
    }

    private setupScrollData() {
        const aboutDomRect = this.getDomRect('.about');
        const experienceDomRect = this.getDomRect('.experience');
        const projectsDomRect = this.getDomRect('.projects');

        if (!aboutDomRect || !experienceDomRect || !projectsDomRect) {
            return;
        }

        this._aboutTop = aboutDomRect.top;
        this._aboutBottom = aboutDomRect.height;
        this._experienceTop = experienceDomRect.top;
        this._experienceBottom = experienceDomRect.height + this._aboutBottom;
        this._projectsTop = projectsDomRect.top;
        this._projectsBottom = projectsDomRect.height + this._experienceBottom;

        setTimeout(() => { this.calculateActiveSection }, 100);
    }

    private calculateActiveSection() {
        const screenFocusLine = window.scrollY + (window.innerHeight / 2);

        if (screenFocusLine > this._aboutTop && screenFocusLine <= this._aboutBottom) {
            this.activeSection = 'about';
        } else if (screenFocusLine > this._experienceTop && screenFocusLine <= this._experienceBottom) {
            this.activeSection = 'experience';
        } else {
            this.activeSection = 'projects';
        }
    }

    private getDomRect(className: string): DOMRect | undefined {
        return document.querySelector(className)?.getBoundingClientRect();
    }

    scrollTo(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}