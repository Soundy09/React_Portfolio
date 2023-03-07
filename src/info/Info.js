import self from "../img/Lance_Poster.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 245, 49)", "rgb(250, 250, 250)"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Lance",
    lastName: "Soundy",
    initials: "LS", // the example uses first and last, but feel free to use three or more if you like.
    position1: "UI Design",
    position2: "& Front-end Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled By Coffee'
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
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
            title: "React To Do",
            live: "https://incandescent-centaur-ad0724.netlify.app/",
            source: "https://github.com/Soundy09/To_Do--React",
            image: mock4
        },
        {
            title: "Graphic Design Portfolio",
            live: "https://drive.google.com/drive/folders/1bT35O3JOfwn2Y6SSYN-T7PBXpn8aNC7a?usp=sharing",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}