import NextImage from 'next/image';
import { IconType } from 'react-icons';
import {
  HiOutlineDesktopComputer,
  HiOutlineGlobeAlt,
  HiOutlinePresentationChartLine,
  HiOutlineServer,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi';

import { Social } from '@/contents/footer';
import { ExtractProps } from '@/types/helper';

export type ServiceType = {
  title: string;
  description: string;
  Icon: IconType;
};

export const skills: ServiceType[] = [
  {
    title: 'Full Stack Web Developer',
    description: 'Bridging Frontend Innovation with Backend Expertise.',
    Icon: HiOutlineGlobeAlt,
  },
  {
    title: 'Data Scientist',
    description:
      'Transforming Data into Insights, Shaping Tomorrow with Analytical Excellence.',
    Icon: HiOutlinePresentationChartLine,
  },
  {
    title: 'Cloud Engineer',
    description: 'Where Innovation Meets Scalability and Security.',
    Icon: HiOutlineServer,
  },
  {
    title: 'Game Developer',
    description:
      'Crafting Virtual Worlds, Entertaining Real Emotions, One Pixel at a Time.',
    Icon: HiOutlineDesktopComputer,
  },
  {
    title: 'Dev Ops & ML Ops',
    description:
      'Seamless DevOps & ML Ops: Orchestrating Innovation from Code to AI.',
    Icon: HiOutlineUserGroup,
  },
  {
    title: 'Soft Skills',
    description:
      'Empowering People, Nurturing Personal and Professional Growth.',
    Icon: HiOutlineSparkles,
  },
];

export type OurTeamType = {
  name: string;
  role: string;
  topProject: string[];
  img: ExtractProps<typeof NextImage>;
  socials: Social[];
};

export type ProjectType = {
  title: string;
  tags: string[];
  description: string;
  img: ExtractProps<typeof NextImage>;
};

export const experiences: ProjectType[] = [
  {
    title: 'Head of ML Ops and Deployment at Avalon AI',
    tags: ['Express.js', 'Docker', 'Google Cloud'],
    description:
      'Led a team of developers to develop ML operation and deployment of AI products on Google Cloud Platform and various other platforms.',
    img: {
      src: '/images/projects/avalon-ai-logo.png',
      alt: 'Avalon AI',
      width: 400,
      height: 400,
    },
  },
  {
    title: 'Data Science Curriculum Team at GDSC ITS',
    tags: ['Public Speaking', 'Team Motivation', 'Data Science'],
    description:
      'Inspire and encourage new and aspiring developers to try new things and develop their first data science project.',
    img: {
      src: '/images/projects/gdsc-its-logo.png',
      alt: 'GDSC ITS',
      width: 400,
      height: 400,
    },
  },
  {
    title: 'Expert Backend Developer at Mabacup ITS',
    tags: ['Express.js', 'Prisma ORM', 'PostgreSQL'],
    description:
      'Developed the backend system of Maba Cup ITS from scratch with Express.js, Prisma ORM, PostgreSQL, and Docker Products.',
    img: {
      src: '/images/projects/mabacup-its-logo.png',
      alt: 'Mabacup ITS',
      width: 400,
      height: 400,
    },
  },
  {
    title: 'Lead Developer at NukoBot',
    tags: ['Web Services API', 'Module Development', 'Node.js'],
    description:
      'Led a team of developers to develop a Discord bot from scratch using Discord.js, Distube.js, Node.js, and various web services APIs with daily active users of over 1800 users.',
    img: {
      src: '/images/projects/nukobot-logo.png',
      alt: 'NukoBot',
      width: 400,
      height: 400,
    },
  },
  {
    title: 'Lead Developer at Caffeine Overflow Studio',
    tags: ['Game Development', 'Unity', 'Game Design'],
    description:
      'Foster a team of developers, artists, and storywriters capable of supporting each other and creating products using the Unity game engine.',
    img: {
      src: '/images/projects/caffeine-overflow-studio-logo.png',
      alt: 'Caffeine Overflow',
      width: 400,
      height: 400,
    },
  },
];
