import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome/Welcome";
import Game1 from "./Components/Game1/Game1";
import Game2 from "./Components/Game2/Game2";
import Game3 from "./Components/Game3/Game3";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Game1" element={<Game1 />} />
                <Route path="/Game2" element={<Game2 />} />
                <Route path="/Game3" element={<Game3 />} />
            </Routes>
        </>
    );
}
export default App;

