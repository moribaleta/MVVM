import { CreateNoteControllerType } from './types';
import { useState } from 'react';
import useStorageViewModel from '../../domain/storage/viewModel';

const useCreateNoteController = ({ onClose }: CreateNoteControllerType) => {
  const [note, setNote] = useState('');
  const { createEntry } = useStorageViewModel();

  const onDone = () => {
    createEntry(note);
    onClose();
  };

  return {
    setNote,
    onDone,
  };
};

export default useCreateNoteController;
