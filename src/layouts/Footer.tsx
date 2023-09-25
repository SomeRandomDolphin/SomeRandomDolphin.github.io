import NextImage from 'next/image';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import {
  experiences,
  quickLinks,
  skills,
  socials,
} from '@/contents/footer';

export default function Footer() {
  return (
    <footer className='w-full bg-typo-white z-[100]'>
      <div className='flex flex-col gap-6 py-12 layout divide-y divide-typo-secondary'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between gap-6 items-start md:pb-20'>
          <div className='flex flex-row md:pt-10 items-center gap-4 w-fit mx-auto'>
            <NextImage
              src='/images/logo.png'
              alt='logo'
              width='251'
              height='241'
              className='w-12 md:w-28 lg:w-36'
            />
            <Typography
              font='montserrat'
              variant='h6'
              color='primary'
              weight='semibold'
              className='text-2xl'
            >
              Pradipta Arya Daniswara
            </Typography>
          </div>
          <div className='flex flex-col gap-6 lg:gap-24 md:flex-row w-full justify-end'>
            <div className='flex flex-col'>
              <Typography
                font='exo'
                color='primary'
                variant='p'
                weight='bold'
                className='text-lg text-center md:text-left'
              >
                Skills
              </Typography>
              <ul className='flex flex-col mt-2.5 gap-y-2.5'>
                {skills.map((link) => (
                  <li key={link.name}>
                    <UnstyledLink href={link.href}>
                      <Typography
                        font='montserrat'
                        color='primary'
                        variant='bt'
                        weight='medium'
                        className='hover:text-typo-secondary text-base text-center md:text-left'
                      >
                        {link.name}
                      </Typography>
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col'>
              <Typography
                font='exo'
                color='primary'
                variant='p'
                weight='bold'
                className='text-lg text-center md:text-left'
              >
                Experiences
              </Typography>
              <ul className='flex flex-col mt-2.5 gap-y-2.5'>
                {experiences.map((link) => (
                  <li key={link.name}>
                    <UnstyledLink href={link.href}>
                      <Typography
                        font='montserrat'
                        color='primary'
                        variant='bt'
                        weight='medium'
                        className='hover:text-typo-secondary text-base text-center md:text-left'
                      >
                        {link.name}
                      </Typography>
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col'>
              <Typography
                font='exo'
                color='primary'
                variant='p'
                weight='bold'
                className='text-lg text-center md:text-left'
              >
                Quick Links
              </Typography>
              <ul className='flex flex-col mt-2.5 gap-y-2.5'>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <UnstyledLink href={link.href}>
                      <Typography
                        font='montserrat'
                        color='primary'
                        variant='bt'
                        weight='medium'
                        className='hover:text-typo-secondary text-base text-center md:text-left'
                      >
                        {link.name}
                      </Typography>
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden md:block' />
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-6'>
          <Typography
            color='primary'
            variant='btn'
            className='text-base'
            weight='medium'
          >
            &copy; 2023 Pradipta Arya Daniswara.
          </Typography>
          <div className='flex flex-row items-center gap-4 text-typo-primary'>
            {socials.map((social) => (
              <UnstyledLink
                key={social.name}
                href={social.href}
                className='flex justify-center items-center w-10 h-10 rounded-full bg-typo-white hover:bg-typo-light'
              >
                <NextImage
                  src={social.img.src}
                  alt={social.img.alt}
                  width={social.img.width}
                  height={social.img.height}
                />
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
