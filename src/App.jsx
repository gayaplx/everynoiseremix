import React, { useState, useTransition } from "react";


// COMPONENTS
import SearchBar from "./components/searchBar/searchBar";
import Title from './components/title/title';
// COMPONENTS


// STYLESHEET
import "./globalStyles.scss"
// STYLESHEET


export default function App() {


    // STATES
    const [isValidated, setIsValidated] = useState(false);
    const [artistName, setArtistName] = useState("");
    // STATES


    return (
        <section id="mainContainer">
            <div id="searchBarContainer">
                <Title artistName={artistName} />
                <SearchBar setIsValidated={setIsValidated} setArtistName={setArtistName} />
            </div>
        </section>
    )
}