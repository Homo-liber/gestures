import { View, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

export default function Home() {
  const isPressed = useSharedValue(true);
  const latestOffset = useSharedValue({ x: 0, y: 0 });
  const offset = useSharedValue({ x: 0, y: 0 });

  const dragGesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + latestOffset.value.x,
        y: e.translationY + latestOffset.value.y,
      };
    })
    .onEnd(() => {
      latestOffset.value.x = offset.value.x;
      latestOffset.value.y = offset.value.y;
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: isPressed.value ? COLORS.primary : COLORS.grey,
      // transform: [{ scale: isPressed.value ? 1.4 : 1 }],
      transform: [
        { scale: withSpring(isPressed.value ? 1.4 : 1) },
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });

  return (
    <View
      style={[
        globalStyles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <GestureDetector gesture={dragGesture}>
        <Animated.View style={[styles.ball, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.grey,
  },
});
