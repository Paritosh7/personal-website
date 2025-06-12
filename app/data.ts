type Project = {
  name: string
  description: string
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
      'A book exchange web application (UI) that lets student exchange books.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    image: '/projects/project1.png',
  },
  {
    name: 'Delta Dash',
    description:
      'Real-time Formula 1 dashboard using Next.js and FastF1 for live telemetry, lap data, and session insights.',
    link: 'https://github.com/Paritosh7/delta-dash',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    image: '/projects/project2.png',
  },
  {
    name: 'Personal Portfolio',
    description:
      'My personal portfolio built using Next.js and motion-primitives',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
    image: '/projects/project3.png',
  },
  {
    name: 'Job Flow',
    description: 'A simple CRUD application built in Django',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
    image: '/projects/project4.png',
  },
  {
    name: 'Polymapper',
    description:
      'A simple web application for testing Serverless and for my own learning',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
    image: '/projects/project5.jpg',
  },
  {
    name: 'Flare',
    description:
      'A simple web application for testing Serverless and for my own learning',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project6',
    image: '/projects/project5.jpg',
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
