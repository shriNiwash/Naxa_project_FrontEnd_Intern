import React from "react";
import {Links} from './data';
const Navbar= (e)=>{
    return(
        <nav className="navbarsticky">
            <div className="center">
                <div>
                    {Links.map((Link)=>{
                        return(
                            <a href={Link.url} key={Link.id}>{Link.text}</a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;