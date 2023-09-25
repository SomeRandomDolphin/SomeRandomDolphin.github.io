import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import clsxm from '@/lib/clsxm';
import SEO from '@/seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className={clsxm('bg-[#FAFAF9]')}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
