import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>About Page</h2>
            {props.match.params.id}
            {props.match.params.name}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque architecto dolor blanditiis dolorem omnis cum. Ratione a reiciendis magni in.</p>
        </div>
    )
}
