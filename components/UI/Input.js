import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/Styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize={false}
        //autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: GlobalStyles.colors.black,
    marginBottom: 4,
  },
  input: {
    height: 44,
    borderColor: GlobalStyles.colors.darkBlue,
    borderWidth: 0.5,
    backgroundColor: GlobalStyles.colors.gainsboro,
    borderRadius: 4,
    fontSize: 16,
  },
});