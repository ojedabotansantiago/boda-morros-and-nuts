import Image from 'next/image';
import { EventHandler, FormEvent, useState } from 'react';

type firebaseDto = {
  guestEmail: string;
  guestName: string;
  guestSurname: string;
  companionName: string;
  companionSurname: string;
  songs?: string[];
};
const FormComponent = () => {
  console.log('FormComponent');

  //const [email, setEmail] = useState('');
  let dto: firebaseDto = {
    guestEmail: '',
    guestName: '',
    guestSurname: '',
    companionName: '',
    companionSurname: '',
  };
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    debugger;
    const data: any = event?.target;
    dto.guestEmail = data.email.value;
    dto.guestName = data.name.value;
    console.log(dto);
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center my-8'>
      <span className="before:content-['*'] text-center">Email:</span>
      <input type='email' className='eml text-center border-2' name='email' id='email' minLength={10} required />
      <p className='mt-2 invisible eml-invalid:visible text-pink-600 text-sm'>Please provide a valid email address.</p>

      <span className="before:content-['*'] text-center">Nombre:</span>
      <input type='text' className='peer text-center border-2' name='name' id='name' required />
      <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid name.</p>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default FormComponent;
