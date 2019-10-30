import React from "react"



function Card(props){
    return(
        <div className="card" onClick={()=>props.isClicked(props.id)}>
            <div className="img-container" data-id={props.id}>
                <img alt={props.name} src={props.image}/>

            </div>
        </div>
    )
}
export default Card