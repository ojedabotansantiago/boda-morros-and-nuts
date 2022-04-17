import type { NextPage } from 'next';
import { StaticImageData } from 'next/image';
import MainEntryComponent from '../components/MainEntry.component';
import MainTitle from '../components/Maintitle.component';
import SeparatorComponent from '../components/separator.component';
import MainNuecesAndMorr from '../public/images/MainNuecesAndMorr.jpg';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZoxuK4m_d_4KDA7EtvoWjgArVTTae0FE',
  authDomain: 'boda-irene-y-guillermo.firebaseapp.com',
  projectId: 'boda-irene-y-guillermo',
  storageBucket: 'boda-irene-y-guillermo.appspot.com',
  messagingSenderId: '723867071007',
  appId: '1:723867071007:web:731259385080dc09e51b2a',
  measurementId: 'G-NCLSN6EX8V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

type EntryProps = {
  image: StaticImageData;
  textMain: string;
  subtitle: string;
};
const Home: NextPage = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const entryPropsOne: EntryProps = {
    image: MainNuecesAndMorr,
    textMain: '14 de Dicembre del 2022 ',
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
