import './hero.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return ( 
        <div id="hero" className="my-60 text-left ">
            <div className="introduction text-5xl md:text-6xl my-12">
                <p><span className="wave">👋</span> Hello!I'm Zaid.</p>
            </div>
            <div className="role my-12">
                <h1>Designer.</h1>
                <h1>Developer.</h1>
            </div>
            <div className="role-details text-5xl md:text-6xl mb-16">
                <p className="mb-16">I enjoy building <span>usable</span>, <span>accesible</span> , and <span>aesthetically pleasing</span> websites to provide a generally pleasing user experience</p>
                < Link to="/work" className="link projects  relative no-underline inline-block mr-8">View projects</Link> or <Link to="/about" className="link more-info relative inline-block no-underline ml-8">Find out more</Link>
            </div>
        </div>        
     );
}
 
export default Hero;

