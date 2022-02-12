import React from "react"

export default function Header(){
    return(
        <header>
            <h1>Rambla</h1>
            <nav id="menu">
                <ol id="menu-links-group">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Catálago</a>
                    </li>
                    <li>
                        <a href="#">Materiales</a>
                    </li>
                    <li>
                        <a href="#">Ideas</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ol>
            </nav>
        </header>
    )
}