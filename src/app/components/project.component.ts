import { Component, Input } from "@angular/core";
import { ProjectDetails } from "../models/project";
import { CommonModule } from "@angular/common";

@Component({
    template: `
        <div class="container">
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
                <div class="links">
                    <a href="{{ project.githubLink }}" target="_blank">
                        <img src="../assets/github-white.png" alt="image not found">
                    </a>
                </div>
            </div>
        </div>
    `,
    selector: 'app-project',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './project.component.scss'
})
export class Project {
    @Input() project!: ProjectDetails;
}