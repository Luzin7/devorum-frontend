import { useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return {
    isLoading,
    setIsLoading,
    isSuccess,
    setIsSuccess
  };
};
