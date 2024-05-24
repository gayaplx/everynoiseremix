import React from "react";


// COMPONENTS
import SearchBar from "./components/searchBar/searchBar";
import Title from './components/title/title';
// COMPONENTS


// STYLESHEET
import "./globalStyles.scss"
// STYLESHEET


export default function App() {
    return (
        <section id="body">
                <Title />
                <SearchBar />
        </section>
    )
}