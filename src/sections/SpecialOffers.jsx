import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';

const SpecialOffers = () => {
  return (
    <section className='max-container'>
      <h2 className='font-palanquin text-4xl leading-normal'>
        Special <span className='text-coral-red'>Offers</span>
      </h2>
      <p className='mt-4 info-text'>
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart.
      </p>
      <p className='mt-6 info-text'>
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div className='flex gap-4 mt-6'>
        <Button icon={arrowRight} label='Shop Now' />
        <Button
          label='Learn More'
          backgroundColor='bg-white'
          textColor='text-slate-gray'
          borderColor='text-slate-gray'
        />
      </div>
      <div className='flex justify-center items-center mt-8'>
        <img src={offer} alt='' className='w-773 h-687 object-contain' />
      </div>
    </section>
  );
};

export default SpecialOffers;
