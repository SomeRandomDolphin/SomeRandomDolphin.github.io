import * as React from 'react';

import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';

type LayoutOpt = {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function Layout({
  children,
  withNavbar = false,
  withFooter = false,
}: LayoutOpt) {
  return (
    <div className='overflow-hidden'>
      {withNavbar && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </div>
  );
}
