import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h2 className='text-center font-palanquin text-4xl font-bold mb-4'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h2>
      <p className='m-auto max-w-lg info-text text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='flex justify-evenly items-center max-lg:flex-col mt-24 gap-8'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
