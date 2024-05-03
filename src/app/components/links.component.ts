import { Component } from "@angular/core";

@Component({
    template: `

    `,
    selector: 'app-links',
    standalone: true,
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