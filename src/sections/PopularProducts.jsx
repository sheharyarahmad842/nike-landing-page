import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section className='max-container max-sm:mt-12'>
      <h2 className='font-montserrat text-4xl mb-4 font-bold'>
        Our <span className='text-coral-red'>Popular</span> Products
      </h2>
      <p className='leading-normal font-montserrat text-slate-gray lg:max-w-lg mb-12'>
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
