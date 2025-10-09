const Button = ({ title, symbole }) => {
  return (
    <button className=' flex items-center gap-3 bg-stone-800 text-stone-400 font-Gontserrat my-5 px-6 hover:bg-stone-700 transition py-3 cursor-pointer rounded-md text-xl font-semibold'>
      {symbole}
      <span>{title}</span>
    </button>
  );
};

export default Button;
