import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import { shoes } from '../constants';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [currentBigShoe, setCurrentBigShoe] = useState(bigShoe1);
  return (
    <section className='w-full flex xl:flex-row flex-col justify-center gap-10 min-h-full max-container'>
      <div className='relative flex xl:w-2/5 flex-col justify-center items-start gap-8 w-full pt-28 max-xl:padding-x'>
        <p className='text-lg text-coral-red font-montserrat'>
          Our Summer Collections
        </p>
        <h1 className='text-8xl max-sm:text-[72px] max-sm:leading-[72px] font-bold font-palanquin'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-4 py-4'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-lg text-slate-gray leading-6'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop Now' icon={arrowRight} />
        <div className='flex flex-wrap justify-start items-start gap-16 w-full'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
              <p className='font-montserrat text-slate-gray leading-7'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex flex-1 justify-center items-center bg-primary bg-hero bg-center bg-cover xl:min-h-screen max-xl:py-40 px-2'>
        <img
          src={currentBigShoe}
          alt='Big Shoe'
          className='w-[550px] h-[400px] object-contain relative z-10'
        />
        <div className='flex xl:gap-6 gap-4 absolute -bottom-[5%] sm:left-[6%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              currentBigShoe={currentBigShoe}
              shoe={shoe}
              changeCurrentBigShoe={(shoeImg) => setCurrentBigShoe(shoeImg)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
