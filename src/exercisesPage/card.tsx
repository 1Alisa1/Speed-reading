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
    <div className="card card-size">
      <img src={props.img} className="card-img-top" alt="letters"></img>
      <div className="card-body ">
        <h5 className="card-title noto-sans-600">{props.title}</h5>
        <p className="card-text noto-sans-400">{props.text}</p>
        <Link to={props.path} className="card-button btn btn-prim noto-sans-400">
          {props.btnText}
        </Link>
      </div>
    </div>
  );
}

export default Card;
