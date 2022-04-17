import type { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import MainEntryComponent from '../components/MainEntry.component';
import MainTitle from '../components/Maintitle.component';
import SeparatorComponent from '../components/separator.component';
import MainNuecesAndMorr from '../public/images/MainNuecesAndMorr.jpg';
;

type EntryProps = {
  image: StaticImageData;
  textMain: string;
  subtitle: string;
};
const Home: NextPage = () => {
  // Initialize Firebase


  const entryPropsOne: EntryProps = {
    image: MainNuecesAndMorr,
    textMain: '10 de Dicembre del 2022 ',
    subtitle: 'Nuestra historia',
  };

  console.log(entryPropsOne);
  return (
    <div className='text-regal-blue'>
      <MainTitle></MainTitle>
      {entryPropsOne && <MainEntryComponent {...entryPropsOne}></MainEntryComponent>}
      <SeparatorComponent></SeparatorComponent>
    </div>
  );
};

export default Home;
