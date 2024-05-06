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
        FileSaver.saveAs('../assets/KevinLane.docx', 'KevinLane.docx');
    }
}