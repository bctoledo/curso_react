import { Link } from "react-router-dom"
import "./menu.css"
export function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="#">Cadastro</Link>
                </li>
                <li>
                    <Link href="#">Registro</Link>
                </li>
                <li>
                    <Link href="#">Login</Link>
                </li>
            </ul>

        </nav>
    )
}