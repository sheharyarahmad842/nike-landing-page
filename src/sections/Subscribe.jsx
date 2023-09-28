import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center gap-4 max-lg:flex-col'>
      <h2 className='text-4xl xl:max-w-lg font-palanquin font-bold leading-[68px]'>
        Sign Up for <span className='text-coral-red'>Updates</span> & NewsLetter
      </h2>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray rounded-full p-2.5 gap-5'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end max-sm:w-full items-center'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
