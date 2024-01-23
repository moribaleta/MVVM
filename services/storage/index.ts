import { proxyMap } from 'valtio/utils';
import { useSnapshot } from 'valtio/react';
import { useState } from 'react';

/**
 * model example to incorporate valtio states
 */

const map: Record<string, boolean> = {
  'note 1': true,
  'note 2': false,
  'note 3': true,
};

const storage = proxyMap<string, boolean>();

Object.keys(map).map((key) => {
  storage.set(key, map[key]);
});

const useStorage = () => {
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
