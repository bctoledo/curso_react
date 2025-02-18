import { useState } from "react"
import "./registro.css"

export function Registro(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const [sexo,setSexo] = useState('')
    const [senha,setSenha] = useState('')
    const [senhaC,setSenhaC] = useState('')

    const salve = (e) => {
        e.preventDefault()

        if( nome === ''){
            alert('Por favor preencher o campo nome')
        } else if( email === ''){
            alert('Por favor preencher o campo email')
        } else if( telefone === ''){
            alert('Por favor preencher o campo telefone')
        } else if( sexo === ''){
            alert('Por favor preencher o campo sexo')
        } else if( senha === ''){
            alert('Por favor preencher o campo senha')
        } else if( senhaC === ''){
            alert('Por favor preencher o campo confirmar senha')
        } else {
            alert('Seja bem-vindo')
        }

    }  

    return(
        <main className="container">
            <h1 className="mt-4">Registro</h1>

            <form onSubmit={salve}>
                <div className="row mt-5">
                    <div className="col">
                        <input type="text" 
                            placeholder="nome"
                            className="form-control"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input type="text" 
                            placeholder="e-mail" 
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input type="text" 
                            placeholder="telefone"
                            className="form-control"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="col">
                            <select className="form-control" value={sexo} onChange={e=> setSexo(e.target.value)}>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="password" 
                                placeholder="senha"
                                className="form-control"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input type="password" 
                                placeholder="confirmar senha"
                                className="form-control"
                                value={senhaC}
                                onChange={e => setSenhaC(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">Cadastrar</button>
                <button className="btn btn-warning">Cancelar</button>
            </form>
        </main>
    )
}