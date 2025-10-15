import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';

const NewProject = ({ onCancel }) => {
  return (
    <div className='h-[95vh] mt-[5vh] mx-10 p-8 bg-stone-50 border rounded-t-xl border-stone-300  text-stone-700 shadow-2xl shadow-stone-300'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <Button title='Cancel' variant='cancel' onClick={onCancel} />
        </li>
        <li>
          <Button title='Save' />
        </li>
      </menu>
      <div className='w-lg flex flex-col justify-start gap-5 mt-8 font-Gontserrat font-medium'>
        <Input label={'Title'} name={'title'} />
        <Input label={'Description'} name={'description'} textarea />
        <Input label={'Due Date'} name={'date'} type={'date'} />
      </div>
    </div>
  );
};

export default NewProject;
