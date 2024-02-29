import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontSize: 23 },
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTintColor: COLORS.light,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="banckward" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="creditcard" size={24} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="page3"
        options={{
          title: "page3",
          tabBarIcon: ({ color }) => {
            return <AntDesign name="creditcard" size={24} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="page4"
        options={{
          title: "page4",
          tabBarIcon: ({ color }) => {
            return <AntDesign name="creditcard" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
