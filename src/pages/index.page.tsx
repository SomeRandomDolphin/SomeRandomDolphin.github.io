import 'swiper/css';
import 'swiper/css/navigation';

import NextImage from 'next/image';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/buttons/Button';
import ServicesCard from '@/components/cards/ServicesCard';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { socials } from '@/contents/footer';
import { experiences, skills } from '@/contents/landing';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Home' />
      <main className='w-screen relative overflow-hidden'>
        <section
          id='about'
          className='w-full min-h-screen py-32 flex flex-col justify-center items-center'
        >
          <div className='w-3/4 flex flex-col gap-8'>
            <NextImage
              src='/images/profile-picture.png'
              alt='logo'
              width='251'
              height='241'
              className='w-48 md:w-60 lg:w-72'
              style={{ alignSelf: 'center' }}
            />
            <Typography
              variant='h1'
              font='exo'
              weight='semibold'
              className='text-center text-5xl'
            >
              {'Hi my name is '}
              <span className='text-primary-500'>Pradipta Arya Daniswara</span>
            </Typography>
            <Typography
              variant='h6'
              font='montserrat'
              weight='medium'
              className='text-center w-full md:w-3/4 mx-auto text-lg'
            >
              I am a passionate student with a strong interest in web
              programming and computer science. I have four years of experience
              in web programming and design from maintaining various open-source
              projects, and now I am currently learning to be a data scientist.
            </Typography>
            <ButtonLink
              href='#contact'
              variant='primary'
              size='lg'
              className='w-fit mx-auto'
            >
              Get Started
            </ButtonLink>
          </div>
        </section>
        <section
          id='skill'
          className='mx-auto w-3/4 py-32 flex flex-col gap-12'
        >
          <div className='flex flex-col gap-6 text-center'>
            <Typography
              variant='h3'
              font='exo'
              weight='semibold'
              className='text-3xl'
            >
              My <span className='text-primary-500'>Skills</span>
            </Typography>
            <Typography
              variant='h6'
              font='montserrat'
              weight='medium'
              className='mx-auto w-full md:w-3/5 text-base'
            >
              Elevating success through specialized knowledge and proven
              professional mastery.
            </Typography>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((services, index) => (
              <ServicesCard key={index} {...services} />
            ))}
          </div>
        </section>
        <section
          id='experience'
          className='mx-auto w-3/4 py-32 flex flex-col gap-12'
        >
          <div className='flex flex-col gap-6 text-center'>
            <Typography
              variant='h3'
              font='exo'
              weight='semibold'
              className='text-3xl'
            >
              My <span className='text-primary-500'>Experiences </span>
            </Typography>
            <Typography
              variant='h6'
              font='montserrat'
              weight='medium'
              className='mx-auto w-full md:w-3/5 text-base'
            >
              Crafting success through years of dedication, skill, and proven
              expertise.
            </Typography>
          </div>
          <div className='relative home w-full flex flex-row'>
            <Swiper
              spaceBetween={20}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={true}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay, Navigation]}
              className='mySwiper w-full projects'
            >
              {experiences.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='flex flex-col-reverse lg:flex-row justify-between rounded-2xl bg-typo-white items-center'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-9 p-9'>
                      <div className='flex flex-col gap-2.5'>
                        <Typography variant='h5' font='exo' weight='semibold'>
                          {project.title}
                        </Typography>
                        <div className='flex flex-row gap-3 items-center'>
                          {project.tags.map((tag, index) => (
                            <Button key={index} variant='secondary' size='sm'>
                              {tag}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Typography variant='p' font='montserrat' weight='medium'>
                        {project.description}
                      </Typography>
                      <ButtonLink
                        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        variant='primary'
                        size='lg'
                        className='w-fit mb-12 lg:mb-0'
                      >
                        Learn More
                      </ButtonLink>
                    </div>
                    <div className='w-full lg:w-1/2'>
                      <NextImage
                        src={project.img.src as string}
                        alt={project.img.alt}
                        width='500'
                        height='500'
                        className='w-full rounded-t-2xl lg:rounded-r-2xl'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section
          id='contact'
          className='mx-auto w-3/4 py-32 flex flex-col gap-12'
        >
          <div className='flex flex-col gap-6 text-center'>
            <Typography
              variant='h3'
              font='exo'
              weight='semibold'
              className='text-3xl'
            >
              Let&apos;s <span className='text-primary-500'>Connect</span>
            </Typography>
            <Typography
              variant='h6'
              font='montserrat'
              weight='medium'
              className='mx-auto w-full md:w-3/5 text-base'
            >
              We&apos;d love to hear from you. Reach out to us for inquiries,
              collaborations, or just to say hello!
            </Typography>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-3/5 mx-auto'>
            {socials.map((social, index) => (
              <div
                key={index}
                className='flex flex-row gap-4 items-center w-fit mx-auto md:mx-0'
              >
                <NextImage
                  src={social.img.src}
                  alt={social.img.alt}
                  width='48'
                  height='48'
                />
                <UnstyledLink href={social.href} className='flex'>
                  <Typography
                    variant='h6'
                    font='montserrat'
                    weight='medium'
                    className='text-center'
                  >
                    {social.name}
                  </Typography>
                </UnstyledLink>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
