import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import CScreen from "../CScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={CScreen}
        options={{ tabBarIcon: () => <MaterialIcons name="restaurant" size={24} /> }}
      />
      <Tab.Screen
        name="Favorites"
        component={CScreen}
        options={{ tabBarIcon: () => <MaterialIcons name="favorite" size={24} /> }}
      />
      <Tab.Screen
        name="Orders"
        component={CScreen}
        options={{ tabBarIcon: () => <MaterialIcons name="receipt" size={24} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={CScreen}
        options={{ tabBarIcon: () => <MaterialIcons name="person" size={24} /> }}
      />
    </Tab.Navigator>
  );
}