import { useState, useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/Yoable.svg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [switchnav, setswitchnav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const switchNav = () => {
  //   if (window.scrollY >= 250) {
  //     setswitchnav(true);
  //   } else {
  //     setswitchnav(false);
  //   }
  // };
  // useEffect(() => {
  //   switchNav();
  //   window.addEventListener('scroll', switchNav);
  // }, []);

  return (
    <div id='Nav'>
      <nav className={switchnav ? 'navbarT active' : 'navbarT'}>
        <div className='container navbar-container'>
          <span className=' navbar-logo'>
            <Link href='/'>
              <Image src={logo} alt='logo.png' />
            </Link>
          </span>
          <div className='menu-icon' onClick={handleClick}>
            <FA icon={click ? faTimes : faBars} />
          </div>
          <ul
            id='ul'
            className={click ? 'nav-menu active' : 'nav-menu ms--md-auto'}>
            <li className='nav-item'>
              <Link href='#about'>
                <span className='nav-links' onClick={closeMobileMenu}>
                  About Us
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#partners' className='nav-links'>
                <span className='nav-links' onClick={closeMobileMenu}>
                  Partnership
                </span>
              </Link>
            </li>
          </ul>
          <a href="https://forms.gle/wJRCneM9mT8K3BJS9">            
          <button>Join Our Community</button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
