const Input = ({ inputName, name, type = 'text' }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{inputName}</label>
      <input
        id={name}
        type={type}
        className='px-2 outline-none bg-stone-50 border rounded-md font-thin w-md'
      />
    </div>
  );
};

export default Input;
