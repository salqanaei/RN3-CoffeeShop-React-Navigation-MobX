import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart = incomingItem => {
    const foundItem = this.items.find(
      item =>
        item.option === incomingItem.option && item.drink === incomingItem.drink
    );
    if (foundItem) foundItem.quantity += incomingItem.quantity;
    else this.items.push(incomingItem);
  };

  removeItemFromCart = itemToDelete => {
    const foundItem = this.items.find(item => item.quantity > 1);
    if (foundItem) {
      foundItem.quantity--;
    } else {
      this.items = this.items.filter(item => item !== itemToDelete);
    }
  };

  checkoutCart = () => (this.items = []);

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

export default new CartStore();
