import "./content.css"

import { Switch, Route } from "react-router-dom"

import { Cadastro } from "./../../views/Cadastro";
import { Login } from "./../../views/Login";
import { Registro } from "./../../views/Registro";

export function Content(){
    return(
        <main>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/cadastro">
                    <Cadastro/>
                </Route>

                <Route path="/registro">
                    <Registro/>
                </Route>
            </Switch>
        </main>
    )
}