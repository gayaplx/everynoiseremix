import './title.scss'

export default function Title({ artistName }) {

    // console.log(artistName)

    return (
        <h1 id="title">
            {artistName.length > 0 ? artistName : "title"}
        </h1>
    )

}