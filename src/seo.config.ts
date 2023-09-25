// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://somerandomdolphin.github.io/',
    siteName: 'Pradipta Arya Daniswara Personal Website',
    images: [
      {
        url: `https://somerandomdolphin.github.io/images/og/logo.png`,
        width: 1920,
        height: 1080,
        alt: 'Pradipta Arya Daniswara',
      },
    ],
  },
  titleTemplate: '%s | Pradipta Arya Daniswara',
  description:
    'Pradipta Arya Daniswara is a passionate student with a strong interest in web programming and computer science. He has four years of experience in web programming and design from maintaining various open-source projects and is now currently learning to be a data scientist.',
  defaultTitle: 'Pradipta Arya Daniswara',
  additionalLinkTags: [
    {
      rel: 'png',
      href: '/favicon.ico',
    },
  ],
};

export default config;
