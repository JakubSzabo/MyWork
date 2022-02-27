import {useState} from "react";

const PubForm = (props) => {

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    props.onAdd( {title, city, rating} );
    setTitle("")
    setCity("")
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="pub-title">Názov</label>
        <input id="pub-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="pub-city">Mesto</label>
        <input id="pub-city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
      </div>
      <input type="submit" value="Pridaj"/>
    </form>
  )
}

export default PubForm
