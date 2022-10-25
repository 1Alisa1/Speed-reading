import { Link } from 'react-router-dom';

interface CardProps {
  img: string;
  title: string;
  text: string;
  path: string;
  btnText: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="letters"></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={props.path} className="card-button btn btn-prim">
          {props.btnText}
        </Link>
      </div>
    </div>
  );
}

export default Card;
