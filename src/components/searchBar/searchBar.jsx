import "./searchBar.scss";

import { useEffect } from "react";

export default function SearchBar({
  setIsValidated,
  isValidated,
  setArtistName,
  artistName,
  accessToken,
  setGenres,
}) {
  async function getArtistGenres() {
    // console.log("ready to fetch with this api token : " + accessToken) // OK

    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // console.log(artistParams) // OK
    // console.log(artistName + " artist name") // OK

    let artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
      artistParams
    ) //
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setIsValidated(true);
        setGenres(data.artists.items[0].genres); // isolating the genres and put into the genres state
        // console.log(data.artists.items[0].genres) // OK
      });
  }

  useEffect(() => {
    if (artistName.length > 0) {
      // checks if the artist name isn't null to avoid calling the API for nothing
      getArtistGenres();
    }
  }, [artistName]); // waits for the artistName state to be set before to run the getArtistGenres function

  function handleValidate(e) {
    e.preventDefault();

    setArtistName(e.target[0].value); // will store the name of the artist in a state (App.jsx);
  }

  return (
    <form id="input_container" onSubmit={handleValidate}>
      <input
        placeholder="artist name"
        type="text"
        className={isValidated ? "validated" : "pending"}
        id="searchBar"
      />
    </form>
  );
}
