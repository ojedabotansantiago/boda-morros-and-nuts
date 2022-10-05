import Image from 'next/image';
import { StaticImageData } from 'next/image';

type EntryProps = {
  image?: StaticImageData;
  titleImage?: StaticImageData;
  textMain?: string;
  subtitle: string;
  secondaryText?: string;
  tertiaryText?: string;
  frothyText?: string;
  link?: string;
  linkText?: string;
  firstStep?: boolean;
};
const MainEntryComponent = (entryProps: EntryProps | any) => {
  return (
    <>
      <div className='flex flex-col items-center  mt-10'>
        {/*  
        { entryProps?.textMain && <h2 className='text-center font-passion-conflict italic text-2xl'>~ {entryProps?.textMain} ~</h2>}
      */}
        {entryProps?.titleImage && (
          <div className='flex items-center px-8 max-w-xl max-w-lg'>
            <Image className='items-center max-w-lg' src={entryProps?.titleImage} alt='Picture of the author' priority />
          </div>
        )}
        {entryProps?.image && (
          <span className={`flex items-center px-8 max-w-xl max-w-lg ${!entryProps.firstStep ? 'mt-10 ' : ''}`}>
            <Image src={entryProps.image} alt='Picture of the author' priority />
          </span>
        )}

        {entryProps?.subtitle && <p className='text-center mt-10 px-8'>{entryProps?.subtitle}</p>}

        {entryProps?.secondaryText && <p className='text-center mt-6 px-8'>{entryProps?.secondaryText}</p>}

        {entryProps?.tertiaryText && <p className='text-center mt-6 px-8'>{entryProps?.tertiaryText}</p>}
        {entryProps?.frothyText && <p className='text-center mt-6 px-8'>{entryProps?.frothyText}</p>}

        {entryProps?.link && (
          <a className='text-center mt-6 underline hover:underline' href={entryProps?.link}>
            {entryProps?.linkText}
          </a>
        )}
      </div>
    </>
  );
};

export default MainEntryComponent;
