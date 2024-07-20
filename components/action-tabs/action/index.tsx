import { Text, View } from "react-native";
import { styleSheet } from "../styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSpriteContext } from "@/SpriteTransformer/context";

const Action = () => {
  const { state, dispatch } = useSpriteContext();
  return (
    <View style={styleSheet.actionContainer}>
      <View style={styleSheet.headerContainer}>
        <Text style={styleSheet.headerText}>ACTION</Text>
      </View>
      <View style={styleSheet.tabBody}>
        {state.actions.map(({ label, id }, ind) => (
          <View key={ind} style={styleSheet.block}>
            <MaterialCommunityIcons
              onPress={() => {
                dispatch({ type: "DELETE_ACTION", payload: id });
              }}
              style={{
                position: "absolute",
                right: 0,
                top: -10,
                backgroundColor: "#fff",
                borderRadius: 20,
              }}
              name="delete-circle"
              size={24}
              color="red"
            />
            <Text style={styleSheet.blockText}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Action;
