const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] items-start gap-3 px-10 py-16 w-full shadow-3xl rounded-lg'>
      <div className='bg-coral-red w-11 h-11 flex justify-center items-center rounded-full p-2'>
        <img src={imgURL} alt='' className='w-24 h-24 object-contain' />
      </div>
      <h4 className='font-palanquin text-2xl font-bold mt-5'>{label}</h4>
      <p className='text-slate-gray leading-normal mt-3 break-words'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
