import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobExperience } from "../models/job-experience";

@Component({
    template: `
        <div class="container">
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
                <div class="accomplishments">

                </div>
                <ul class="skills">
                    <li class="skill" *ngFor="let skill of jobExperience.skills;">
                        {{ skill }}
                    </li>
                </ul>
            </div> 
        </div>
    `,
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './experience.component.scss'
})
export class Experience {
    @Input() jobExperience: JobExperience = {
        companyName: '',
        position: '',
        previousPositions: [],
        startDate: '',
        endDate: '',
        skills: [],
        url: '',
        accomplishments: ''
    };
}