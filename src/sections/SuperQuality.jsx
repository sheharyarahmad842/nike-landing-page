import { shoe8 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
  return (
    <section className='max-container flex max-lg:flex-col justify-between items-center gap-10 w-full'>
      <div className='flex flex-col flex-1'>
        <h2 className='font-montserrat font-bold text-4xl capitalize lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>Super</span>
          <br />
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-10'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt='Super Shoe'
          className='w-[570px] h-[572px] object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
