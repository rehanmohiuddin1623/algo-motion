import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import { useSpriteContext } from "@/SpriteTransformer/context";

const SpriteVitals = () => {
  const [selectedValue, setSelectedValue] = useState("BOY");
  const pickerRef: any = useRef();

  const { state } = useSpriteContext();
  return (
    <View style={styleSheet.container}>
      <Picker
        style={{ height: 50, width: 180, minWidth: 150 }}
        ref={pickerRef}
        testID="styled-picker"
        selectedValue={selectedValue}
        mode="dropdown"
      >
        <Picker.Item label="Boy" value="BOY" />
      </Picker>
      <View style={styleSheet.flexBlock}>
        <Text>X :</Text>
        <TextInput
          inputMode="numeric"
          maxLength={3}
          style={styleSheet.textInputContainer}
          defaultValue={`${state.sprites[state.activeSprite as number]?.x}`}
          onTextInput={(text) => {
            dis;
          }}
        />
      </View>
      <View style={styleSheet.flexBlock}>
        <Text>Y :</Text>
        <TextInput
          inputMode="numeric"
          maxLength={3}
          style={styleSheet.textInputContainer}
          value={`${state.sprites[state.activeSprite as number]?.y}`}
        />
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    marginTop: 40,
  },
  flexBlock: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
  textInputContainer: {
    marginLeft: 10,
    borderColor: "#444",
    height: 30,
    width: 50,
    borderWidth: 0.8,
    color: "#000",
    padding: 5,
    margin: 10,
  },
});

export default SpriteVitals;
