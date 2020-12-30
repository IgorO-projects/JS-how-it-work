const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
  oldNameIndex = this.books.indexOf(oldName);
	this.books.splice(oldNameIndex, 1, newName);
	return this.books;
    // Пиши код выше этой строки
  },
};
const result1 = bookShelf.updateBook('Мгла', 'Хроники подземелий');
console.log(result1);
const result2 = bookShelf.updateBook('Последнее королевство', 'Дюна');
console.log(result2);

console.log(result1 === result2); // TRUE!!!