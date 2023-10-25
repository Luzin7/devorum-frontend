import { reduceText } from './reduceText';
import { dateConverter } from './dateConverter';
import { slugUrlMaker } from './slugUrlMaker';
import { setLocalStorage } from 'functions/setLocalStorage';
import { getLocalStorage } from './getLocalStorage';
import { themeSwitcher } from './themeSwitcher';
import { getThemeBySystem } from './getUserSystemTheme';
import { CheckAuth } from './checkAuth';
import { PersistAuth } from './persistAuth';
import { logout } from './logout';

export {
  reduceText,
  dateConverter,
  slugUrlMaker,
  setLocalStorage,
  getLocalStorage,
  themeSwitcher,
  getThemeBySystem,
  CheckAuth,
  PersistAuth,
  logout
};
