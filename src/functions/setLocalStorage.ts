interface SetLocalStorageProps {
  storageKey: string;
  storageContent: Record<string, string>;
}

export function setLocalStorage(props: SetLocalStorageProps) {
  const existingDataString = localStorage.getItem(props.storageKey);

  const existingData = existingDataString ? JSON.parse(existingDataString) : {};

  const mergedData = {
    ...existingData,
    id: props.storageContent.id ?? existingData.id ?? '',
    name: props.storageContent.name ?? existingData.name ?? ''
  };

  localStorage.setItem(props.storageKey, JSON.stringify(mergedData));
}
