const Button = ({ title, symbole }) => {
  return (
    <button className=' flex items-center gap-3 bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 my-5 px-4 py-2 transition  cursor-pointer rounded-md  font-Gontserrat font-semibold text-md md:text-base '>
      {symbole}
      <span>{title}</span>
    </button>
  );
};

export default Button;
