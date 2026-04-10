import { StyleSheet, Text, TextInput, View } from "react-native";

interface CustomProps {
  input: string;
  onChange: (val: string) => void;
}

// Component for Name input
export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  console.log(input);

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        placeholder="Input your name"
        style={styles.inputField}
        onChangeText={onChange}
      />
    </View>
  );
};

// Component for NIM input
export const NIMInput = ({ input, onChange }: CustomProps) => {
  console.log(input);

  return (
    <View style={{ width: 200 }}>
      <Text>NIM</Text>
      <TextInput
        placeholder="Input your NIM/Student ID"
        style={styles.inputField}
        onChangeText={onChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});