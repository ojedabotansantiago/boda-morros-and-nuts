import type { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import GuestForm from '../components/GuestForm.component';
import MainEntryComponent from '../components/MainEntry.component';
import MainTitle from '../components/Maintitle.component';
import SeparatorComponent from '../components/separator.component';

import p1 from '../public/images/p1.jpg';
import p2 from '../public/images/p2.jpg';
import p3 from '../public/images/snow.jpg';
import p4 from '../public/images/Baiona.jpg';

type EntryProps = {
  image?: StaticImageData;
  textMain?: string;
  subtitle: string;
  link?: string;
  linkText?: string;
};
const Home: NextPage = () => {
  // Initialize Firebase

  const entryPropsOne: EntryProps = {
    image: p1,
    textMain: '10 de Dicembre del 2022 ',
    subtitle: 'Nuestra historia: nos conocimos en hufelpuff',
  };
  const entryPropsTwo: EntryProps = {
    image: p2,
    textMain: 'La ceremonia',
    subtitle:
      '"Nope," said Harry. He was looking around the graveyard. It was completely silent and slightly eerie. "Is this supposed to be part of the task?"',
    link: 'https://goo.gl/maps/ZPFJVJTrCFxX5kbT8',
    linkText: 'Parroquia Beato Manuel Domingo y Sol',
  };
  const entryPropsThree: EntryProps = {
    image: p3,
    textMain: 'La celebración.',
    subtitle:
      'Ill leave Fang with yeh. Headmaster," Hagrid said, staring menacingly at Karkaroff, who was still sprawled at the foot of the tree, tangled in furs and tree roots. "Stay, Fang. Cmon, Harry.',
    link: 'https://goo.gl/maps/sfcuob9YQ8ztmMUH8',
    linkText: 'La Cañada de Mónico',
  };
  const entryPropsFour: EntryProps = {
    image: p4,
    textMain: 'Autobuses',
    subtitle: 'Por la lejania del emplazamiento vamos a poner atubosuses a vuestra disposicion en caso de que os haga falta ',
  };
  const entryPropsFive: EntryProps = {
    subtitle: 'Por si quereis tener un detalle con nostros en nuestra aventura 000000000000000000',
  };

  //console.log(entryPropsOne);
  return (
    <div className='text-regal-blue'>
      <MainTitle></MainTitle>
      {entryPropsOne && <MainEntryComponent {...entryPropsOne}></MainEntryComponent>}
      <SeparatorComponent></SeparatorComponent>
      {entryPropsTwo && <MainEntryComponent {...entryPropsTwo}></MainEntryComponent>}
      <SeparatorComponent></SeparatorComponent>
      {entryPropsThree && <MainEntryComponent {...entryPropsThree}></MainEntryComponent>}
      <SeparatorComponent></SeparatorComponent>
      {entryPropsFour && <MainEntryComponent {...entryPropsFour}></MainEntryComponent>}
      <SeparatorComponent></SeparatorComponent>
      {entryPropsFive && <MainEntryComponent {...entryPropsFive}></MainEntryComponent>}
      <SeparatorComponent></SeparatorComponent>
      <GuestForm></GuestForm>
    </div>
  );
};

export default Home;
