const Button = ({ label, icon }) => {
  return (
    <button className='flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red text-white px-5 py-2 rounded-full border border-coral-red hover:opacity-95'>
      {label}
      {icon && (
        <img
          src={icon}
          alt='Arrow Right Icon'
          className='w-6 h-6 rounded-full bg-white'
        />
      )}
    </button>
  );
};

export default Button;
