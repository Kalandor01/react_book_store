import { useState } from 'react';
import '../components/public/Book.css';
import BasketModel from '../components/public/BasketModel.js';
import Book from '../components/public/Book.js';
import Item from '../components/public/Item.js';

const bookList = [
    {
        id: 1,
        title: "booo",
        author: "auaua",
        price: 1
    },
    {
        id: 2,
        title: "b22",
        author: "vmi",
        price: 45
    },
    {
        id: 3,
        title: "bbbbbb",
        author: "uuto",
        price: 656565
    },
    {
        id: 4,
        title: "bb",
        author: "vvv",
        price: 4
    }
]

function Public() {
    // state
    const [bookNum, setBookNum] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [basketList, setBasketList] = useState([]);
    const basketModel = new BasketModel(basketList);

    function basketUpdate() {
        setBookNum(basketModel.getAmount());
        setTotalPrice(basketModel.getTotalPrice());
        setBasketList(basketModel.getBasket());
    }

    function basketBuy(data) {
        basketModel.addItem(data);
        basketUpdate();
    }

    function basketUnbuy(data) {
        basketModel.removeItem(data);
        basketUpdate();
    }

    function basketUnbuyAll(data) {
        basketModel.removeAllItem(data);
        basketUpdate();
    }

    return (
        <article>
            <table className="books">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, x) => {
                        return (<Book bookObj={book} key={x} basketBuy={basketBuy}/>)
                    })}
                </tbody>
            </table>
            <p>Number of books: {bookNum}</p>
            <p>Total price: {totalPrice}</p>
            {
                basketList.length > 0 ?
                (
                    <table className="books">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Unbuy</th>
                                <th>Remove all</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basketList.map((item, x) => {
                                return (<Item itemObj={item} key={x} basketUnbuy={basketUnbuy} basketUnbuyAll={basketUnbuyAll}/>)
                            })}
                        </tbody>
                    </table>
                )
                : ""
            }
        </article>
    );
}

export default {Public, bookList};
