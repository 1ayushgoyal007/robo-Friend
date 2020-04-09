import React from "react";

var Scroll = (props) => {
    return (
        <div style={{overflow:'scroll',border:'3px solid black',height:'478px'}} >
            {props.children}
        </div>
    )
}

export default Scroll;