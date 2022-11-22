import './App.css';
import Book from './Book/Book.js';

const bookList = [
    {
        title: "booo",
        author: "auaua",
        price: 1
    },
    {
        title: "b22",
        author: "vmi",
        price: 45
    },
    {
        title: "bbbbbb",
        author: "uuto",
        price: 656565
    }
]

function App() {
    
    function manageBasket(data) {
        console.log(data.title);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Könyváruház</h1>
            </header>
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
                            return (<Book bookObj={book} key={x} basketManager={manageBasket}/>)
                        })}
                    </tbody>
                </table>
            </article>
            <footer>
                <p>My name</p>
            </footer>
        </div>
    );
}

export default App;
