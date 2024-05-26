import "./searchBar.scss";

export default function SearchBar({ setIsValidated, isValidated, setArtistName }) {



    function validate(e) {
        e.preventDefault();

        setArtistName(e.target[0].value); // will store the name of the artist in a state (App.jsx);

        setIsValidated(true); // sets the validation state to true (App.jsx) => will have to check if the API returns 200;
    }; // function that will check if we have the results of the API (for the moment we only have the validation of the form);

    return (

        <form id="input_container" onSubmit={validate}>
            <input placeholder="artist name" type="text" className={isValidated ? "validated" : "pending"} id="searchBar"/>
        </form>

    )

}