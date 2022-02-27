
const Pub = (props) => {
  return (
      <li>
        <span>{props.pub.title}, ({props.pub.city}) - {props.pub.rating}</span>
        <button onClick={() => {props.onRating(props.pub.id)}}>like</button>
      </li>
  )
}

export default Pub
