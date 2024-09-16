import { JobExperience } from "../models/job-experience";
import { ProjectDetails } from "../models/project";

export class DataConstants {
    constructor() {

    }

    public ABOUT_ONE = `
        In June of 2020, I enrolled in a local coding bootcamp. The course was challenging
        and thorough, but also very enjoyable. I took what I had learned and began a freelance
        business and worked on personal projects. I have since worked for a couple of consulting
        firms and have gained experience in a variety of technologies. I am always looking for
        new and exciting challenges to grow my skills and knowledge.
    `;

    public ABOUT_TWO = `
        A couple of my favorite personal projects are the TimeTrackers and Texas Hold 'em applications.
        TimeTrackers was developed over 2 years and provided plenty of challenges to grow my 
        abilities. Texas Hold 'em was an ambitious hackathon project that required a card 
        game to be built in one week. As if the more complex game choice wasn't enough of a 
        challenge, the project was intended for two people and I was building it myself.
    `;

    public ABOUT_THREE = `
        Outside of web development, I enjoy going for a run/hike, playing video games, snowboarding,
        longboarding, repairing cars, and making candy for my family during the holidays. I also 
        dabble in game development.
    `;


    public JOB_EXPERIENCES: JobExperience[] = [
        {
            companyName: 'Allata LLC',
            position: 'Senior Consultant',
            previousPositions: [
                'Consultant',
                'Junior Consultant'
            ],
            startDate: 'June 2022',
            endDate: 'Apr 2024',
            skills: [
                'Azure Service Bus',
                'Azure Blob Storage',
                'Azure App Service',
                'Azure Container Registry',
                'Azure Container Instance',
                'CI/CD',
                'Angular',
                'TypeScript',
                'Java',
                'Spring Boot',
                'Maven',
                'MSSQL',
                'MySQL',
                'Draw.io',
                'Figma',
                'Scss'
            ],
            url: 'https://www.allata.com/',
            accomplishments: `
                Architected and developed a system to manage and track the progress of batched 
                data through multiple Azure Services. The system also provided a way to 
                collect and store errors and logs for the batched data. Extracted and 
                refactored the download processes into one generic and highly extensible
                microservice. Integrated Web Sockets for real-time updates on the front-end.
                Built various SPA pages from Figma designs. All of the code included extensive
                unit testing. Wrote documentation and diagrams for complicated data flows and 
                system architecture. 
            `
        },
        {
            companyName: 'In Time Tec',
            position: 'Software Engineer',
            previousPositions: [],
            startDate: 'Aug 2021',
            endDate: 'June 2022',
            skills: [
                'CI/CD',
                'Angular',
                'TypeScript',
                'Java',
                'Spring Boot',
                'Gradle',
                'MySQL',
                'PHP',
                'GoLang',
                'Scss'
            ],
            url: 'https://www.intimetec.com/',
            accomplishments: `
                Built and deployed a secure web API for the client's database. Incorporated
                continuous deployment via CI/CD pipelines. Created Splunk dashboards to monitor
                the health of the application and debug issues in live environments. Updated a 
                MySQL database, allowing the client to build robust reports and track inventory.
            `
        },
        {
            companyName: 'Mesh Software | Contract',
            secondName: 'Flatout MotorSports',
            position: 'Software Developer',
            previousPositions: [],
            startDate: 'Oct 2020',
            endDate: 'July 2023',
            skills: [
                '.NET',
                'C#',
                'Angular 1',
                'Scss'
            ],
            url: 'https://www.flatoutmotorcycles.com/',
            accomplishments: `
                Built and deployed a secure web API for the client's database, separating the
                administrators from the customers. Updated MySQL tables and columns to provide
                additional data to users. Built modals and forms for the front-end to allow
                company employees to update and add data to the database. Increased the speed, 
                security, and overall performance of the website by updating legacy code.
            `
        },
        {
            companyName: 'Fourcaster LLC | Contract',
            position: 'Software Developer',
            previousPositions: [],
            startDate: 'Mar 2021',
            endDate: 'Apr 2021',
            skills: [
                'JavaScript',
                'Vue.js'
            ],
            url: 'https://4casters.io/',
            accomplishments: `
                Refactored a Node.js server to follow the MVC design pattern, allowing for 
                future development to be more organized and efficient. Built pages and components
                to allow administrators to accurately track changes in the data.
            `
        }
    ];

    public LINKS = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kevinchristopherlane/',
            icon: 'assets/linkedin.png'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Kevinclane',
            icon: 'assets/github.png'
        }
    ];

    public PROJECTS: ProjectDetails[] = [
        {
            title: 'TimeTrackers',
            description: `
                Web application that allows users to track their time spent on various tasks.
                Users can also generate and download invoices. I actively used this while doing
                freelance work.
            `,
            image: 'assets/timetrackers.png',
            liveLink: 'https://www.timetrackers.net/#/',
            githubLink: 'https://github.com/Kevinclane/timeclock',
            technologies: [
                'Vue.js',
                'Node.js',
                'MongoDB',
                'Docx.js',
                'Moment.js',
                'Bootstrap',
                'PayPal API'
            ]
        }, {
            title: 'Texas Hold em',
            description: `
                Web application that allows users to play Texas Hold 'em against other users.
                The game was built in one week during a hackathon event. 
            `,
            image: 'assets/texasholdem.png',
            githubLink: 'https://github.com/Kevinclane/HackathonPoker',
            technologies: [
                'Vue.js',
                'Node.js',
                'MongoDB',
                'Socket.io',
                'Bootstrap'
            ]
        }
    ];
}
