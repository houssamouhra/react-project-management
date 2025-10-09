import { Icon } from '@iconify/react';
import Button from '@/components/UI/Button';

const SideBar = () => {
  return (
    <section className='h-[92vh] mt-[8vh] rounded-tr-2xl w-[350px] bg-stone-950'>
      <h1 className='text-2xl text-stone-200 px-10 pt-20 pb-10 font-Gontserrat uppercase'>
        your projects
      </h1>
      <div className='px-10'>
        <Button
          symbole={<Icon icon='pixel:plus-solid' width='1em' height='1em' />}
          title={'Add Projects'}
        />
      </div>
    </section>
  );
};

export default SideBar;
