import React, { useEffect, useState } from "react";
import env from "react-dotenv"; 
// COMPONENTS
import SearchBar from "./components/searchBar/searchBar";
import Title from "./components/title/title";
import Results from "./components/results/results";
// COMPONENTS

// FUNCTIONS
// import APIFetcher from "./services/APIfetcher";
// FUNCTIONS

// STYLESHEET
import "./globalStyles.scss";
// STYLESHEET


export default function App() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
  // STATES
  const [isValidated, setIsValidated] = useState(false); // state that will check if the input values are valid (will have to check if the API returns 200);
  const [artistName, setArtistName] = useState(""); // state that stores the name of the artist that we want to find;
  const [accessToken, setAccessToken] = useState("");
  const [genres, setGenres] = useState([])
  // STATES

  useEffect(() => { // will generate an access token for the Spotify API
    var authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
  
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((results) => results.json())
      .then((data) => {
        setAccessToken(data.access_token) // sets the accessToken state with the result of the API call
      });
  }, [])


  return (
    <section id="mainContainer">
      <div id="searchBarContainer">
        <Title artistName={artistName} />
        <SearchBar
          setIsValidated={setIsValidated}
          isValidated={isValidated}
          setArtistName={setArtistName}
          artistName={artistName}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setGenres={setGenres}
        />
      </div>
      <Results artistName={artistName} isValidated={isValidated} setAccessToken={setAccessToken} accessToken={accessToken} genres={genres} />
    </section>
  );
}
