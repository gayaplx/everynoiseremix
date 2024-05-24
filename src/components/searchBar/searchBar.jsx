import { useState } from "react";

import "./searchBar.scss";

export default function SearchBar() {

    const [isValidated, setIsValidated] = useState(false); // state that will check if the form is validated (will have to set to true when we have the results of the API)

    function validate(e) {
        e.preventDefault();

        setIsValidated(true);
    }; // function that will check if we have the results of the API (for the moment we only have the validation of the form);

    return (

        <form id="input_container" onSubmit={validate}>
            <input placeholder="artist name" type="text" className={isValidated ? "validated" : "pending"} id="searchBar"/>
        </form>

    )

}