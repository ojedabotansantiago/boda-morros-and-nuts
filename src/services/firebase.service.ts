
import { initializeApp } from "firebase/app";

import { getDatabase, ref, set } from "firebase/database";
import { FirebaseDto } from '../interfaces/firebase.interface';

export function writeFirebaseDto(firebaseDto: FirebaseDto) {
  debugger;
  const db = getDatabase();
  return set(ref(db, 'guests/'), {
    ...firebaseDto
  });
}