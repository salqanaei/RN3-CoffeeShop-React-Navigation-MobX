import React from "react";
import { Button, Icon, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";
import cartStore from "../../store/cartStore";
import authStore from "../../store/authStore";

function LogoutButton({ navigation }) {
  return (
    <Button transparent onPress={() => authStore.logoutUser(navigation)}>
      <Text>LogOut</Text>
      <Icon type="AntDesign" name="logout" />
    </Button>
  );
}

export default withNavigation(observer(LogoutButton));
