import React from "react";

function Note(e){
    return(
        <div className="note">
            <h1>{e.title}</h1>
            <p> {e.content} </p>
        </div>
    )
}

export default Note