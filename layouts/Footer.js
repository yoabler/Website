import Image from 'next/image';
import logo from '../public/images/Yoable.svg';
import linkedin from '../public/footer/linkedin.svg';
import instagram from '../public/footer/instagram.svg';
import twitter from '../public/footer/twitter.svg';
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer
      className='container pb-4 pt-5'
      style={{ backgroundColor: '#ffffff' }}>
      <div>
        <Image src={logo} layout='fixed' alt='logo.png' />
      </div>
      <p className='mt-3 col-md-5'>
        A platform for youths to inquire and acquire the necessary skills for
        future and present purposes.{' '}
      </p>
      <h6 style={{ color: '#011F3D' }} className='mt-3 fw-bold'>
        We are on social media too!
      </h6>
      <div className='d-flex flex-column flex-md-row justify-content-md-between'>
        <div className='d-flex mt-2'>
          <a
            href='https://www.linkedin.com/company/yoable/'
            style={{ width: '45px', height: '45px' }}
            className='me-3 text-decoration-none d-flex justify-content-center align-items-center rounded-pill'>
            <Image src={linkedin} width='25' height='25' alt='social.png' />
          </a>
          <a
            href='https://instagram.com/yoabler'
            style={{ width: '45px', height: '45px' }}
            className='me-3 text-decoration-none d-flex justify-content-center align-items-center rounded-pill'>
            <Image src={instagram} width='25' height='25' alt='social.png' />
          </a>
          <a
            href='https://twitter.com/yoabler'
            style={{ width: '45px', height: '45px' }}
            className='me-3 text-decoration-none d-flex justify-content-center align-items-center rounded-pill'>
            <Image src={twitter} width='25' height='25' alt='social.png' />
          </a>
        </div>
        <div className='mt-4 mt-md-0'>
          <a href="https://forms.gle/wJRCneM9mT8K3BJS9">
          <button>Join the Community</button>
          </a>
          <Link href="#partners">
          <button>Partner with Us</button>
          </Link>
        </div>
      </div>
      <hr />
      <p className='fw-bold mt-4'>
        Copyright — &copy;2022 — All Right Reserved
      </p>
    </footer>
  );
};
