import * as React from 'react';

import Logo from '@/components/Logo';
import Typography from '@/components/Typography';

export default function Forbidden() {
  return (
    <>
      <main>
        <section className='bg-typo-outline'>
          <div className='layout text-yellow-500 flex min-h-screen flex-col items-center justify-center text-center'>
            <Logo />
            <Typography
              variant='h4'
              className='mt-4 text-4xl font-bold text-red-500 md:text-6xl'
            >
              Forbidden 403 <br />
              You are not allowed on this page
            </Typography>
          </div>
        </section>
      </main>
    </>
  );
}
