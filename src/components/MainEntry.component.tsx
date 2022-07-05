import Image from 'next/image';
import { StaticImageData } from 'next/image';

type EntryProps = {
  image: StaticImageData;
  textMain: string;
  subtitle?: string;
};
const MainEntryComponent = (entryProps: EntryProps | any) => {
  //console.log('entryProps', entryProps);

  return (
    <>
      <div className='flex flex-col items-center  mt-10'>
        {entryProps?.textMain && <h1 className='text-center'>{entryProps?.textMain}</h1>}

        <span className='flex items-center  mt-10'>
          <Image src={entryProps.image} alt='Picture of the author' priority />
        </span>

        {entryProps?.subtitle && <p className='text-center mt-10'>{entryProps?.subtitle}</p>}
      </div>
    </>
  );
};

export default MainEntryComponent;
