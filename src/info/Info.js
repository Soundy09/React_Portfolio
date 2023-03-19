import self from "../img/Lance_Poster.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(91, 255, 46)", "rgb(75, 189, 0)"];




export const info = {
    firstName: "Lance",
    lastName: "Soundy",
    initials: "LS",
    position1: "UI Design",
    position2: "& Front-end Development",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Fuelled By Coffee'
        },
        {
            emoji: '🌎',
            text: 'Located In Hamilton, ON'
        },
        {
            emoji: "💼",
            text: "Lead Designer at Global Printing"
        },
        {
            emoji: "📧",
            text: "Soundy09@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://github.com/Soundy09",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/lance-soundy-76b571268/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Hey! my name is Lance Soundy, I started my career working in the digital print world. Where I have worked my way up to lead graphic designer. I have since furthered my Education with a Post-grad in UX/UI and in Front-end Development. Which has lead me to become a well rounded designer who with a firm grasp on design principles and creating gorgeous UI.",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Adobe Suite', 'Html5', 'Css3', 'Figma', 'Tailwind'],
            exposedTo: ['Nodejs', 'Jquery', 'Blender', 'Typescript']
        }
    ,
    hobbies: [
        {
            label: 'Jiu-Jitsu',
            emoji: '🥋'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Formula 1',
            emoji: '🏁'
        }
    ],
    portfolio: [ 
        {
            title: "Gig Project",
            live: "https://www.figma.com/proto/Kdb2Ks3bq49bPCrdUb044a/Gig-Prototyping?node-id=1296%3A20723&scaling=scale-down&page-id=1296%3A20705&starting-point-node-id=1296%3A20723&show-proto-sidebar=1", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://drive.google.com/drive/folders/11HnzKxNsL4_PgsMZG6Sx7T6JRY1SjnNc?usp=sharing", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Zoo App",
            live: "https://www.figma.com/proto/DAe3W65MJc64DGrxr8fRsu/Zoo-App-UI-Design?node-id=194%3A10298&scaling=min-zoom&page-id=186%3A576&starting-point-node-id=238%3A1128&show-proto-sidebar=1",
            source: "https://drive.google.com/drive/folders/1TOdzBH5RdpUaEYVKZQ3pR0cByWFSSXpK?usp=sharing",
            image: mock2
        },
        {
            title: "React Expense Tracker",
            live: "https://coruscating-fudge-0e264f.netlify.app/",
            source: "https://github.com/Soundy09/Expense-Tracker---React",
            image: mock3
        },
        {
            title: "Rosco's Diner",
            live: "https://jocular-smakager-76cb33.netlify.app",
            source: "https://github.com/Soundy09/Food_App",
            image: mock4
        },
        {
            title: "Graphic Design Portfolio",
            live: "https://drive.google.com/drive/folders/1bT35O3JOfwn2Y6SSYN-T7PBXpn8aNC7a?usp=sharing",
            source: "https://github.com/Soundy09/React_Portfolio",
            image: mock5
        }
    ]
}