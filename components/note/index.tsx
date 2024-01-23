import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Note: React.FunctionComponent<{
  note: string;
  isEnabled: boolean;
  onPress: () => void;
  onDelete: () => void;
}> = ({ note, isEnabled, onPress, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text>{note}</Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.checkbox} onPress={onPress}>
          <Text> {isEnabled ? '✔️' : ''} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkbox} onPress={onDelete}>
          <Text> 🗑️ </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 5,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

export default Note;
