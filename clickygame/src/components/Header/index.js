import React from "react"

function Header (props){
    return(
    <nav className="navbar fixed-top">
        <span>score:{props.score}| High Score: {props.highscore}</span>
    </nav>
    )
}

export default Header