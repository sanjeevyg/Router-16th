import React from 'react'

export default function Home(props) {
    const handleClick = (event) => {
        props.history.push('/about')
    }

    const handleClickContact = (event) => {
        props.history.push('/contact')
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Go to About</button>
            <button onClick={handleClickContact}>Go to Contact</button>
        </div>
        
        
    )
}
