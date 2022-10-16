import {
    Link,
} from 'react-router-dom';

function Card (props:any) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="letters"></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link to={props.path} className="btn btn-primary">{props.btnText}</Link>
            </div>
        </div>
    );  
}

export default Card;