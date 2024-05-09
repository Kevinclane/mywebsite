import { Component } from "@angular/core";
import * as FileSaver from 'file-saver';

@Component({
    template: `
        <div class="container" (click)="download()">
            Resume
        </div>
    `,
    selector: 'app-resume',
    standalone: true,
    styleUrl: './resume.component.scss'
})
export class Resume {
    download() {
        const docUrl = 'https://kevinclane.github.io/assets/KevinLane.docx';
        FileSaver.saveAs(docUrl, 'KevinLane.docx');
    }
}