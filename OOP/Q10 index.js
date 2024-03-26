class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  totalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  totalPrice(quantity) {
    const totalPrice = super.totalPrice(quantity);
    return totalPrice + this.warrantyPeriod;
  }
}

const personalCareProduct = new PersonalCareProduct("P123", "Shampoo", 5.99, 1);
const quantity = 2;

const total = personalCareProduct.totalPrice(quantity);
console.log(
  `Total for ${quantity} ${personalCareProduct.name}(s): $${total.toFixed(2)}`
);
