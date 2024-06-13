export const ONE_SECOND_IN_MILLISECONDS = 1000;
export const ONE_MINUTE_IN_SECONDS = 60;
export const ONE_HOUR_IN_MINUTES = 60;
export const ONE_DAY_IN_HOURS = 24;

/**
 * i.e.: 1 day in milliseconds = 86.400.000
 */
export const ONE_DAY_IN_MILLISECONDS =
  ONE_SECOND_IN_MILLISECONDS *
  ONE_MINUTE_IN_SECONDS *
  ONE_HOUR_IN_MINUTES *
  ONE_DAY_IN_HOURS;

export const ONE_HOUR_IN_MILLISECONDS =
  ONE_SECOND_IN_MILLISECONDS * ONE_MINUTE_IN_SECONDS * ONE_HOUR_IN_MINUTES;

export const ONE_MINUTE_IN_MILLISECONDS =
  (ONE_SECOND_IN_MILLISECONDS / ONE_MINUTE_IN_SECONDS) % ONE_HOUR_IN_MINUTES;

/**
 * i.e.: 2024
 */
export const CURRENT_YEAR = new Date().getFullYear();

/**
 * i.e.: 12/31/2023
 */
export const LAST_DAY_OF_YEAR = `12/31/${new Date().getFullYear()}`;

/**
 * i.e.: 1718132520439
 */
export const CURRENT_TIME_IN_MILLISECONDS = new Date().getTime();
