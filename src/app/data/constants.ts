import { JobExperience } from "../models/job-experience";
import { ProjectDetails } from "../models/project";

export class DataConstants {
    public ABOUT_ONE = `
        I started my career in 2020 after completing a coding bootcamp. I quickly moved from
        freelancing to consulting, delivering full-stack solutions across multiple tech stacks.
        I enjoy taking on challenging projects and building systems that scale.
    `;

    public ABOUT_TWO = `
        My favorite personal projects include TimeTrackers and Texas Hold 'em. TimeTrackers is a
        two-year initiative with a complete invoicing workflow. Texas Hold 'em is a one-week
        hackathon build (solo) with real-time multiplayer logic.
    `;

    public ABOUT_THREE = `
        Away from code, I run/hike, snowboard, longboard, repair cars, and make candy for the holidays.
        I also explore game development as a creative outlet.
    `;


    public JOB_EXPERIENCES: JobExperience[] = [
        {
            companyName: 'Pacific Crest Services',
            position: 'Full Stack Developer',
            previousPositions: [],
            startDate: 'Aug 2025',
            endDate: 'Present',
            skills: [
                '.NET Core',
                'C#',
                'EFCore',
                'MSSQL',
                'Angular',
                'TypeScript',
                'Data Encryption',
                'Web Sockets',
                'Azure Blob Storage',
            ],
            url: 'https://pacificcrestservices.com/',
            accomplishments: `
                Built nearly 100% of the API server (200+ endpoints) with auth/role guards and PII data encryption.
                Implemented encrypted search over 2M+ indexed rows with ~1s live query performance.
                Created a composite mass-update endpoint for the largest data tree (CUD operations).
                Developed reporting pipeline + front-end: joined data views, filter/sort/column-selection, sub-report trees, graph visualization, and XLSX export.
                Added file upload workflow: CloudMersive virus scan + Azure Blob Storage attachment to clients.
                Adopted AI-assisted development to boost productivity and code quality.
            `
        },
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
