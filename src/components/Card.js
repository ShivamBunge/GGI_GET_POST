import React from "react";
import  ReactDOM  from "react-dom";
import '../cards.css';
const size={ width: "18rem"};
function Card() {
    return(
    <>
    <div className="cards">
    <div className="card" style={size}>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    </div>
    </>
    )
}
export default Card;