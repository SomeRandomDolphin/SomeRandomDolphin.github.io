import NextImage from 'next/image';

import { ExtractProps } from '@/types/helper';

type Footer = {
  name: string;
  href: string;
};

export const skills: Footer[] = [
  {
    name: 'Full Stack Web Developer',
    href: '#skill',
  },
  {
    name: 'Data Scientist',
    href: '#skill',
  },
  {
    name: 'Cloud Engineer',
    href: '#skill',
  },
  {
    name: 'Game Developer',
    href: '#skill',
  },
  {
    name: 'Dev Ops and ML Ops',
    href: '#skill',
  },
  {
    name: 'Soft Skills',
    href: '#skill',
  },
];

export const experiences: Footer[] = [
  {
    name: 'Avalon AI',
    href: '#experience',
  },
  {
    name: 'GDSC ITS',
    href: '#experience',
  },
  {
    name: 'Mabacup ITS',
    href: '#experience',
  },
  {
    name: 'NukoBot',
    href: '#experience',
  },
  {
    name: 'Caffeine Overflow Studio',
    href: '#experience',
  },
];

export const quickLinks: Footer[] = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Skill',
    href: '#skill',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export type Social = {
  name: string;
  href: string;
  img: ExtractProps<typeof NextImage>;
};

export const socials: Social[] = [
  {
    name: 'Pradipta Arya Daniswara',
    href: 'https://www.linkedin.com/in/pradipta-arya-daniswara/',
    img: {
      src: '/images/icon/linkedin.png',
      alt: 'linkedin',
      width: 24,
      height: 24,
    },
  },
  {
    name: 'aryadaniswarapradipta',
    href: 'mailto:aryadaniswarapradipta@email.com',
    img: {
      src: '/images/icon/email.png',
      alt: 'email',
      width: 24,
      height: 24,
    },
  },
  {
    name: 'SomeRandomDolphin',
    href: 'https://www.kaggle.com/somerandomdolphin',
    img: {
      src: '/images/icon/kaggle.png',
      alt: 'kaggle',
      width: 24,
      height: 24,
    },
  },
  {
    name: 'SomeRandomDolphin',
    href: 'https://github.com/SomeRandomDolphin',
    img: {
      src: '/images/icon/github.png',
      alt: 'github',
      width: 24,
      height: 24,
    },
  },
];
