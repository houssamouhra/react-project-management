import { Icon } from '@iconify/react';
import Button from '@/components/UI/Button';

const ProjectsSidebar = () => {
  return (
    <aside className='h-[95vh] mt-[5vh] rounded-tr-xl w-1/3 md:w-72 bg-stone-900 text-stone-50'>
      <h2 className='text-2xl md:text-xl mb-8 pl-10 mt-15 uppercase font-bold font-Gontserrat text-stone-200'>
        Your Projects
      </h2>
      <div className='px-10'>
        <Button
          symbole={<Icon icon='pixel:plus-solid' width='1em' height='1em' />}
          title={'Add Projects'}
        />
      </div>
      <ul></ul>
      <ul></ul>
    </aside>
  );
};

export default ProjectsSidebar;
