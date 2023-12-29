import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
