class Book {
  constructor(name, author, price) {
    this.name = name;
    this.price = price;
    this.author = author;
  }

  getDetails() {
    return `this ${this.name} is written by ${this.author}`;
  }
}

// decorator 1
function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unwrap = function () {
    return `Unwrapped ${book.getDetails()}`;
  };

  return book;
}

// decorator 2
function hardbindBook(book) {
  book.isHardbound = true;
  book.price += 5;
  return book;
}

// usage
const alchemist = giftWrap(new Book("The Alchemist", "Paulo Coelho", 10));

console.log(alchemist.isGiftWrapped); // true
console.log(alchemist.unwrap()); // 'Unwrapped The Alchemist by Paulo Coelho'

const inferno = hardbindBook(new Book("Inferno", "Dan Brown", 15));

console.log(inferno.isHardbound); // true
console.log(inferno.price); // 20

/*In this example, we create a Book class. We further create two decorator functions
 that accept a book object and return a “decorated” book object — giftWrap that adds 
 one new attribute and one new function and hardbindBook that adds one new attribute 
 and edits the value of one existing attribute.
*/
