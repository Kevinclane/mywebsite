import { Component } from "@angular/core";

@Component({
    template: `
        <div class="container">
            Resume
            <img src="../assets/download.png" alt="image not found">
        </div>
    `,
    selector: 'app-resume',
    standalone: true,
    styleUrl: './resume.component.scss'
})
export class Resume {

}