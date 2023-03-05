import { atom } from 'recoil';

type LoggedInType = {
  loggedIn: boolean
}

export const loggedInState = atom<LoggedInType>({
  key: 'loggedInState', // unique ID (with respect to other atoms/selectors)
  default: {
    loggedIn: false
  } as LoggedInType, // default value (aka initial value)
});
