import React from 'react';

import Typography from '@/components/Typography';
import { ServiceType } from '@/contents/landing';

export default function ServicesCard({
  title,
  description,
  Icon,
}: ServiceType) {
  return (
    <div className='w-full bg-typo-white p-12 flex flex-col gap-3 rounded-2xl'>
      <Icon className='w-12 h-12 text-primary-500' />
      <Typography
        variant='h6'
        font='exo'
        weight='semibold'
        className='text-2xl'
      >
        {title}
      </Typography>
      <Typography
        variant='c1'
        font='montserrat'
        weight='regular'
        className='text-sm'
      >
        {description}
      </Typography>
    </div>
  );
}
