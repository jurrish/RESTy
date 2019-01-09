class Animal {
  speak() {
    console.log('hi');
  }
}

class Dog extends Animal {
  speak() {
    console.log('woof');
  }
}

let gary = new Dog();
gary.speak();
