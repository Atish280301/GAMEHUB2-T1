import React from "react";
import '../Welcome/Welcome.css';
import { Link } from "react-router-dom";
const Welcome = () => {
    return (
        <>
            <div className="HD">
                <h1 className="HDH1">Game Hub: Puzzle & Play 2.O</h1>
            </div>
            <div className="ONE">
                <h2 className="ONEH2">Welcome To</h2>
                <h2 className="ONEH22">Game Hub: Puzzle & Play 2.O</h2>
            </div>
            <div className="TWO">
                <h2 className="ONEH2">About Game Hub 2.O</h2>
                <p className="TWOP">
                    Introducing <b>Game Hub: Puzzles & Play 2.O</b>—an enhanced gaming sanctuary for enthusiasts, now powered by React JS. This upgraded version features new addictive games, meticulously crafted for seamless play across all devices. Highlights include the <b>2048 Game</b>, testing your strategic skills by merging tiles; the <b>Word Scramble Game</b>, challenging your vocabulary and speed; and the <b>Dice Game</b>, offering dynamic excitement. Improve your typing with the <b>Typing Speed Test Game</b>, sharpen your memory with the <b>Memory Card Game</b>, and enjoy timeless fun with the <b>Hangman Game</b>. Puzzle enthusiasts will love the <b>15 Puzzle Game</b> and the <b>Sliding Puzzle Game</b>.  What sets <b>Game Hub: Puzzles & Play 2.O</b> apart is its modern React JS development, ensuring a responsive, immersive experience on desktop, mobile, tablet, and laptop. Dive into <b>Game Hub: Puzzles & Play 2.0</b> and enjoy endless hours of entertainment with cutting-edge technology and captivating pixel art.
                </p>
            </div>
            <div className="TWO">
                <h2 className="ONEH2">About Author</h2>
                <p className="TWOP">
                    Greetings! I'm Atish Kumar Sahu, a dedicated Full-Stack Software & Web Developer from Berhampur, Odisha, India. With a B.Tech in Computer Science Engineering from Parala Maharaja Engineering College (2022), I've honed my skills in Java, Web Development (HTML, CSS, JavaScript), Frontend (React, Next, Vue), Backend (Node, Express), and Databases (MongoDB, MySQL). I have experience as a Junior Application Developer at Pantheon Inc (June 2022 to October 2022). I seek challenging roles to fuel my passion for continuous learning and innovation, making me a valuable asset to dynamic teams.
                </p>
            </div>
            <div>
                <h2 className="ONEH2">Work Sample</h2>
                <div className="GMLST">
                    <Link to="/Game1" className="LCH">Password Create Game</Link>
                    <Link to="/Game2" className="LCH">Puzzle Sliding Game</Link>
                    <Link to="/Game3" className="LCH">Typing Speed Game</Link>
                    <Link to="/Game4" className="LCH">Memory Card Game</Link>
                </div>
            </div>
        </>
    );
}
export default Welcome;