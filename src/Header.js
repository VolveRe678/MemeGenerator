import React from 'react'

function Header(){
    return(
        <header>
            <img 
                src= "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt = "Problem?"
                style= {{width: "200px", height: "auto", padding:"20px", position:"absolute"}}
            />
            <p style={{fontSize:"100px", margin: "25px auto"}}>Meme Generator</p>
        </header>
    )
}

export default Header