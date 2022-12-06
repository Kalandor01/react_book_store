import '../public/Book.css';

function AdminBook(args) {

    function clickEdit() {
        args.basketBuy(args.clickEdit);
    }

    function clickDel() {
        args.basketBuy(args.clickDel);
    }

    return (
        <tr className="book">
            <td><h3 className="bookTitle">{args.bookObj.title}</h3></td>
            <td><p className="bookAuthor">{args.bookObj.author}</p></td>
            <td><p className="bookPrice">{args.bookObj.price}Ft</p></td>
            <td><button onClick={clickEdit}>Edit</button></td>
            <td><button onClick={clickDel}>Delete</button></td>
        </tr>
    );
}

export default AdminBook;
