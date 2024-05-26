export default function APIFetcher() {



    // let artist = args;

    // console.log(args)

    fetch("https://cors-anywhere.herokuapp.com/https://everynoise.com/lookup.cgi?who=lou+reed&mode=map")
    .then(res => res.text())
    .then((data) => {

        var parser = new DOMParser();
        var doc = parser.parseFromString(data, "text/html")

        console.log(doc.links[0].childNodes[0].data)
    }
    )
    .catch(err => console.log(err));

};  