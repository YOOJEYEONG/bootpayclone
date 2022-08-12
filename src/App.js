import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainPage from "./pages/Main/MainPage";



function App() {
    return (
        <div className="App">
            <Header />
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                </Routes>
            <Footer />
        </div>
    );
}

export default App;
