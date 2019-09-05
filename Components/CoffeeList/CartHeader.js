import React from "react";
import { Button, Icon, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";
import cartStore from "../../store/cartStore";

function CartHeader({ navigation }) {
  return (
    <Button transparent onPress={() => navigation.navigate("Cart")}>
      <Text>{cartStore.quantity}</Text>
      <Icon type="AntDesign" name="shoppingcart" />
    </Button>
  );
}

export default withNavigation(observer(CartHeader));
