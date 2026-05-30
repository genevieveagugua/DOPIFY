import { createContext } from 'react';
import { useModal } from '../hooks';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const taskViewModal = useModal();
  const congratsModal = useModal();

  return (
    <ModalContext.Provider value={{ taskViewModal, congratsModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
