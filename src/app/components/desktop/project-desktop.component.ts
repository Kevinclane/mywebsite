import { Component, Input } from "@angular/core";
import { ProjectDetails } from "../../models/project";
import { CommonModule } from "@angular/common";

@Component({
    template: `
        <div class="card-container" (click)="openLink()">
            <div class="img-wrapper">
                <img [src]="project.image" alt="image not found">
            </div>
            <div class="details">
                <div class="title">
                    {{ project.title }}
                </div>
                <div class="description">
                    {{ project.description }}
                </div>
                <ul class="technologies">
                    <li class="technology" *ngFor="let technology of project.technologies;">
                        {{ technology }}
                    </li>
                </ul>
            </div>
        </div>
    `,
    selector: 'app-project-desktop',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './project-desktop.component.scss'
})
export class ProjectDesktop {
    @Input() project!: ProjectDetails;

    openLink() {
        window.open(this.project.githubLink, '_blank');
    }
}