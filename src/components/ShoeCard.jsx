const ShoeCard = ({ currentBigShoe, shoe, changeCurrentBigShoe }) => {
  const handleClick = () => {
    if (currentBigShoe !== shoe.bigShoe) {
      changeCurrentBigShoe(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        shoe.bigShoe === currentBigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4'>
        <img
          src={shoe.thumbnail}
          alt='Shoe Img'
          className='w-[127px] h-[103.34px] object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
