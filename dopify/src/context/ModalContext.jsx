import { useContext } from 'react';
import ModalContext from './ModalProvider';

/**
 * Custom hook to use ModalContext
 * Throws error if used outside of ModalProvider
 */
export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within ModalProvider');
  }
  return context;
}
