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
        {entryProps?.textMain && <h2 className='text-center text-2xl'>{entryProps?.textMain}</h2>}

        {entryProps?.image && (
          <span className='flex items-center  mt-10 px-8'>
            <Image src={entryProps.image} alt='Picture of the author' priority />
          </span>
        )}

        {entryProps?.subtitle && entryProps?.image && <p className='text-center mt-10 px-8'>{entryProps?.subtitle}</p>}
        {entryProps?.subtitle && !entryProps?.image && <p className='text-center px-8'>{entryProps?.subtitle}</p>}

        {entryProps?.link && (
          <a className='text-center mt-10 underline' href={entryProps?.link}>
            {entryProps?.linkText}
          </a>
        )}
      </div>
    </>
  );
};

export default MainEntryComponent;
