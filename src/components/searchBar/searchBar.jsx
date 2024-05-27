import "./searchBar.scss";

// import APIFetcher from "../../services/APIfetcher";
import { useEffect, useState } from "react";



export default function SearchBar({
  setIsValidated,
  isValidated,
  setArtistName,
  artistName,
  accessToken,
  setAccessToken,
  setGenres,
}) {

  async function getArtistId() {
    // console.log("ready to fetch with this api token : " + accessToken) // OK
    
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    }

    // console.log(artistParams) // OK
    // console.log(artistName + " artist name")

    let artistID = await fetch("https://api.spotify.com/v1/search?q=" + artistName + "&type=artist", artistParams)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setIsValidated(true)
        setGenres(data.artists.items[0].genres)
        // console.log(data.artists.items[0].genres) // OK
      })

  }

  useEffect(() => {
    if(artistName.length > 0) {
      getArtistId();
    }
  }, [artistName])

  function validate(e) {
    e.preventDefault();

    setArtistName(e.target[0].value); // will store the name of the artist in a state (App.jsx);



    // setIsValidated(true); // sets the validation state to true (App.jsx) => will have to check if the API returns 200;
  } // function that will check if we have the results of the API (for the moment we only have the validation of the form);


  return (
    <form id="input_container" onSubmit={validate}>
      <input
        placeholder="artist name"
        type="text"
        className={isValidated ? "validated" : "pending"}
        id="searchBar"
      />
    </form>
  );
}