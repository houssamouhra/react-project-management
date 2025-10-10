import Button from '@/components/UI/Button';

const NewProject = ({ onCancel }) => {
  return (
    <div className='h-[95vh] mt-[5vh] min-w-[80%] mx-10 p-6 bg-stone-200 border rounded-t-2xl border-stone-300  text-stone-700 shadow-2xl shadow-stone-200 '>
      <menu className='flex gap-4 justify-end'>
        <li>
          <Button title='Cancel' variant='cancel' onClick={onCancel} />
        </li>
        <li>
          <Button title='Save' />
        </li>
      </menu>
    </div>
  );
};

export default NewProject;
