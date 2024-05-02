import { JobExperience } from "../models/job-experience";

export class DataConstants {
    public DataConstants() {

    }

    public ABOUT_ONE = `
        In June of 2020, I enrolled in a local coding bootcamp. The course was challenging
        and thorough, but also very enjoyable. I took what I had learned and began a freelance
        business, worked on personal projects, and hunted for a full-time position. Since then,
        I've worked at a couple of consulting firms helping some huge companies with their 
        software needs.
    `;

    public ABOUT_TWO = `
        A couple of my favorite personal projects are the TimeTrackers and Texas Hold 'em applications.
        Timetrackers was developed over 2 years and provided plenty of challenges to grow my 
        abilities. Texas Hold em' was an ambitious hackathon project that required any card 
        game to be built in one week. As if the more complex game choice wasn't enough of a 
        challenge, the project was intended for two people and I was building it myself.
    `;

    public ABOUT_THREE = `
        Outside of software, I enjoy going for a run/hike, playing video games, snowboarding,
        longboarding, repairing cars, and making candy for my family during the holidays.
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
                'Typescript',
                'Java',
                'Springboot',
                'Maven',
                'MSSql',
                'MySql',
                'Draw.io',
                'Figma',
                'Scss'
            ],
            url: 'https://www.allata.com/',
            accomplishments: ''
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
                'Typescript',
                'Java',
                'Springboot',
                'Gradle',
                'MySql',
                'PHP',
                'GoLang',
                'Scss'
            ],
            url: 'https://www.intimetec.com/',
            accomplishments: ''
        },
        {
            companyName: 'Mesh Software | Contract',
            secondName: 'Flatout MotorSports',
            position: 'Software Developer',
            previousPositions: [],
            startDate: 'Oct 2020',
            endDate: 'July 2020',
            skills: [
                '.NET',
                'C#',
                'Angular 1',
                'Scss'
            ],
            url: 'https://www.flatoutmotorcycles.com/',
            accomplishments: ''
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
            accomplishments: ''
        }
    ];
}