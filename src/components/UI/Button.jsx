const Button = ({ title, symbole, variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'font-Gontserrat font-semibold text-md px-4 py-2 cursor-pointer rounded-md';

  const variants = {
    primary: 'bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition',
    cancel: 'bg-stone-400 text-stone-700 hover:bg-stone-300 hover:text-stone-400 transition',
  };

  return (
    <button {...props} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {symbole}
      <span>{title}</span>
    </button>
  );
};

export default Button;
