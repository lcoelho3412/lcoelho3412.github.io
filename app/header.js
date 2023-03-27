import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/icons8-futurama-bender-50.png'
import About from './about';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="picture of generic guy holding laptop"/>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/About">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
