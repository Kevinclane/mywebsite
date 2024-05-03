import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

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
    links = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kevinchristopherlane/',
            icon: '../assets/linkedin.png'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Kevinclane',
            icon: '../assets/github.png'
        }
    ];
}