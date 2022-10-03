import Image from 'next/image';
import React from 'react';
import { EventHandler, FormEvent, useState } from 'react';
import { FirebaseDto } from '../interfaces/firebase.interface';
import { writeFirebaseDto } from '../services/firebase.service';

const GuestForm = () => {
  console.log('GuestForm');
  const [companionSelected, setDataCompanionCheckboxChange] = useState(false);
  const [suggestedSong, setSuggestedSong] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  //const [email, setEmail] = useState('');
  let dto: FirebaseDto = {
    guestEmail: '',
    guestName: '',
    guestSurnames: '',
    companionName: '',
    companionSurname: '',
    guestComments: '',
    guestTransport: false,
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: any = event?.target;
    dto.guestEmail = data.email.value;
    dto.guestName = data.name.value;
    dto.guestSurnames = data.surnames.value;
    dto.guestComments = data.comments.value;
    debugger;
    dto.guestTransport = data.transport.checked;
    if (companionSelected) {
      dto.companionName = data.companionName.value;
      dto.companionSurname = data.companionSurname.value;
    }
    if (suggestedSong) {
      const dirtySongsList = [data.suggestedSonOne?.value, data?.suggestedSonTwo?.value, data?.suggestedSonThree?.value];
      dto.songs = dirtySongsList.filter(Boolean);
    }
    console.log(dto);
    saveForm();
  }
  function saveForm() {
    debugger;
    writeFirebaseDto(dto)
      .then((response) => {
        console.log(response);
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setCompanionSelected(data: any) {
    if (data) {
      setDataCompanionCheckboxChange(data.target.checked);
    }
  }
  function setSuggestedSongsSelected(data: any) {
    if (data) {
      setSuggestedSong(data.target.checked);
    }
  }
  function renderGuestDom() {
    return (
      <React.Fragment>
        <span className="before:content-['*'] text-center mt-6">Nombre del acompañante:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='companionName' id='companionName' minLength={2} required />

        <span className="before:content-['*'] text-center mt-3 ">Apellido del acompañante:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='companionSurname' id='companionSurname' minLength={2} required />
      </React.Fragment>
    );
  }

  function renderSuggestedSongsDom() {
    return (
      <React.Fragment>
        <span className='text-center mt-6 ml-4'>Cancion 1:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='suggestedSonOne' id='suggestedSonOne' minLength={2} />

        <span className='text-center mt-6 ml-4'>Cancion 2:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='suggestedSonTwo' id='suggestedSonTwo' minLength={2} />

        <span className='text-center mt-6 ml-4'>Cancion 3:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='suggestedSonThree' id='suggestedSonThree' minLength={2} />
      </React.Fragment>
    );
  }
  function renderMainForm() {
    return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center my-8'>
        <span className="before:content-['*'] text-center">Email:</span>
        <input type='email' className='peer text-center border-2 mt-3 ' name='email' id='email' minLength={5} required />
        {/* <p className='mt-3 invisible peer-required:visible text-pink-600 text-sm'>Please provide a valid email address.</p> */}

        <span className="before:content-['*'] text-center mt-6 ">Nombre:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='name' id='name' minLength={2} required />
        {/* <p className='mt-3 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid name.</p>
         */}
        <span className="before:content-['*'] text-center mt-6 ">Apellidos:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='surnames' id='surnames' minLength={2} required />

        <span className=' text-center mt-6 '>Alergenos o intolerancias:</span>
        <textarea className='peer text-center border-2 mt-3' name='comments' id='comments' minLength={2} />
        {/* <p className='mt-3 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid surname.</p> */}

        {/*   <span className='text-center mt-8 '>¿Traes acompañante?:</span>
        <input type='checkbox' className='peer text-center border-2 mt-3 default:ring-2' name='companion' id='companion' onChange={setCompanionSelected} />

        {companionSelected && renderGuestDom()} */}

        {/* <span className='text-center mt-8 '>¿Alguna cancion indispensable en la boda?:</span> */}
        {/* <input
          type='checkbox'
          className='peer text-center border-2 mt-3 default:ring-2'
          name='songsSuggested'
          id='songsSuggested'
          onChange={setSuggestedSongsSelected}
        /> */}
        <span className='text-center mt-8 '>¿Necesitas transporte?:</span>
        <input type='checkbox' className='peer text-center border-2 mt-3 default:ring-2' name='transport' id='transport' />
        {/* {suggestedSong && renderSuggestedSongsDom()} */}
        <input
          type='submit'
          value='Enviar'
          className='mt-10 border-2 p-4  hover:bg-blue-100 active:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-50'
        />
      </form>
    );
  }
  function renderFormSuccess() {
    return (
      <span className='text-center text-1xl font-bold mx-8 underline  hover:text-green-500'>
        <h1>El formulario de asistencia se envio correctamente.</h1>
        <h4> Contamos contigo en este dia tan especial.</h4>
        <p> Muchas gracias </p>
      </span>
    );
  }
  return !formSubmitted ? renderMainForm() : renderFormSuccess();
};

export default GuestForm;
