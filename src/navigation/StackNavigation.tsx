import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../screens/Auth/SignUp";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"SignUp"} component={SignUp} />
      </Stack.Navigator>
    </>
  );
}
