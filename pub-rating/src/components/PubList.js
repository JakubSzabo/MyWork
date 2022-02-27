import Pub from "./Pub"

const PubList = (props) => {
  

  return (
    <ol>
      {props.pubs.sort((a,b) => b.rating - a.rating).map( (pub) => (<Pub pub={pub} onRating={props.onRating} />))}
    </ol>
  )
}

export default PubList
