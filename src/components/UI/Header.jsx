import ClipboardImg from '@/assets/imgs/no-projects.png';
import Button from '@/components/UI/Button';

const Header = ({ onOpen }) => {
  return (
    <header className='flex-1 flex justify-center items-center'>
      <div className='flex flex-col font-Gontserrat justify-center items-center gap-3'>
        <img
          className='w-16 h-16 object-contain mx-auto'
          src={ClipboardImg}
          alt='empty-clipboard'
        />
        <h2 className='text-xl font-semibold text-stone-600'>No Project Selected</h2>
        <p className='text-lg font-normal text-stone-400 mb-4'>
          Select a project or get started with a new one
        </p>
        <div className='mt-2'>
          <Button onClick={onOpen}>Create new project</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
