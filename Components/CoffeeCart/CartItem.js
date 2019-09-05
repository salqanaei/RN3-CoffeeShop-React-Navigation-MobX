import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import cartStore from "../../store/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
        <Text note style={{ marginLeft: 16 }}>
          {item.option}
        </Text>
      </Left>
      <Body>
        <Text style={{ color: "white" }}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
