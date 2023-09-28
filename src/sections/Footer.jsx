import { footerLogo } from '../assets/images';
import { socialMedia } from '../constants';
import { footerLinks } from '../constants';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start max-lg:flex-col gap-4'>
        <div className='flex flex-col items-start gap-4'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='Nike Logo'
              className='w-[150px] h-[40px]'
            />
          </a>
          <p className='max-w-sm text-slate-gray font-montserrat leading-7'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-4'>
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className='flex justify-center items-center rounded-full bg-white p-2 cursor-pointer hover:bg-white-400'
              >
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-8'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white text-lg font-semibold font-palanquin mb-4'>
                {section.title}
              </h4>
              <ul className='flex flex-col gap-3'>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className='text-slate-gray hover:text-white-400'
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-24 flex justify-between max-sm:flex-col max-sm:items-center '>
        <div className='flex gap-2 items-center text-white-400 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='Copyright Icons'
            className='w-5 h-5 rounded-full'
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className='font-montserrat text-white-400 cursor-pointer'>
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
