import { Component, Input } from "@angular/core";
import { ProjectDetails } from "../../models/project";
import { CommonModule } from "@angular/common";

@Component({
    template: `
        <div class="card-container" (click)="openLink()">
            <div class="title">
                {{ project.title }}
            </div>
            <div class="description">
                {{ project.description }}
            </div>
            <img [src]="project.image" alt="image not found">
            <ul class="technologies">
                <li class="technology" *ngFor="let technology of project.technologies;">
                    {{ technology }}
                </li>
            </ul>
        </div>
    `,
    selector: 'app-project-mobile',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './project-mobile.component.scss'
})
export class ProjectMobile {
    @Input() project!: ProjectDetails;

    openLink() {
        window.open(this.project.githubLink, '_blank');
    }
}