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

module.exports = { LINKS, ABOUT_ME };
