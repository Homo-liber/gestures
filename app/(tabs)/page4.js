import { Text, Button, View, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  GestureDetector,
  Gesture,
  PinchGestureHandler,
} from "react-native-gesture-handler";

export default function Page4() {
  const multiplier = useSharedValue(1);
  const startMultiplier = useSharedValue(1);
  const pinch = Gesture.Pinch()
    .onBegin(() => {
      console.log("testttt");
    })
    .onUpdate((event) => {
      multiplier.value = event.scale * startMultiplier.value;
    })
    .onEnd(() => {
      startMultiplier.value = multiplier.value;
    });
  const animatedTofu = useAnimatedStyle(() => {
    return {
      transform: [{ scale: multiplier.value }],
    };
  });

  return (
    <View
      style={[
        globalStyles.container,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <GestureDetector gesture={pinch}>
        <Animated.View style={[globalStyles.greenbox, animatedTofu]} />
      </GestureDetector>
      {/* <Button
        title="click!"
        onPress={() => {
          multiplier.value = withSpring(2);
        }}
      ></Button> */}
    </View>
  );
}
