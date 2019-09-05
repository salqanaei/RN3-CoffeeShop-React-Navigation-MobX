import { decorate, observable } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("Token", token);
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      await AsyncStorage.removeItem("Token");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  signupUser = async (userData, navigation) => {
    try {
      const res = await axios.post(
        "http://coffee.q8fawazo.me/api/register/",
        userData
      );
      this.loginUser(userData, navigation);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  loginUser = async (userData, navigation) => {
    try {
      const res = await axios.post(
        "http://coffee.q8fawazo.me/api/login/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      navigation.replace("List");
      console.log(this.user);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logoutUser = navigation => {
    this.setUser();
    navigation.replace("Login");
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("Token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logoutUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
