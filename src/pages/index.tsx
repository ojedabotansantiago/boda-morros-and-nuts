import type { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import MainEntryComponent from '../components/MainEntry.component';
import MainTitle from '../components/Maintitle.component';
import MainNuecesAndMorr from '../public/images/MainNuecesAndMorr.jpg';
type EntryProps = {
  image: StaticImageData;
  textMain: string;
  subtitle: string;
};
const Home: NextPage = () => {

  const entryPropsOne:EntryProps = {
    image: MainNuecesAndMorr,
    textMain: 'Irene & Guillermo',
    subtitle: 'Nuestra historia',
  };

  console.log(entryPropsOne);
  return (
    <div className='text-regal-blue'>
      <MainTitle></MainTitle>
      {entryPropsOne && <MainEntryComponent {...entryPropsOne}></MainEntryComponent>}
    </div>
  );
};

export default Home;
