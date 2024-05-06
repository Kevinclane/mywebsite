import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobExperience } from "../../models/job-experience";

@Component({
    template: `
        <div class="card-container" (click)="openLink()">
            <div class="dates">
                {{ jobExperience.startDate }} - {{ jobExperience.endDate }}
            </div>
            <div class="details">
                <div class="title">
                    {{ jobExperience.position }} · {{ jobExperience.companyName }}
                </div>
                <div class="secondary-title" *ngIf="jobExperience.previousPositions.length > 0">
                    <div *ngFor="let position of jobExperience.previousPositions;">
                        {{ position }}
                    </div>
                </div>
                <div class="description">
                    {{ jobExperience.accomplishments }}
                </div>
                <ul class="technologies">
                    <li class="technology" *ngFor="let skill of jobExperience.skills;">
                        {{ skill }}
                    </li>
                </ul>
            </div> 
        </div>
    `,
    selector: 'app-experience-desktop',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './experience-desktop.component.scss'
})
export class ExperienceDesktop {
    @Input() jobExperience!: JobExperience;

    openLink() {
        window.open(this.jobExperience.url, '_blank');
    }
}