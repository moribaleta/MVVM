import { useSnapshot } from 'valtio/react';

/**
 * domain model for storage
 * as this contains the definite business logic
 * @param storage
 * @returns
 */
const useStorage = (storage: Map<string, boolean>) => {
  const snapStorage = useSnapshot(storage);

  const updateEntry = (key: string, isEnabled: boolean) => {
    storage.set(key, isEnabled);
  };

  const deleteEntry = (key: string) => {
    storage.delete(key);
  };

  const setEntryAsSelected = (key: string) => {
    updateEntry(key, true);
  };

  const setEntryAsDeselected = (key: string) => {
    updateEntry(key, false);
  };

  const createEntry = (key: string) => {
    updateEntry(key, false);
  };

  return {
    entries: [...snapStorage.entries()],
    deleteEntry,
    createEntry,
    setEntryAsSelected,
    setEntryAsDeselected,
  };
};

export default useStorage;
