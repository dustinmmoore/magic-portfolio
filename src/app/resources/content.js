import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dustin',
    lastName:  'Moore',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Developer',
    avatar:    '/images/fam.png',
    location: 'South Carolina, US', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/dustinmmoore',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dustinmmoore/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dustinmmoore@icloud.com',
    }, 
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Shaping Digital Experiences with Passion and Purpose</>,
    subline: <>Hey there! I’m Dustin, a <InlineCode>full-stack developer</InlineCode> passionate about building engaging digital experiences with clean, efficient <InlineCode>code.</InlineCode> From designing responsive front-end interfaces to developing rock-solid back-end solutions, I thrive on tackling every part of web development. In my spare time, I dive into personal projects to experiment with new frameworks and techniques—always sharpening my skills and staying ahead of the curve.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/dustinmmoore'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>
I’m a full-stack developer specializing in responsive, user-focused web experiences. Starting with Squarespace, I quickly advanced to frameworks like React, Bootstrap, and Next.js, along with Node.js for back-end development, allowing me to build seamless, high-quality digital solutions from end to end. I use tools like Git, GitHub, and Vercel to optimize workflows and ensure efficient deployment, consistently delivering projects on time. By embracing AI and modern technologies, I prioritize efficiency and industry standards, crafting intuitive, engaging web experiences that drive results.
</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelancer',
                timeframe: '2024 - Present',
                role: 'Full-Stack Developer',
                achievements: [
                    <>I currently develop full-stack applications and websites for small businesses. Using Next.js and React, I focus on dynamic routing and server-side rendering for better performance and SEO. For static sites, I use HTML, CSS, and JavaScript to create clean, user-friendly platforms that showcase services effectively.</>,
                    <>Utilizing Git and GitHub for organized version control and efficient collaboration. I streamline deployment with Vercel, ensuring fast, reliable updates that keep projects running smoothly.</>,
                    <>Leveraging AI tools to enhance productivity, meet deadlines, and deliver high-quality results. These innovations help improve development speed and elevate the overall user experience, supporting clients in reaching their business goals.</>
                ],
                images: []
            },
            {
                company: 'Kinetic Solutions LLC',
                timeframe: '2021 - Present',
                role: 'Instructor / Full-Stack Developer',
                achievements: [
                    <>As the founder of Kinetic Solutions LLC, I lead our mission to provide practical, hands-on training for civilians, law enforcement, and military personnel. Our training focuses on building safety and confidence in high-stress situations. In addition to overseeing operations, I manage our online presence. By designing a user-friendly website, I simplify client connections, effectively showcase our work, and expand our reach—driving growth for our business.</>
                ],
                images: []
            },
            {
                company: 'Sawmill TTC',
                timeframe: '2021 - 2022',
                role: 'Director of Operations',
                achievements: [
                    <>As Director of Operations at the Sawmill Tactical Training Complex, I managed daily activities, logistics, and a variety of training programs for military units, law enforcement, and civilians. I introduced strategies that improved efficiency and ensured high safety standards in all training sessions. I also supported the digital strategy by maintaining the website and improving client engagement online, which helped increase our visibility and outreach.</>
                ],
                images: []
            },
            {
                company: 'United States Army',
                timeframe: '2004 - 2015',
                role: 'Sniper Team Leader / Recon Team Leader / Infantry Squad Leader',
                achievements: [
                    <>During my 11 years in the US Army, I held leadership roles such as Battalion Sniper Section Leader, Recon Team Leader, and Infantry Squad Leader. I developed and led training programs, managed assets worth over $5 million, and led teams in complex multinational missions. I also created protocols for classified operations and consistently achieved top scores in tactical training, showing my dedication to excellence and team effectiveness.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Tri-County Technical College',
                description: <>Computer Science, Emphasis in Cyber Security</>,
            },
            {
                name: 'Colorado Technical University',
                description: <>Computer Science, Emphasis in Cyber Security</>,
            },
            {
                name: 'Pikes Peak State College',
                description: <>Business & Business Administration</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Front-End Frameworks',
                description: <>React | Node.js | Next.js | Vue.js</>,
                images: [] 
            },
            {
                title: 'Automation & Workflow Optimization',
                description: <>Webpack | Gulp | npm | Continuous integration (CI/CD) with GitHub Actions</>,
                images: []
            },
            {
                title: 'Web Development Languages',
                description: <>HTML | CSS | JavaScript | TypeScript</>,
                images: []
            },
            {
                title: 'Responsive Design',
                description: <>CSS Grid | Flexbox | Media Queries | Mobile-First design</>,
                images: []
            },
            {
                title: 'UI Libraries & Frameworks',
                description: <>Bootstrap | Material-UI | Tailwind CSS</>,
                images: []
            },
            {
                title: 'Deployment Platforms',
                description: <>Vercel | Netlify | AWS</>,
                images: []
            },
            {
                title: 'Version Control & Collaboration',
                description: <>Git | GitHub</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about stuff...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/rsp-01.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/a-record-creator.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/ksmain-01.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
      
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };