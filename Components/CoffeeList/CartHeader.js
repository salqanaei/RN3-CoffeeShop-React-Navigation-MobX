import React from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

function CartHeader({ navigation }) {
  return (
    <Button transparent onPress={() => navigation.navigate("Cart")}>
      <Icon type="AntDesign" name="shoppingcart" />
    </Button>
  );
}

export default withNavigation(CartHeader);
