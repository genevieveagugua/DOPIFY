import { useState } from 'react';

/**
 * Custom hook for managing modal state and operations
 * Module 2: Custom Hooks
 * Simplifies modal open/close logic
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data = null) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
  };
}
