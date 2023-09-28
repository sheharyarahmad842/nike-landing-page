import { star } from '../assets/icons';

const PopularProductCard = ({ product }) => {
  return (
    <div className='flex flex-col flex-1 max-sm:w-full'>
      <img
        src={product.imgURL}
        alt='Popular Product'
        className='w-[282px] h-[282px] object-contain'
      />

      <div className='flex items-center justify-start gap-2.5 mt-8'>
        <img src={star} alt='Star' className='w-4 h-4' />
        <span className='text-slate-gray text-xl font-palanquin'>(4.5)</span>
      </div>
      <h3 className='text-2xl font-semibold font-montserrat mt-2'>
        {product.name}
      </h3>
      <p className='text-coral-red text-2xl font-semibold font-montserrat leading-normal mt-2'>
        {product.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
