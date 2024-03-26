class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  showDetails() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  showDetails() {
    super.showDetails();
    console.log(`Price: $${this.price}`);
  }
}

const ebook = new Ebook(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  2008,
  29.99
);
ebook.showDetails();
