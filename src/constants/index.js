import ReactJsIcon from '@assets/icons/reactjs.svg';
import Html5Icon from '@assets/icons/html5.svg';
import Css3Icon from '@assets/icons/css3.svg';
import JSIcon from '@assets/icons/js.svg';
import NextJSIcon from '@assets/icons/nextjs.svg';
import NodeJSIcon from '@assets/icons/nodejs.svg';
import VueJSIcon from '@assets/icons/vuejs.svg';
import GitIcon from '@assets/icons/git.svg';
import SassIcon from '@assets/icons/sass.svg';
import ExpressJSIcon from '@assets/icons/expressjs.svg';
import githubIcon from '@assets/icons/github-brands.svg';
import twitterIcon from '@assets/icons/twitter-brands.svg';
import linkedinIcon from '@assets/icons/linkedin-brands.svg';

const LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '#Projects',
  },
  {
    name: 'About Me',
    href: '#About',
  },
  {
    name: 'Contact',
    href: '#Contact',
  },
];

const ABOUT_ME = {
  title: 'Who am I?',
  description:
    "I am a Web Developer; I am passionate about new technologies, I like learning new things and always thinking about improving my skills. I adapt quickly to changes; I'm a team player, friendly, and always willing to lend a helping hand. I would like to find a job where I can grow both personally and professionally",
  skills: [
    {
      name: 'HTML5',
      icon: Html5Icon,
    },
    {
      name: 'CSS3',
      icon: Css3Icon,
    },
    {
      name: 'SASS',
      icon: SassIcon,
    },
    {
      name: 'JavaScript',
      icon: JSIcon,
    },
    {
      name: 'ReactJS',
      icon: ReactJsIcon,
    },
    {
      name: 'NextJS',
      icon: NextJSIcon,
    },
    {
      name: 'VueJS',
      icon: VueJSIcon,
    },
    {
      name: 'NodeJS',
      icon: NodeJSIcon,
    },
    {
      name: 'ExpressJS',
      icon: ExpressJSIcon,
    },
    {
      name: 'Git',
      icon: GitIcon,
    },
  ],
};

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/DavidB_M1',
    icon: twitterIcon,
  },
  {
    name: 'Github',
    href: 'https://github.com/david-fb',
    icon: githubIcon,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/david-basto/',
    icon: linkedinIcon,
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Kids' Store",
    description: "Project made based on Platzi's JavaScript school project (YARD Sale) where the Back-end and Front-end were created",
    technologies: ['NextJS', 'SCSS', 'NodeJS', 'PostgreSQL', 'Sequelize', 'JWT', 'NextAuth', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-1.webp?alt=media&token=cf58cd84-dbcc-4ee7-97dd-9259854067ec',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-2.webp?alt=media&token=5f1ca01c-77a1-4366-a27c-8e0660aff1c1',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-3.webp?alt=media&token=230f63ff-b244-48e5-b993-ef615cab34e1',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-4.webp?alt=media&token=0540eac4-8324-4a05-9693-4a21214844cf',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-5.webp?alt=media&token=1b0dba84-0c9c-4a7a-8ac8-b345c096008a',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-6.webp?alt=media&token=ca812bf3-417f-4606-980d-c16143ddc9e9',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-7.webp?alt=media&token=954b91df-3722-4e19-83dc-c5a0d87376f3',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-8.webp?alt=media&token=76ac004f-0e43-4508-bfe0-0374721b5f10',
    ],
    liveWeb: 'https://store-nextjs-ten.vercel.app',
    area: ['Front-end', 'Back-end'],
  },
  {
    id: 2,
    title: 'Clothes Catalogue',
    description: 'Personal project to show available clothing catalog, which has a login system to be able to add, edit, and delete an item. It also allows you to download the image',
    technologies: ['VueJS', 'CSS', 'Microservices', 'DjangoRF', 'Firebase', 'SpringBoot', 'GraphQL', 'JWT', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-1.webp?alt=media&token=f28db87b-dc02-4504-8788-df8b27b7538e',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-2.webp?alt=media&token=e2b5bafe-8892-4779-a413-2f2426f59d8a',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-3.webp?alt=media&token=820290d6-9400-4158-b7ac-335e74ae8fd4',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-4.webp?alt=media&token=2e530a5c-72d1-4a77-8462-31106758be9e',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-5.webp?alt=media&token=d71be554-0855-4b35-bac4-f8fed69ed5f4',
    ],
    liveWeb: 'https://col-inventario-web.vercel.app',
    area: ['Front-end', 'Back-end'],
  },
  {
    id: 3,
    title: 'CliniPet',
    description:
      'Project carried out in the program MisionTic2022 cycle 4. It is a system for a veterinary in which we can register users with different roles. Users can add pets and request appointments. The app was Developed with the SCRUM methodology',
    technologies: ['VueJS', 'Tailwind', 'Microservices', 'MongoDB', 'PostgreSQL', 'DjangoRF', 'SpringBoot', 'GraphQL', 'JWT', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-1.webp?alt=media&token=a3aa4ba6-ccb0-4e1d-9fe5-65099440d201',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-2.webp?alt=media&token=aa44b3ec-67f9-472c-a844-2ce3c37b5dce',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-3.webp?alt=media&token=1b1fca0e-3f22-4ff1-9228-39a02c9a1fe4',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-4.webp?alt=media&token=2ddef558-1721-4c05-a7bc-d4e45e9d3a48',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-5.webp?alt=media&token=835ae85e-e0e1-4f80-bbcd-d1437aef20a0',
    ],
    youtube: 'https://www.youtube.com/watch?v=KugsqdGCLOc',
    liveWeb: 'https://clinipet-web.herokuapp.com/',
    area: ['Front-end', 'Back-end'],
  },
  {
    id: 4,
    title: 'Pharmacy Inventory',
    description:
      'Project carried out in the program MisionTic2022 cycle 3. It is a system for a pharmaceutical chain in which we can have different branches with their respective inventories and administrator, it allows us to place orders',
    technologies: ['VueJS', 'CSS', 'DjangoRF', 'PostgreSQL', 'JWT', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-1.webp?alt=media&token=862854ea-d58e-4fec-9b8b-6f3cfa9994fd',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-2.webp?alt=media&token=cbcd1f8a-03d3-4dd7-b657-65e8d1c8794d',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-3.webp?alt=media&token=6a52525d-9c45-4dca-97fe-ece80000585c',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-4.webp?alt=media&token=6e1f4436-fc00-4f40-9b27-fbe385b42a4b',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-5.webp?alt=media&token=9c52d9c2-7c1c-4e7c-bf5f-daf5f406b60c',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-6.webp?alt=media&token=0b11dc19-b960-438f-ba26-312eac0a616e',
    ],
    youtube: 'https://www.youtube.com/watch?v=ZmmRqVCttZk',
    liveWeb: 'https://farmaciabeta-fe.herokuapp.com/',
    area: ['Front-end', 'Back-end'],
  },
];

module.exports = { LINKS, ABOUT_ME, SOCIAL_LINKS, PROJECTS };
