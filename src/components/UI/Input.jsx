const Input = ({ label, name, type = 'text', textarea }) => {
  const classes =
    'w-full p-1 pl-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-md font-normal text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea id={name} className={classes} />
      ) : (
        <input id={name} type={type} className={classes} />
      )}
    </div>
  );
};

export default Input;
