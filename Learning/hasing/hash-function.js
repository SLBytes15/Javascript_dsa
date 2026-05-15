class HashFunction {
  constructor() {
    this.slots = [[], [], [], [], []]; // empty list
  }

  _hash(key) {
    return key % 6;
  }

  insert(key, value) {
    const slot = this._hash(key);
    this.slots[slot].push(value); // Add to the list
    console.log(`Added ${value} to slot ${slot}`);
  }

  find(key) {
    const slot = this._hash(key);
    if (this.slots[slot].length > 0) {
      console.log(`Found ${this.slots[slot]} in slot ${slot}`);
    } else {
      console.log(`Slot ${slot} is empty`);
    }
  }
}

const ListBox = new HashFunction();

ListBox.insert(15, "Hello");
ListBox.insert(14, "World");

ListBox.find(15);