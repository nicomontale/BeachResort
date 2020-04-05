import React from 'react'

Hero.defaultProps ={
hero: "defaultHero"
}
export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
