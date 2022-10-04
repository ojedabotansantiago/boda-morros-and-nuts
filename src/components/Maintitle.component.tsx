import Image from 'next/image';
import title from '../public/images/title.jpeg';
const MainTitle = () => {
  return (
    <>
      {/*
       <div className='flex justify-center mt-10 px-8 bg-pack-train'>
        <Image className=' items-center max-w-xl max-w-lg' src={title} alt='Picture of the author' priority />
      </div> 
      */}
      <div className='space-y-4 '>
        <h1 className=' text-center text-3xl pt-6 font-passion-conflict italic'>~ Irene & Guillermo ~</h1>
        <h1 className='text-center text-1xl Hunter mt-10'>10 de Dicembre del 2022</h1>
      </div>
    </>
  );
};

export default MainTitle;
