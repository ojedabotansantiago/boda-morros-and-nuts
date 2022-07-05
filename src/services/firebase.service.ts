
import { initializeApp } from "firebase/app";

import { getDatabase, push, ref } from "firebase/database";
import { FirebaseDto } from '../interfaces/firebase.interface';

export function writeFirebaseDto(firebaseDto: FirebaseDto) {
  debugger;
  const db = getDatabase();
  return push(ref(db, 'guests/'), {
    ...firebaseDto
  });
}