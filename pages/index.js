import Image from 'next/image';
import Meta from '../components/Meta';
import card1 from '../public/images/Frame1.png';
import card2 from '../public/images/Frame2.png';
import card3 from '../public/images/Frame3.png';
import values from '../data/values.json';
import bluearrow from '../public/images/arrow_blue.svg';
import yelarrow from '../public/images/arrow_yel.svg';
import partnerscard from '../public/backgrounds/partners_cheese.svg';
import partnerscardmobile from '../public/backgrounds/partners_cheese_mobile.svg';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import team from '../data/team.json';
import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

export default function Home() {
  const skills = [
    'Entrepreneurial Skills',
    'Programming',
    'Web Design',
    'Business',
    'Creativity in Business',
    'Critical Thinking & Analysis',
    'System Analysis',
  ];
  
  const [swiperRef, setSwiperRef] = useState(null);
  const cards = Array(18).fill();
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser')
    } else {
      console.log('You are on the server')
    }

  }, [])
  

  return (
    <>
      <Meta title='YOABLE' keywords='' description='' />
      <div id='home'>
        <section id='hero'>
          <div className='container-md'>
            <h2>
              Acquire <span className='in_demand'>in-demand</span> skills <br />{' '}
              for the future
            </h2>
            <p className='d-none d-md-block colblue fw-bolder my-4 fs-3'>
              Digital Skills
            </p>
            <a href='https://forms.gle/wJRCneM9mT8K3BJS9'>
              <button>Join Our Community</button>
            </a>
            <div id='hero_cards' className=''>
              <span>
                <Image
                  src={card1}
                  height='400'
                  width='310'
                  layout='fixed'
                  alt='person1.png'
                />
              </span>
              <span className='mx-4'>
                <Image
                  src={card2}
                  height='450'
                  width='280'
                  layout='fixed'
                  alt='person2.png'
                />
              </span>
              <span>
                <Image
                  src={card3}
                  height='400'
                  width='310'
                  layout='fixed'
                  alt='person3.png'
                />
              </span>
            </div>
            <div className='white_container container'>
              <div className='box' />
              <div className='box' />
              <div className='box' />
              <div className='box' />
            </div>
          </div>
        </section>
        <section id='about'>
          <div className='container'>
            <header>ABOUT US</header>
            <p>
              Yoable is a non-profit organization set on empowering, inspiring
              and connecting ambitious youths with the help of skills which will
              be needed inevitably at every pointof their lives.
            </p>
            <p>
              A platform for youths to inquire and acquire the necessary skills
              for future and present purposes.{' '}
            </p>
            <p>
              We provide an exciting adventure into the world of technology and
              other various segments of learning.
            </p>
            <div className='skills'>
              <h5>SKILLS WE INTEND TO TUTOR YOU ON...</h5>
              <div className='case'>
                {skills.map((skills) => {
                  return (
                    <p key={skills} className='skill'>
                      {skills}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id='mission_vision'>
          <div className='container-sm'>
            <h5>VISION - MISSION STATEMENT</h5>
            <div className='d-flex flex-column flex-md-row mt-5'>
              <div className=' col-12 col-md-6 justify-content-center mb-4 mb-md-0'>
                <div className='vision px-4 col-md-11'>
                  <h2>
                    Our
                    <br />
                    Vision
                  </h2>
                  <p>
                    Reducing Poverty in Nigeria through inculcating skills
                    necessary for <br /> individual growth
                  </p>
                </div>
              </div>
              <div className=' col-12 col-md-6 justify-content-center'>
                <div className='mission px-4 col-md-11'>
                  <h2>
                    Our
                    <br />
                    Mission
                  </h2>
                  <p>
                    Yoable is a non-profit organization set on empowering,
                    inspiring and connecting ambitious youths with the help{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='core_values' className='container'>
          <h5>CORE VALUES</h5>
          <h2>
            Values that bind us all
            <br /> as an organization.
          </h2>
          <div className='d-flex flex-column flex-md-row flex-wrap px-3 px-md-0'>
            {values.map((values, index) => {
              return (
                <div
                  key={index}
                  className='value d-flex flex-column col-12 col-md-6 col-lg-3 px-md-3'>
                  <div className='blue'>
                    <div className='blue_bg' />
                  </div>
                  <h3>{values.value}</h3>
                  <p>{values.info}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section id='the_team'>
          <div className='container'>
            <div className='col-12'>
              <div className='d-flex flex-column flex-md-row position-relative'>
                <div className='col-12 col-md-5 '>
                  <h5>THE TEAM</h5>
                  <h2>The brains behind the idea changing the youths</h2>
                </div>
                <div className='col-12 col-md-7 d-flex teamates swiper'>
                  <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={(typeof window !== 'undefined') && window.innerWidth >= 768 ? 2 : 1}
                    centeredSlides={false}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className='mySwiper'>
                      {team.map((team) => {
                        return (
                            <SwiperSlide key={team.id}>
                            <div className='position-relative'>
                              <Image
                                src={team.img}
                                layout='fixed'
                                height='480'
                                width={'350'}
                                style={{ borderRadius: 16 }}
                                alt={team.name + '.png'}
                              />
                              <div
                                className='position-absolute ms-4'
                                style={{ bottom: '0' }}>
                                <p
                                  style={{ fontWeight: 600 }}
                                  className='firsttext fs-3 text-light mb-1'>
                                  {team.name}
                                </p>
                                <p
                                  style={{
                                    fontWeight: 600,
                                    color: 'rgba(255, 255, 255, 0.45)',
                                  }}
                                  className='secondtext mb-5 fs-5'>
                                  {team.title}
                                </p>
                              </div>
                            </div>
                            </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
              <div className='d-flex mt-md-5 flex-column flex-md-row justify-content-md-between splines'>
                <div>
                  <div className='d-flex'>
                    <h3>Interested in Joining</h3>
                    <span className='mt-3 ms-5 splin1'>
                      <Image src={bluearrow} alt='blue-line.png' />
                    </span>
                  </div>
                  <div className='d-flex'>
                    <h3>the Team?</h3>
                    <span className=' ms-5 spline2'>
                      <Image src={yelarrow} alt='blue-line.png' />
                    </span>
                  </div>
                </div>
                <Link href='/contact'>
                  <button className='get_touch my-auto'>Get in Touch</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id='partners_sponsors' className='container'>
          <h5>PARTNERS & SPONSORS</h5>
          <h2>
            Awesome partners that believe <br />
            in the dream with us.
          </h2>
          <div id='partners' />
          <div className='cards'>
            {/* {cards.map((card) => {
              return (
                <div className='cards_card' key={card}>
                  {card}
                </div>
              );
            })} */}
          </div>
          <div className='box'>
            <div className='d-flex flex-column flex-md-row justify-content-md-between'>
              <div className='py-5 px-2 ps-md-5 col-lg-7'>
                <h4>
                  Would you love to{' '}
                  <span className='blueColor'>partner or sponsor</span> the
                  community?
                </h4>
                <p className='d-none fs-5 d-md-block my-3'>
                  Yoable is a non-profit organization set on empowering,
                  inspiring and connecting ambitious youths with the help{' '}
                </p>
                <div className='button'>
                  <Link href={'/contact'}>
                    <button>Partner with Us</button>
                  </Link>
                </div>
              </div>
              <div className='d-none d-lg-block'>
                <Image src={partnerscard} alt='partners-card.png' />
              </div>
              <div className='d-md-none'>
                <Image
                  src={partnerscardmobile}
                  layout='responsive'
                  alt='partners-card.png'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
