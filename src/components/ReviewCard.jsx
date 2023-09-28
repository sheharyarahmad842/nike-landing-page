import { star } from '../assets/icons';

const ReviewCard = ({ rating, customerName, feedback, imgURL }) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <img
        src={imgURL}
        alt=''
        className='w-[100px] h-[100px] object-contain rounded-full'
      />
      <p className='info-text text-center max-w-sm'>{feedback}</p>
      <div className='flex justify-center items-center gap-2'>
        <img src={star} alt='Star' className='w-6 h-6 object-contain' />
        <span className='text-slate-gray text-lg font-montserrat'>
          ({rating})
        </span>
      </div>
      <h3 className='text-xl font-bold font-palanquin'>{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
