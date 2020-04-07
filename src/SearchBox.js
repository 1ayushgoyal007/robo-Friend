import React from "react";

const SearchBox = ({searchfield,searchChange}) =>{
    return (
        <div className=" pa2" >
        <input className="pa3 ba b--blue bg-lighest-blue" type = "text" placeholder ="Search Robots" onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;