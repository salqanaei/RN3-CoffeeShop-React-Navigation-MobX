import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = incomingItem => {
    const foundItem = this.items.find(
      item =>
        item.option === incomingItem.option && item.drink === incomingItem.drink
    );
    if (foundItem) foundItem.quantity++;
    else this.items.push(incomingItem);
  };

  removeItemFromCart = itemID =>
    this.items.filter(item => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        item !== itemID;
      }
    });
  checkoutCart = () => (this.items = []);
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
