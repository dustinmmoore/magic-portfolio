import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dustin',
    lastName:  'Moore',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'IT and Web Solutions Engineer',
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
    subline: <>Hi! I’m Dustin, a detail-oriented <InlineCode>IT and Web Solutions Engineer</InlineCode> with over five years of experience in technical support, system troubleshooting, and IT infrastructure management. Since 2021, I’ve specialized in full-stack web development, designing responsive, user-friendly websites using modern frameworks. My combined expertise in IT and web development enables me to deliver seamless, efficient, and reliable digital solutions tailored to meet diverse needs.</>
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
        description: <>I’m a detail-oriented IT professional and Full-Stack Web Developer with over five years of experience in technical support, system troubleshooting, and IT infrastructure management. Since 2021, I’ve focused on creating responsive, user-friendly websites using modern frameworks, combining IT expertise and development skills to deliver seamless, reliable digital solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            
            {
                company: 'Kinetic Solutions LLC',
                timeframe: '2021 - Present',
                role: 'Full-Stack Developer / Business Owner / Instructor',
                achievements: [
                    <>Founded Kinetic Solutions LLC, delivering hands-on tactical training to civilians, law enforcement, and military personnel.</>,
                    <>Designed and developed responsive websites using HTML, CSS, JavaScript, React.js, NEXT.js, and Bootstrap.</>,
                    <>Built dynamic web applications with headless CMS integrations to enhance content management and user engagement.</>,
                    <>Deployed projects to Vercel, ensuring seamless user experience and optimized performance.</>,
                    <>Collaborated with clients to translate requirements into functional, visually appealing designs.</>

                ],
                images: []
            },
            {
                company: 'Sawmill TTC',
                timeframe: '2021 - 2022',
                role: 'Director of Operations / IT Support Specialist / Instructor',
                achievements: [
                    <>Managed daily activities, logistics, and a variety of training programs for military units, law enforcement, and civilians.</>,
                    <>Oversaw IT systems used for facility operations and client interactions, including troubleshooting and configuration.</>,
                    <>Managed company website and introduced a stream-lined UI/UX to drive traffic.</>,
                    <>Managed inventory of IT equipment and facilitated procurement to maintain readiness for training events.</>,
                    <>Provided technical training and support for in-house staff on software and communications tools.</>
                ],
                images: []
            },
            {
                company: 'Colorado Technical University',
                timeframe: '2017 - 2020',
                role: 'Information Technology Support Specialist',
                achievements: [
                    <>Provided 2nd-level IT support to faculty and students, resolving hardware/software issues and network disruptions.</>,
                    <>Deployed machines from centralized servers and managed user accounts through Active Directory.</>,
                    <>Maintained documentation for recurring technical issues to support operational efficiency.</>,
                    <>Investigated and documented data lineages throughout data lifecycle.</>,
                    <>Diagnosed and repaired end-user devices, ensuring minimal downtime.</>,
                    <>Upgraded all campus machines from Windows 8 to Windows 10 with zero student and faculty downtime.</>
                ],
                images: []
            },
            {
                company: 'United States Army',
                timeframe: '2004 - 2015',
                role: 'Recon Team Leader / Sniper Team Leader / Infantry Squad Leader',
                achievements: [
                    <>Spearheaded comprehensive training initiatives that elevated skill development, operational readiness, and team cohesion.</>,
                    <>Successfully managed and maintained accountability for assets exceeding $5 million, ensuring optimal resource utilization and mission preparedness.</>,
                    <>Directed diverse teams during multinational operations, achieving mission success in dynamic and complex environments.</>,
                    <>Developed and enforced rigorous protocols for high-risk missions, ensuring security, precision, and compliance with operational standards.</>,
                    <>Consistently earned top scores in advanced tactical training, demonstrating an unwavering commitment to team effectiveness and operational excellence.</>,
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
                title: 'IT Tools & Systems',
                description: <>Active Directory | Windows | Linux | macOS | iPadOS | iOS | Remote Desktop | TCP/IP | DNS | VPN | Wireshark</>,
                images: [] 
            },
            {
                title: 'Web Development Tools',
                description: <>HTML | CSS | JavaScript | React.js | Bootstrap | Next.js | Hydrogen | Media Queries | Mobile-First Design | Bootstrap | Material-UI | Tailwind CSS | Webpack | Gulp | npm</>,
                images: []
            },
            {
                title: 'Deployment & Version Control',
                description: <>Vercel | Netlify | AWS | Git | GitHub | Continuous Integration (CI/CD) with GitHub Actions</>,
                images: []
            },
            {
                title: 'Hardware & Software',
                description: <>Machine Deployment | System Imaging | High-Performance Machine Engineering | SLDC | Machine Maintenance & Optimization | Software Installation & Configuration | Hardware Troubleshooting | Network Configuration
            </>,
                images: []
            },
            {
                title: 'Virtualization',
                description: <>VMware | Hyper-V | VirtualBox | Docker Containers</>,
                images: []
            },
            {
                title: 'Documentation',
                description: <>IT Ticketing Systems | Knowledge Base Creation | Workflow Optimization | Technical Documentation</>,
                images: []
            },
            {
                title: 'Compliance & Security',
                description: <>Policy Creation | IT Security Standards</>,
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