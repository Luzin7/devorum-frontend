import { useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return {
    isLoading,
    setIsLoading,
    isSuccess,
    setIsSuccess
  };
};
