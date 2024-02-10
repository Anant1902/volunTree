import * as React from "react";
import AdminTab from "./AdminTab";
import UserTab from "./UserTab";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { AuthContext } from "../providers/AuthProvider";

export const RootNavigator = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user ? (
        <AuthStack />
      ) : user.role == "Admin" ? (
        <AdminTab />
      ) : (
        <UserTab />
      )}
    </NavigationContainer>
    // <NavigationContainer>
    //   <AdminTab/>
    //   {/* <UserTab /> */}
    // </NavigationContainer>
  );
};
