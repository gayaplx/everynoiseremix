import React, { useState, useTransition } from "react";

// COMPONENTS
import SearchBar from "./components/searchBar/searchBar";
import Title from "./components/title/title";
// COMPONENTS

// STYLESHEET
import "./globalStyles.scss";
// STYLESHEET

export default function App() {
  // STATES
  const [isValidated, setIsValidated] = useState(false); // state that will check if the input values are valid (will have to check if the API returns 200);
  const [artistName, setArtistName] = useState(""); // state that stores the name of the artist that we want to find;
  // STATES

  return (
    <section id="mainContainer">
      <div id="searchBarContainer">
        <Title artistName={artistName} />
        <SearchBar
          setIsValidated={setIsValidated}
          isValidated={isValidated}
          setArtistName={setArtistName}
        />
      </div>
    </section>
  );
}
