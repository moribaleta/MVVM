import { useState } from 'react';
import useStorageViewModel from '../../services/storage/viewModel';

const useNotesController = () => {
  const { entries, setEntryAsDeselected, setEntryAsSelected, deleteEntry } =
    useStorageViewModel();

  const [isVisible, setVisible] = useState(false);

  const onUpdateEntry = (note: string, isEnabled: boolean) => {
    if (isEnabled) {
      setEntryAsSelected(note);
    } else {
      setEntryAsDeselected(note);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const onOpenModal = () => {
    setVisible(true);
  };

  return {
    entries,
    onUpdateEntry,
    deleteEntry,
    isVisible,
    onClose,
    onOpenModal,
  };
};
export default useNotesController;
