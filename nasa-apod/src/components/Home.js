import React from 'react'
import {Link} from 'react-router-dom';
import Tilt from 'react-parallax-tilt';


const Home = () => {
    return (
        <Tilt>
            <div style={{height: '300px', backgroundColor: "##b61924"}}>
           
                <h1><Link to="/nasaphoto">Look into the Stars</Link></h1> 
            </div>
        </Tilt>
        
    )
}

export default Home
