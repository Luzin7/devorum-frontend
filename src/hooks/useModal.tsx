import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return {
    isModalOpen,
    setIsModalOpen
  };
};
