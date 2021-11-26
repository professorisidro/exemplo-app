import React from "react";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Corpo from "./componentes/Corpo";
import Detail from "./componentes/Detail";
import List from "./componentes/List";

class App extends React.Component {
    render() {
        return (
            <div>

                <div id="conteudo">
                    <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Corpo/>} />
                        <Route path="/detalhes" element={<Detail/> } />
                        <Route path="/lista" element={<List/>} />
                    </Routes>
                    </BrowserRouter>
                </div>
                <Footer />

            </div>
        );
    }
}
export default App;