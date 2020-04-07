import React from 'react';



const Card =({name , email , id})=>{
    return (
        <div className="tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow-4" >
            <img alt="photo" src = {`https://robohash.org/${id}?250*250`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;