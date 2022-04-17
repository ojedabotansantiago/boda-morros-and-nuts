import Image from 'next/image';
import MainNuecesAndMorr from '../public/images/MainNuecesAndMorr.jpg';
import { StaticImageData } from 'next/image';

type EntryProps = {
  image: StaticImageData;
  textMain: string;
  subtitle?: string;
};
const MainEntryComponent = (entryProps: EntryProps | any) => {
  console.log('entryProps', entryProps);

  return (
    <>
      <div className='columns-1 mt-10'>

        {entryProps?.textMain && <h1 className='text-center'>{entryProps?.textMain}</h1>}

        <div className='object-center px-10 mt-10'>
          <Image src={entryProps?.image} alt='Picture of the author' />
        </div>
        
        {entryProps?.subtitle && <p className='text-center mt-10'>{entryProps?.subtitle}</p>}
      </div>
    </>
  );
};

export default MainEntryComponent;
