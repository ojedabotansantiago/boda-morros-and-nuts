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
  firstStep?: boolean;
  image?: StaticImageData;
  textMain?: string;
  subtitle?: string;
  secondaryText?: string;
  tertiaryText?: string;
  frothyText?: string;
  link?: string;
  linkText?: string;
};
const Home: NextPage = () => {
  // Initialize Firebase

  const entryPropsOne: EntryProps = {
    firstStep: true,
    image: p1,
    subtitle:
      'Quién nos iba a decir, en ese Club Deportivo de Rugby Químicas de la universidad donde nos vimos por primera vez, que acabaríamos dándonos el ‘’Sí, quiero’’',
    secondaryText:
      'Tras más de 8 años de aventuras juntos, hemos decidido dar el gran paso y si has recibido este   enlace, es porque eres especial para nosotros y queremos compartir contigo este día tan importante.',
  };
  const entryPropsTwo: EntryProps = {
    image: p2,
    textMain: 'La ceremonia',
    subtitle: 'La ceremonia será religiosa y se celebrará en la Parroquia Beato Manuel Domingo y Sol a las 12:30 horas.',
    secondaryText: 'La Parroquia se encuentra en la Calle Pablo Picasso 4. 28222 Majadahonda, Madrid.',
    tertiaryText: 'Os dejamos por aquí abajo en enlace a Google Maps:',
    link: 'https://goo.gl/maps/ZPFJVJTrCFxX5kbT8',
    linkText: 'Parroquia Beato Manuel Domingo y Sol',
  };
  const entryPropsThree: EntryProps = {
    image: p3,
    textMain: 'La celebración.',
    subtitle: 'Después de la ceremonia, iremos a celebrarlo a La Cañada de Mónico.',
    secondaryText: 'La finca se encuentra en el Km. 1,600, M-533, kilómetro 1-600, 28211 Peralejo, Madrid.',
    tertiaryText:
      'Os rogamos que indiquéis en el formulario final si tenéis cualquier alergia o intolerancia para adaptar el menú a vuestras necesidades y evitar un susto.',
    frothyText: 'Os dejamos el enlace a Google Maps:',
    link: 'https://goo.gl/maps/sfcuob9YQ8ztmMUH8',
    linkText: 'La Cañada de Mónico',
  };
  const entryPropsFour: EntryProps = {
    image: p4,
    textMain: 'Autobuses',
    subtitle: 'Dispondremos de servicio de autobuses que nos llevarán desde la Parroquia Beato Manuel Domingo y Sol hasta la finca La Cañada de Mónico.',
    secondaryText: 'Al terminar la boda, también habrá autobuses de vuelta, desde La Cañada de Mónico hasta la Parroquia Beato Manuel Domingo y Sol.',
    tertiaryText:
      'Os rogamos que nos indiquéis si vais a necesitar transporte de ida, de vuelta o ambos, para poder organizar los autobuses y que nadie se quede en tierra.',
  };
  const entryPropsFive: EntryProps = {
    secondaryText:
      'Vuestra presencia es nuestro mejor regalo, pero si aun así queréis tener un detalle con nosotros os dejamos nuestro número de cuenta por aquí:',
    tertiaryText: 'ES92 1465 0100 91 1747418260',
  };

  //console.log(entryPropsOne);
  return (
    /*  <div className='bg-mark-image'> */
    <div>
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
