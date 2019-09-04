import { createStackNavigator } from "react-navigation";

import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import Login from "../Components/Login";

const MyStack = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      },
      cardStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default MyStack;
