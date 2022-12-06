import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.js';
import Layout from './pages/Layout.js';
import Public from './pages/Public.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Bookstore</h1>
            </header>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Public/>}/>
                    <Route path="admin" element={<Admin/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
            <footer>
                <p>My name</p>
            </footer>
        </div>
    );
}

export default App;
