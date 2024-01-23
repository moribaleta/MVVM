import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import useCreateNoteController from './hooks';

const CreateNote: React.FunctionComponent<{
  isVisible: boolean;
  onClose: () => void;
}> = ({ isVisible, onClose }) => {
  const { onDone, setNote } = useCreateNoteController({ onClose });

  return (
    <Modal visible={isVisible} style={styles.modal}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View />
          <Text style={styles.title}>Create a new Note</Text>
          <Button title="Cancel" onPress={onClose} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={setNote} />
        </View>
        <Button title="Done" onPress={onDone} />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'clear',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 12,
  },
  title: {
    fontSize: 18,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 12,
    flex: 1,
    textAlign: 'left',
  },
  inputContainer: {
    padding: 16,
    flex: 1,
  },
});

export default CreateNote;
