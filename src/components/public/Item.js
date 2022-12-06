import './Book.css';

function Item(args) {

    function clickUnbuy() {
        args.basketUnbuy(args.itemObj);
    }

    function clickUnbuyAll() {
        args.basketUnbuyAll(args.itemObj);
    }

    return (
        <tr className="book">
            <td><h3 className="bookTitle">{args.itemObj.title}</h3></td>
            <td><p className="bookAuthor">{args.itemObj.author}</p></td>
            <td><p className="bookPrice">{args.itemObj.price}Ft</p></td>
            <td><p className="bookAmount">{args.itemObj.amount}</p></td>
            <td><button onClick={clickUnbuy}>Unbuy</button></td>
            <td><button onClick={clickUnbuyAll}>Remove all</button></td>
        </tr>
    );
}

export default Item;
