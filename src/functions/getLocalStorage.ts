interface GetLocalStorageProps {
  storageKey: string;
}

export function getLocalStorage({ storageKey }: GetLocalStorageProps) {
  const existingDataString = localStorage.getItem(storageKey);

  const existingData = existingDataString ? JSON.parse(existingDataString) : {};

  return existingData;
}
