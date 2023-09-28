import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className='padding-x py-6 w-full absolute z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' className='w-[129px]' />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-montserrat leading-normal text-slate-gray text-lg hover:opacity-70'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 font-montserrat font-medium text-lg leading-normal text-md text-slate-gray max-lg:hidden'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block w-6 h-6 object-contain cursor-pointer'>
          <img src={hamburger} alt='Hamburger Icon' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
