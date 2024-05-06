import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DataConstants } from "../data/constants";

@Component({
    template: `
        <div class="container">
            <a *ngFor="let link of links;" href="{{ link.url }}" target="_blank">
                <img src="{{ link.icon }}" alt="image not found">
            </a>
        </div>
    `,
    selector: 'app-links',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './links.component.scss'
})
export class Links {
    links = new DataConstants().LINKS;
}