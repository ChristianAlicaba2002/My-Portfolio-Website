import { Link } from "react-router-dom"
export function Header(){

    return( 
            <>
                <header className="header">
                    <nav>
                        <h1>Chris </h1>
                        <div className="navigation">
                            <ul>
                                <li>
                                    <Link className="Home" to="/" >Home</Link>
                                </li>

                                <li>
                                    <Link className="Project" to="/Project">Projects</Link>

                                </li>

                                <li>
                                    <Link to="/Gallery">Gallery</Link>
                                </li>

                                <li>
                                    <Link className="Contact" to="/Contact">Contact</Link> 
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </header>
            </> 
    )
}