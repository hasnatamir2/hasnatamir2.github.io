
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
 
const Greeting = {
    userName: 'Hasnat Amir',
    title: emoji('Hasnat Amir 💻'),
    subTitle: 'MERN Stack Web dev | React-Native Mobile dev',
    resumeLink: '/',
    socialLink:[
        {
            icon: ['fab', 'twitter'],
            link: 'https://twitter.com/HasnatAmir2',
            tooltip: 'Twitter',
            bgColor: '#00acee',
        },
        {
            icon: ['fab', 'github'],
            link: 'https://github.com/hasnatamir2',
            tooltip: 'Github',
            bgColor: '#211F1F',
        },
        {
            icon: ['fab', 'linkedin-in'],
            link: 'https://www.linkedin.com/in/hasnat-amir-a5a266175/',
            tooltip: 'LinkedIn',
            bgColor: '#0e76a8',
        },
    ]
}
//  If you want to use Emoji in your content use emoji() like I used on line 10 other wise it will generate warnings

const socialLink = [
    // formate for icon: [ 'fontAwesome icon class', fontAwesome icon name]
    // keep in mind only Solid (fas) and Brand (fab) type of icons are installed and valid for this site
    
    {
        icon: ['fab', 'facebook-f'],
        link: 'https://web.facebook.com/Mhasnatamir/',
        tooltip: 'Facebook',
        bgColor: '#3b5998',
    },
    {
        icon: ['fab', 'twitter'],
        link: 'https://twitter.com/HasnatAmir2',
        tooltip: 'Twitter',
        bgColor: '#00acee',
    },
    {
        icon: ['fab', 'instagram'],
        link: 'https://www.instagram.com/hasnatamir2/',
        tooltip: 'Instagram',
        bgColor: '#3f729b',
    },
    {
        icon: ['fab', 'github'],
        link: 'https://github.com/hasnatamir2',
        tooltip: 'Github',
        bgColor: '#211F1F',
    },
    {
        icon: ['fab', 'linkedin-in'],
        link: 'https://www.linkedin.com/in/hasnat-amir-a5a266175/',
        tooltip: 'LinkedIn',
        bgColor: '#0e76a8',
    },
    {
        icon: ['fab', 'google'],
        link: 'mailto:hasnatamir2@gmail.com',
        tooltip: 'Google',
        bgColor: '#FFA500',
    },
    {
        icon: ['fab', 'whatsapp'],
        link: 'tel:+923084802849',
        tooltip: 'WhatsApp',
        bgColor: '#075e54',
    },
    
]

const aboutMe = {
    name: 'Hasnat Amir',
    image: require("./assets/images/hasnatAmir.JPG"),
    desc: 'I am a Web developer and a Mobile Developer currently studying in NUST, Pakistan. My main area of interest and work are Ecommerce development sometimes other cool stuff. My approach towards for my work is always minimalist and yet with coolest features and functionalities. Let’s make the best of it!',
    resumeLink: 'https://drive.google.com/file/d/1mCzbiCb007_q9CVNEbh1ClC2YR1Kk_bU/view?usp=sharing',
}

const skillSet = {
    programmingLang:[
        {
            name: 'JavaScript',
            icon: ['fab', 'js'],
            color: ''
        },
        {
            name: 'dart',
            icon: ['fas', 'terminal'],
            color: ''
        },
        {
            name: 'css3',
            icon: ['fab', 'css3'],
            color: ''
        },
        {
            name: 'python',
            icon: ['fab', 'python'],
            color: ''
        },
        {
            name: 'c/c++',
            icon: ['fab', 'cuttlefish'],
            color: ''
        },
        {
            name: 'java',
            icon: ['fab', 'java'],
            color: ''
        },
    ],
    Tools:[
        {
            name: 'React.js',
            icon: ['fab', 'react'],
            color: ''
        },
        {
            name: 'Node.js',
            icon: ['fab', 'node-js'],
            color: ''
        },
        {
            name: 'NPM',
            icon: ['fab', 'npm'],
            color: ''
        },
        {
            name: 'React Native',
            icon: ['fab', 'react'],
            color: ''
        },
        {
            name: 'Flutter',
            icon: ['fas', 'terminal'],
            color: ''
        },
        {
            name: 'MongoDB',
            icon: ['fas', 'database'],
            color: ''
        },
        {
            name: 'Docker',
            icon: ['fab', 'docker'],
            color: ''
        },
        {
            name: 'AWS',
            icon: ['fab', 'aws'],
            color: ''
        },
        {
            name: 'MySQL Database',
            icon: ['fas', 'database'],
            color: ''
        },
        {
            name: 'Firebase',
            icon: ['fas', 'fire'],
            color: ''
        },
    ],
}

const projects = {
    title: 'My Projects',
    subtitle: 'Go & Check it!!',
    projects: [
        {
            title: 'Create.',
            desc: 'Create your own gift card, weeding cards, etc online and purchase',
            image: require("./assets/images/home_create.png"),
            tools: [
                'React.js',
                'Redux',
                'Node.js'
            ],
            link: '/'
        },
        {
            title: 'Jahangiri Associates.',
            desc: 'Real estate and property dealing Company website',
            image: require("./assets/images/Jahangiri1.png"),
            tools: [
                'React.js',
                'Material-UI',
                'Node.js'
            ],
            link: 'https://www.jahangiriassociates.com.pk/'
        }
    ]
}

const blogs = {
    title: 'My Blogs',
    subtitle: 'Read it out!!',
    show: false,
    blogs: [
        {
            title: 'Why react is best?',
            desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            link: '/',
        },
    ]
}

const experience = {
    title: 'Experience & Education',
    subtitle: 'Have a better idea of me',
    experience: [
        {
            title: 'MERN Stack developer',
            company: 'Fiver',
            time: 'Aug 2019 - Present',
            achievment: 'REST api, Integration, Node.js, JWT, Express.js, mongoDB',
            catagory: 'work',
        },
        {
            title: 'Backend Web Developer',
            company: 'snapthat',
            time: 'Jun 2019 - Aug 2019',
            achievment: 'REST api, Integration, Node.js, JWT, Express.js, mongoDB',
            catagory: 'work',
        },
        {
            title: 'Graphics Designer',
            company: 'Edwiz',
            time: 'Jun 2019 - Aug 2019',
            achievment: 'vector Art, canvas designing, Adobe Illustrator, Adobe Photoshop, Adobe InDesign,pitch presentation design,',
            catagory: 'work',
        },
        {
            title: 'Student',
            company: 'National University of Science & Technology, Isb, Pakistan',
            time: 'Sep 2017 - Present',
            achievment: 'Becholer in Computer Science',
            catagory: 'education',
        },
    ]
}

const contact = {
    title: 'Contact',
    subtitle: 'DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.',
    message: [
        {
            icon: ['fas', 'map-marker-alt'],
            msg: 'Lahore, Pakistan'
        },
        {
            icon: ['fas', 'handshake'],
            msg: 'Looking For Opportunities'
        }
    ]
}

const openSource = {
    githubToken: '7c2c3e8e38949b6f36c2d6a114a7aec75bd235d1',
    githubUserName: "hasnatamir2", // Change to your github username to view your profile in Contact Section.
    show :"true" // Set true or false to show Contact profile using Github, defaults to false
};


export {
    Greeting,
    socialLink,
    aboutMe,
    skillSet,
    projects,
    blogs,
    experience,
    contact,
    openSource,
}