
class BookModel {

    #bookList = [];

    constructor(books) {
        this.#bookList = books;
    }

    getBooks() {
        return this.#bookList;
    }

    findItem(id) {
        let itemNum = 0
        while (itemNum < this.#bookList.length && this.#bookList[itemNum].id !== id) {
            itemNum++;
        }
        if (this.#bookList.length === itemNum) {
            return false;
        }
        else {
            return itemNum
        }
    }

    editBook(data) {
        console.log("edit " + data.title);
        
        let itemIndex = this.findItem(data.id);
        if (itemIndex === false) {
            data.amount = 1;
            this.#bookList.push(data);
        }
        else {
            this.#bookList[itemIndex].amount++;
        }
    }

    removeBook(data) {
        console.log("remove " + data.title);
        
        let itemIndex = this.findItem(data.id);
        if (itemIndex !== false) {
            this.#bookList.splice(itemIndex, 1);
        }
    }
}

export default BookModel;