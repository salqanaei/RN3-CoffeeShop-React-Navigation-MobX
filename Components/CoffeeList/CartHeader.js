import React from "react";
import { Container, Header, Content, Icon } from "native-base";
import { withNavigation } from "react-navigation";

function CartHeader({ navigation }) {
  return (
    <Icon
      type="FontAwesome"
      name="cart-plus"
      onPress={() => navigation.navigate("Cart")}
    />
  );
}

export default withNavigation(CartHeader);
