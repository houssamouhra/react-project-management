import { useState } from 'react';
import Header from './components/UI/Header';
import ProjectsSidebar from '@/components/layout/ProjectsSideBar';
import NewProject from './components/features/NewProject';

function App() {
  const [isCreatingProject, setisCreatingProject] = useState(false);

  const handleOpenProject = () => setisCreatingProject(true);
  const handleCloseProject = () => setisCreatingProject(false);

  return (
    <div className='flex h-screen '>
      <ProjectsSidebar openProject={handleOpenProject} />
      {isCreatingProject ? (
        <NewProject onCancel={handleCloseProject} />
      ) : (
        <Header onOpen={handleOpenProject} />
      )}
    </div>
  );
}

export default App;
