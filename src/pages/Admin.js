import { useState } from 'react';
import '../components/public/Book.css';
import AdminBook from '../components/admin/AdminBook.js';
import bookList from './Public';
import BookModel from '../components/admin/BookModel';


function Admin() {
    // state
    const [bookListState, setBookList] = useState([]);
    const bookModel = new BookModel(bookList);

    function bookUpdate() {
        setBookList(bookModel.getBooks());
    }

    function pressEdit(data) {
        bookModel.editBook(data);
        bookUpdate();
    }

    function pressDel(data) {
        bookModel.removeBook(data);
        bookUpdate();
    }

    return (
        <article>
            <table className="books">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bookListState.map((book, x) => {
                        return (<AdminBook bookObj={book} key={x} editButton={pressEdit} delButton={pressDel}/>)
                    })}
                </tbody>
            </table>
        </article>
    );
}

export default Admin;
