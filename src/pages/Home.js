import React from 'react'

export default function Home(props) {
    const handleClick = (event) => {
        props.history.push('/about')
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Go to About</button>
        </div>
        
        
    )
}
