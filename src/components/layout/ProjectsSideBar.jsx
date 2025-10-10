import { useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/UI/Button';
import Header from '@/components/UI/Header';
import NewProject from '@/components/features/NewProject';

const ProjectsSidebar = () => {
  const [showProject, setShowProject] = useState(false);

  const handleOpenProject = () => {
    setShowProject(true);
  };
  const handleCloseProject = () => {
    setShowProject(false);
  };

  return (
    <>
      <aside className='h-[95vh] mt-[5vh] shadow-stone-600 shadow-xl rounded-tr-xl w-1/3 md:w-72 bg-stone-900 text-stone-50'>
        <h2 className='text-2xl md:text-xl mb-8 pl-10 mt-15 uppercase font-bold font-Gontserrat text-stone-200'>
          Your Projects
        </h2>
        <div className='px-10'>
          <Button
            symbole={<Icon icon='pixel:plus-solid' width='1em' height='1em' />}
            title={'Add Projects'}
            className='flex items-center gap-3'
            onClick={handleOpenProject}
          />
        </div>
        <ul></ul>
        <ul></ul>
      </aside>
      {showProject ? (
        <NewProject onCancel={handleCloseProject} />
      ) : (
        <Header onOpen={handleOpenProject} />
      )}
    </>
  );
};

export default ProjectsSidebar;
