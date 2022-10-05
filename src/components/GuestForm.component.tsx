import Image from 'next/image';
import React from 'react';
import { EventHandler, FormEvent, useState } from 'react';
import { FirebaseDto } from '../interfaces/firebase.interface';
import { writeFirebaseDto } from '../services/firebase.service';
import titleImage from '../public/images/formulary.jpeg';

const GuestForm = () => {
  const [companionSelected, setDataCompanionCheckboxChange] = useState(false);
  const [suggestedSong, setSuggestedSong] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSendedWithError, setFormError] = useState(false);

  //const [email, setEmail] = useState('');
  let dto: FirebaseDto = {
    guestEmail: '',
    guestName: '',
    guestSurnames: '',
    guestComments: '',
    guestTransportGo: false,
    guestTransportBack: false,
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: any = event?.target;
    dto.guestEmail = data.email.value;
    dto.guestName = data.name.value;
    dto.guestSurnames = data.surnames.value;
    dto.guestComments = data.comments.value;
    dto.guestTransportGo = data.transportGo.checked;
    dto.guestTransportBack = data.transportBack.checked;
    /* if (companionSelected) {
      dto.companionName = data.companionName.value;
      dto.companionSurname = data.companionSurname.value;
    } */
    /* if (suggestedSong) {
      const dirtySongsList = [data.suggestedSonOne?.value, data?.suggestedSonTwo?.value, data?.suggestedSonThree?.value];
      dto.songs = dirtySongsList.filter(Boolean);
    } */
    saveForm();
  }
  function saveForm() {
    writeFirebaseDto(dto)
      .then((response) => {
        console.log(response);
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setFormError(true);
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
        {/* <h2 className='text-center pb-8 text-center font-passion-conflict italic text-2xl '>~ Formulario de asistencia ~</h2> */}

        <div className='flex justify-center px-8 pb-8 max-w-lg  bg-pack-train'>
          <Image className='items-center max-w-xl ' src={titleImage} alt='Picture of the author' priority />
        </div>

        <span className="before:content-['*'] text-center">Email:</span>
        <input type='email' className='peer text-center border-2 mt-3 ' name='email' id='email' minLength={5} required />
        {/* <p className='mt-3 invisible peer-required:visible text-pink-600 text-sm'>Please provide a valid email address.</p> */}

        <span className="before:content-['*'] text-center mt-6 ">Nombre:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='name' id='name' minLength={2} required />
        {/* <p className='mt-3 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid name.</p>
         */}
        <span className="before:content-['*'] text-center mt-6 ">Apellidos:</span>
        <input type='text' className='peer text-center border-2 mt-3' name='surnames' id='surnames' minLength={2} required />

        <span className=' text-center mt-6 '>Alérgenos o intolerancias:</span>
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

        <p className='text-center mt-8 px-6 '>Marca la casilla a continuación para indicar que vas a necesitar transporte de:</p>

        <div className='grid gap-2 grid-cols-2 grid-rows-2 mt-6'>
          <span className='font-bold mt-1'>Ida:</span>
          <input type='checkbox' className='peer text-center border-2 default:ring-2' name='transportGo' id='transportGo' />
          <span className='font-bold mt-1'>Vuelta:</span>
          <input type='checkbox' className='peer text-center border-2 default:ring-2' name='transportBack' id='transportBack' />
        </div>

        {/* {suggestedSong && renderSuggestedSongsDom()} */}
        {formSendedWithError && renderFormError()}

        {!formSendedWithError && (
          <input
            type='submit'
            value='Enviar'
            className='mt-10 border-2 py-4 px-8 hover:bg-blue-100 active:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-50'
          />
        )}
      </form>
    );
  }
  function renderFormSuccess() {
    return (
      <span className='text-center text-1xl font-bold mt-8 px-8 underline  hover:text-green-500'>
        <h1>El formulario de asistencia se envio correctamente.</h1>
        <h4> Contamos contigo para este dia tan especial.</h4>
        <h4> Nos vemos el 10 de Dicembre del 2022.</h4>
        <p> Muchas gracias.</p>
      </span>
    );
  }
  function renderFormError() {
    return (
      <span className='text-center text-1xl mt-8 px-8 font-bold mx-8 text-red-500'>
        <h1>Hemos encontrado un problema al enviar los datos del formulario.</h1>
        <h4> Por favor ponte en contacto con nostros a traves del correo.</h4>
        <a className='underline' href='mailto:irenerorod@gmail.com,guiarrosan@gmail.com?Subject=Confirmación%20Asistencia%20boda%20Irene%20y%20Guillermo'>
          irenerorod@gmail.com o guiarrosan@gmail.com
        </a>
        <p> Muchas gracias y perdona las molestias.</p>
      </span>
    );
  }
  return !formSubmitted ? renderMainForm() : renderFormSuccess();
};

export default GuestForm;
