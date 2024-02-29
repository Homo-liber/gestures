import { View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Home() {
  const xPosition = useSharedValue(0);
  const yPosition = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: withSpring(yPosition.value),
      left: withSpring(xPosition.value),
    };
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Circle Animation</Text>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: COLORS.primary,
            },
            animatedStyles,
          ]}
        ></Animated.View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button
          onPress={() => {
            xPosition.value = 260;
            yPosition.value = 440;
          }}
          title="Hint"
          color={COLORS.light}
        ></Button>
        <Button
          onPress={() => {
            xPosition.value = 0;
            yPosition.value = 0;
          }}
          title="Zurück"
          color={COLORS.light}
        ></Button>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   ball: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     background: COLORS.grey,
//   },
// });
