function Book ( title,author,genre,price){
this.title = title;
this.author = author;
this.genre = genre;
this.price = price;

this.getBookInfo = function(){
    console.log(`${title}, written by ${this.author.name} and genre is ${genre} and price is ${price}`)
} 
}

function Author (name,birthYear,nationality){
    this.name = name ;
    this.birthYear = birthYear;
    this.nationality =nationality;
}

const author1 = new Author("J.K. Rowling", 1965, "British");
const author2 = new Author("George Orwell", 1903, "British");


const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 20);
const book2 = new Book("1984", author2, "Dystopian Fiction", 15);

console.log("Book 1:");
book1.getBookInfo();
console.log("\nBook 2:");
book2.getBookInfo();