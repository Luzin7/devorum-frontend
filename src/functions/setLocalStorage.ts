export interface TopicBody {
  title?: string;
  body?: string;
}

interface SetLocalStorageProps {
  storageKey: string;
  storageContent: TopicBody;
}

export function setLocalStorage(props: SetLocalStorageProps) {
  const existingDataString = localStorage.getItem(props.storageKey);

  const existingData = existingDataString ? JSON.parse(existingDataString) : {};

  const mergedData = {
    ...existingData,
    title: props.storageContent.title ?? existingData.title ?? '',
    body: props.storageContent.body ?? existingData.body ?? ''
  };

  localStorage.setItem(props.storageKey, JSON.stringify(mergedData));
}
