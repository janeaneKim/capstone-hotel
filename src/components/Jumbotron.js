import React from "react"

export default function Jumbotron({children, jumbotron}){
    return (
        <header className={jumbotron}>
            {children}
        </header>
    )
}
