import ClipboardImg from '@/assets/imgs/no-projects.png';
import Button from '@/components/UI/Button';
import ProjectsSidebar from '@/components/layout/ProjectsSidebar';

const Header = () => {
  return (
    <section className='flex h-screen '>
      <ProjectsSidebar />
      <div className='flex-1 flex justify-center items-center'>
        <header className='flex-1 flex flex-col justify-center items-center gap-4'>
          <img className='w-22 h-22' src={ClipboardImg} alt='empty-clipboard' />
          <h2 className='text-2xl font-semibold font-Gontserrat text-stone-600'>
            No Project Selected
          </h2>
          <p className='text-lg font-normal font-Gontserrat text-stone-400'>
            Select a project or get started with a new one
          </p>
          <Button title={'Create new project'} />
        </header>
      </div>
    </section>
  );
};

export default Header;
