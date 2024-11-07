import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dustin',
    lastName:  'Moore',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Developer',
    avatar:    '/images/fam.png',
 // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
    subline: <>Hi! I’m Dustin, a <InlineCode>web developer</InlineCode>focused on creating engaging digital experiences with clean, <InlineCode>efficient code</InlineCode>. In my spare time, I dive into personal projects to explore new frameworks and techniques, continuously honing my skills and staying current with the latest web technologies.</>
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
I’m a front-end developer with a focus on creating responsive, user-driven web experiences. Starting with Squarespace, I quickly progressed to advanced frameworks like React, Bootstrap, and Next.js, allowing me to build seamless, high-quality digital solutions. I leverage tools such as Git, GitHub, and Vercel to streamline workflows and ensure efficient deployment, consistently delivering projects ahead of schedule. By embracing AI and industry innovations, I prioritize efficiency and modern standards, crafting engaging, intuitive web experiences that drive results.
</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelance',
                timeframe: '2021 - Present',
                role: 'Web Developer',
                achievements: [
                    <>Developed small business apps using Next.js and React, combining dynamic routing and optimized performance features to showcase my projects effectively. These apps highlight my expertise in modern web development, including responsive design and seamless navigation.</>,
                    <>Experienced in using Git and GitHub for version control, maintaining organized code management and collaboration, with streamlined workflows for deploying apps to Vercel for fast, reliable updates</>,
                    <>Employed AI tools to streamline my workflow, optimize project efficiency, and deliver high-quality results ahead of schedule, using innovations to enhance both development speed and user experience.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/port-01.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                company: 'Kinetic Solutions LLC',
                timeframe: '2021 - Present',
                role: 'Lead Designer/Web Developer',
                achievements: [
                    <>Engineered a dynamic business site, utilizing advanced customization options, integrated SEO capabilities, and responsive design to deliver a high-performance platform that amplifies brand presence and optimizes client interactions.</>,
                    <>Developed and maintained a high-performance eCommerce shop, incorporating secure payment gateways and streamlined navigation to provide a seamless shopping experience and drive sales growth.</>
                ],
                images: [// optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/ks-03.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    } ]
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
                description: <>React | Next.js | Angular | Vue.js</>,
                images: [
                    {
                        src: '/images/projects/project-01/code-01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    
                ]
            },
            {
                title: 'Automation & Workflow Optimization',
                description: <>Webpack | Gulp | npm/Yarn | Continuous integration (CI/CD) with GitHub Actions</>,
                images: [
                    {
                        src: '/images/projects/project-01/flow-01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Web Development Languages',
                description: <>HTML | CSS | JavaScript | TypeScript</>,
                images: [
                    {
                        src: '/images/projects/project-01/lang.jpeg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Responsive Design',
                description: <>CSS Grid | Flexbox | Media Queries | Mobile-First design</>,
                images: [
                    {
                        src: '/images/projects/project-01/responsive-web-design.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'UI Libraries & Frameworks',
                description: <>Bootstrap | Material-UI | Tailwind CSS</>,
                images: [
                    {
                        src: '/images/projects/project-01/bootstrap-01.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Deployment Platforms',
                description: <>Vercel | Netlify | AWS</>,
                images: [
                    {
                        src: '/images/projects/project-01/vercel-01.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Version Control & Collaboration',
                description: <>Git | GitHub</>,
                images: [
                    {
                        src: '/images/projects/project-01/github-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
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
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };