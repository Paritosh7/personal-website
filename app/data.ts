export type Project = {
  name: string
  description: string
  details: string
  link: string
  video: string
  id: string
  image: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type TechStack = {
  id: string
  name: string
  image: string
}

export const TECHSTACK = [
  {
    id: 'js',
    name: 'JavaScript',
    image: '/techstack/javascript.png',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    image: '/techstack/typescript.png',
  },
  {
    id: 'react',
    name: 'React',
    image: '/techstack/react.png',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    image: '/techstack/nextjs.jpeg',
  },
  {
    id: 'python',
    name: 'Python',
    image: '/techstack/python.webp',
  },
  {
    id: 'django',
    name: 'Django',
    image: '/techstack/django.png',
  },
  {
    id: 'html',
    name: 'HTML',
    image: '/techstack/html.jpg',
  },
  {
    id: 'css',
    name: 'CSS',
    image: '/techstack/css.png',
  },
  {
    id: 'docker',
    name: 'Docker',
    image: '/techstack/docker.png',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Trade Reads UI - Book exchange platform',
    description:
      'A web-based UI for students to discover, list, and exchange books seamlessly.',
    details:
      'Trade Reads is a full-stack book exchange web application aimed at university students. The UI was built using React and TailwindCSS, allowing users to browse books, message other users, and manage listings. It integrates the Google Books API for autofill functionality and follows role-based access control for authenticated/unauthenticated users. The app was developed following agile methodology as part of a dissertation project at the University of Liverpool.',
    link: 'https://github.com/Paritosh7/trade-reads-ui',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    image: '/projects/project1.png',
  },
  {
    name: 'Delta Dash',
    description:
      'Real-time Formula 1 telemetry dashboard using Next.js and FastF1.',
    details:
      'Delta Dash is a real-time Formula 1 analytics dashboard that visualises telemetry, lap times, and sector data using the FastF1 API. Built with Next.js, TailwindCSS, and charting libraries, it provides live race insights in a user-friendly interface. The goal was to merge motorsport data science with modern frontend practices.',
    link: 'https://github.com/Paritosh7/delta-dash',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    image: '/projects/project2.png',
  },
  {
    name: 'Personal Portfolio',
    description:
      'A developer portfolio showcasing projects and skills using motion-primitives.',
    details:
      'Built using Next.js and motion-primitives, this interactive portfolio features animated transitions and showcases selected projects, experience, and contact details. It’s designed with performance and responsiveness in mind and reflects a minimalist aesthetic aligned with modern web design trends.',
    link: 'https://github.com/Paritosh7/personal-website',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
    image: '/projects/project3.png',
  },
  {
    name: 'Polymapper',
    description:
      'A GIS tool for defining serviceable zones using serverless technologies.',
    details:
      'Polymapper is a GIS web application built using Next.js and Leaflet.js. Developed at Delhivery, it enables users to draw polygons on a map to define serviceable areas for logistics hubs. The frontend was designed to interface with geospatial data services and enable real-time mapping of nearest facilities, reducing delayed deliveries by 18%.',
    link: 'company',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
    image: '/projects/project4.png',
  },
  {
    name: 'Flare',
    description:
      'A smart dispatch system for logistics using React and serverless backend.',
    details:
      'Flare is a logistics-focused web application developed to automate package assignments to distribution centres. Built with React and integrated with a serverless backend, it significantly improved operational efficiency by 30% at Delhivery. The system uses rule-based logic to assign packages dynamically and visualise dispatch progress.',
    link: 'company',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project6',
    image: '/projects/project5.avif',
  },
  {
    name: 'Job Flow',
    description:
      'A Django-based CRUD application simulating a job management system.',
    details:
      'Job Flow is a backend-focused CRUD application implemented using Django and PostgreSQL. It simulates job postings and applications, with admin functionality for managing job statuses. Designed to demonstrate backend development, RESTful APIs, and testing practices using Django Rest Framework.',
    link: 'https://github.com/Paritosh7/job-flow',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
    image: '/projects/project6.png',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Delhivery',
    title: 'Developer',
    start: '2022',
    end: '2023',
    link: '/experience/delhivery',
    id: 'work1',
  },
  {
    company: 'Enum Informatics',
    title: 'Software Engineer',
    start: '2019',
    end: '2021',
    link: '/experience/enum-informatics',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Paritosh7',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/paritoshsahni/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/paritosh.sahni',
  },
]

export const EMAIL = 'paritosh7.sahni@gmail.com'
