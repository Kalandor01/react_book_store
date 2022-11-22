import './Book.css';

function Book(args) {

    function clickBuy() {
        args.basketManager(args.bookObj);
    }

    return (
        <tr className="book">
            <td><h3 className="bookTitle">{args.bookObj.title}</h3></td>
            <td><p className="bookAuthor">{args.bookObj.author}</p></td>
            <td><p className="bookPrice">{args.bookObj.price}Ft</p></td>
            <td><button onClick={clickBuy}>Buy</button></td>
        </tr>
    );
}

export default Book;
