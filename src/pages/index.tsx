import type { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import FormComponent from '../components/form.component';
import MainEntryComponent from '../components/MainEntry.component';
import MainTitle from '../components/Maintitle.component';
import SeparatorComponent from '../components/separator.component';

import MainNuecesAndMorr from '../public/images/MainNuecesAndMorr.jpg';
import p2 from '../public/images/p2.jpg';
import p3 from '../public/images/p3.jpg';
import p4 from '../public/images/p4.jpg';

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
    subtitle: 'Nuestra historia: no conocimos en hufelpuff',
  };
  const entryPropsTwo: EntryProps = {
    image: p2,
    textMain:
      'The thin man stepped out of the cauldron, staring at Harry . . . and Harry stared back into the face that had haunted his nightmares for three years. Whiter than a skull, with wide, livid scarlet eyes and a nose that was flat as a snakes with slits for nostrils . . .',
    subtitle:
      '"Nope," said Harry. He was looking around the graveyard. It was completely silent and slightly eerie. "Is this supposed to be part of the task?"',
  };
  const entryPropsThree: EntryProps = {
    image: p3,
    textMain: 'They saw two bucket-size cups and saucers on the wooden table in front of the fireplace when they entered Hagrids cabin.',
    subtitle:
      'Ill leave Fang with yeh. Headmaster," Hagrid said, staring menacingly at Karkaroff, who was still sprawled at the foot of the tree, tangled in furs and tree roots. "Stay, Fang. Cmon, Harry.',
  };
  const entryPropsFour: EntryProps = {
    image: p4,
    textMain: 'They saw two bucket-size cups and saucers on the wooden table in front of the fireplace when they entered Hagrids cabin.',
    subtitle:
      'Unlike Dumbledore, Karkaroff looked much younger; his hair and goatee were black. He was not dressed in sleek furs, but in thin and ragged robes. He was shaking. Even as Harry watched..',
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

      <FormComponent></FormComponent>
    </div>
  );
};

export default Home;
