import './App.css';
import 'normalize.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Palette from "./Pages/Palette";
import Home from "./Pages/Home"


function App() {
    return (
        <>
            <img src={require("./assets/ezgif-2-30aa04409b.gif")} alt=""/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path={"/palette/:nameId"} element={ <Palette/> }/>
                    <Route path="*" element={ <Home/> }/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
