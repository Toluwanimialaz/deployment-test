import React from 'react';


function Card({props}){
    return(
        <div className='wrapper'>
            <div className="card">
                <img src={props.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Character Details</h5>
                    <p className="card-text">Blah Blah</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.name}</li>
                    <li className="list-group-item">{props.height}</li>
                    <li className="list-group-item">{props.race}</li>
                    <li className="list-group-item">{props.gender}</li>
                    <li className="list-group-item">{props.birth}</li>
                    <li className="list-group-item">{props.spouse}</li>
                    <li className="list-group-item">{props.death}</li>
                    <li className="list-group-item">{props.hair}</li>
                    <li className="list-group-item">{props.realm}</li>
                </ul>
                <div className="card-body">
                    <a href={props.wikiUrl} className="card-link">Read more on wiki</a>
                </div>
                </div>
        </div>
    )
}

export default Card