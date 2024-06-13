import { setLocalStorage } from 'functions/setLocalStorage';
import { checkSession } from './checkSession';
import { dateConverter } from './dateConverter';
import { getLocalStorage } from './getLocalStorage';
import { logout } from './logout';
// import { PersistAuth } from './persistAuth';
import { reduceText } from './reduceText';
import { slugUrlMaker } from './slugUrlMaker';
import { themeSwitcher } from './themeSwitcher';

export {
  // PersistAuth,
  checkSession,
  dateConverter,
  getLocalStorage,
  logout,
  reduceText,
  setLocalStorage,
  slugUrlMaker,
  themeSwitcher
};
