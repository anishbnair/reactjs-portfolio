import React from 'react'
import avatar from './'

function Navbar() {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={avatar} alt=""/>

            </div>

        </div>
    )
}

export default Navbar

