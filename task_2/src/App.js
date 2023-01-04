import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Features from './Components/Pages/Features/Features';
import Error from './Components/Pages/Error/Error';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="features" element={<Features/>}/>
                    { /* <Route path="pricing" element={<Pricing/>}/> */ }
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
