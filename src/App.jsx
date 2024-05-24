import React from "react";

import SearchBar from "./components/searchBar/searchBar";
import Title from './components/title/title';



import "./globalStyles.scss"

export default function App() {
    return (
        <section id="body">
                <Title />
                <SearchBar />
        </section>
    )
}