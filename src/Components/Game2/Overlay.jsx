import React from "react";
import '../Game2/Game2.css';
const Overlay = () => new Array (16).fill().map((index, i) => {
    return <div key={i} className="overlay" />
})
export default Overlay;