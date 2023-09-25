import NextImage from 'next/image';
import { useState } from 'react';
import React from 'react';
import { CgClose } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';

import IconButton from '@/components/buttons/IconButton';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { navbar } from '@/contents/navbar';
import clsxm from '@/lib/clsxm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShowNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={clsxm('fixed top-0 z-[100] w-full', 'bg-typo-white')}>
      <div className='flex flex-row items-center h-14 md:h-20 justify-between layout'>
        <UnstyledLink
          href='/'
          className='flex flex-row items-center gap-2 md:gap-4'
        >
          <NextImage
            src='/images/logo.png'
            alt='logo'
            width='251'
            height='241'
            className='w-7 md:w-10'
          />
          <Typography
            font='montserrat'
            variant='h6'
            color='primary'
            className='text-base'
            weight='semibold'
          >
            Pradipta Arya Daniswara
          </Typography>
        </UnstyledLink>

        {/* Desktop Navbar */}
        <nav className='hidden lg:block'>
          <ul className='flex flex-row gap-6 justify-between items-center text-base'>
            {navbar.map(({ name, href }) => (
              <li key={name}>
                <UnstyledLink href={href} className='flex p-2.5'>
                  <Typography
                    font='exo'
                    color='primary'
                    variant='h6'
                    weight='semibold'
                    className='hover:text-typo-secondary'
                  >
                    {name}
                  </Typography>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='hidden lg:block'>
          <ButtonLink href='#contact' variant='primary' size='base'>
            Learn More
          </ButtonLink>
        </div>

        {!isOpen && (
          <IconButton
            variant='none'
            icon={HiMenu}
            className='lg:hidden'
            iconClassName='text-typo-primary'
            onClick={toggleShowNav}
          />
        )}
      </div>

      {/* Mobile Nav */}
      <div
        className={clsxm(
          'fixed left-0 top-0 flex flex-col items-center gap-12',
          'w-full h-screen px-4 pt-10 pb-24 lg:hidden bg-[#FAFAF9]',
          'transition ease-in-out duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <UnstyledLink
          href='/'
          className='flex flex-row items-center gap-2 md:gap-4'
        >
          <NextImage
            src='/images/logo.png'
            alt='logo'
            width='251'
            height='241'
            className='w-10'
          />
          <Typography
            font='montserrat'
            variant='h6'
            color='primary'
            className='text-2xl'
            weight='semibold'
          >
            Pradipta Arya Daniswara
          </Typography>
        </UnstyledLink>

        <nav className='flex-1 w-full'>
          <ul className='space-y-4'>
            <div className='space-y-4 w-full text-base p-2.5'>
              {navbar.map(({ name, href }) => (
                <li key={name}>
                  <UnstyledLink href={href} className='flex p-2.5'>
                    <Typography
                      font='exo'
                      color='primary'
                      variant='h6'
                      weight='semibold'
                      className='hover:text-typo-secondary text-xl'
                    >
                      {name}
                    </Typography>
                  </UnstyledLink>
                </li>
              ))}
              <li>
                <UnstyledLink href='#contact' className='flex p-2.5'>
                  <Typography
                    font='exo'
                    color='primary'
                    variant='h6'
                    weight='semibold'
                    className='hover:text-typo-secondary text-xl'
                  >
                    Learn More
                  </Typography>
                </UnstyledLink>
              </li>
            </div>
          </ul>
        </nav>

        <IconButton
          variant='label'
          icon={CgClose}
          size='lg'
          className='border-typo-primary bg-transparent rounded-full'
          iconClassName='text-typo-primary'
          onClick={toggleShowNav}
        />
      </div>
    </header>
  );
}
