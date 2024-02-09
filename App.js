import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./navigation/RootNavigator";
import { AuthProvider } from "./providers/AuthProvider";

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;
