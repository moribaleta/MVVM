import {
  Button,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';

import CreateNote from '../create';
import Note from '../../components/note';
import { useCallback } from 'react';
import useNotesController from './hooks';

const Notes = () => {
  const {
    entries,
    onUpdateEntry,
    deleteEntry,
    isVisible,
    onOpenModal,
    onClose,
  } = useNotesController();

  const renderNote = useCallback(
    (item: ListRenderItemInfo<[string, boolean]>) => {
      const [note, isEnabled] = item.item;
      return (
        <Note
          note={note}
          isEnabled={isEnabled}
          onPress={() => onUpdateEntry(note, !isEnabled)}
          onDelete={() => deleteEntry(note)}
        />
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList data={entries} renderItem={renderNote} />
      <Button title="Create a New Note" onPress={onOpenModal} />
      <CreateNote isVisible={isVisible} onClose={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'yellow',
  },
});

export default Notes;
