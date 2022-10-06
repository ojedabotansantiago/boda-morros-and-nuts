import Image from 'next/image';
import title from '../public/images/title.jpg';
const MainTitle = () => {
  return (
    <>
      <div className='space-y-4 '>
        <div className='flex justify-center mt-10 px-8 bg-pack-train'>
          <Image className='items-center max-w-xl max-w-lg' src={title} alt='Picture of the author' priority />
        </div>
        <h1 className='text-center font-Monserrat text-1xl pt-6  mt-10'>10 de Diciembre del 2022</h1>
      </div>
    </>
  );
};

export default MainTitle;
