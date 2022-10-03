export interface FirebaseDto {
  guestTransportGo: boolean;
  guestTransportBack: boolean;
  guestEmail: string;
  guestName: string;
  guestSurnames: string;
  companionName?: string;
  companionSurname?: string;
  songs?: string[];
  guestComments?: string;
}