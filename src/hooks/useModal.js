import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const OpenModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return [isOpen, OpenModal, closeModal];
};
