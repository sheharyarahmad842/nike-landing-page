const Button = ({
  label,
  icon,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 font-montserrat leading-none ${
        fullWidth && 'w-full'
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      }  px-6 py-3 rounded-full border-2 hover:opacity-95`}
    >
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
