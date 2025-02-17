import { useState } from "react"

export function State1(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function inserir1(e){
        e.preventDefault();
        alert(nome);
    }

    function inserir2(e){
        
        alert('Funcao2');
    }
    
    return(
        <div className="container">
            <h1 className="mt-5 mb-5">State 1</h1>

            <form onSubmit={inserir1}>
                <div className="row">
                    <div className="col">
                        <input 
                        type="text"
                        value={nome}
                        className="form-control"
                        placeholder="nome"
                        onChange={e => setNome(e.target.value)}

                    />

                    </div>
                    <div className="col">
                        <input 
                        type="email"
                        value={email}
                        className="form-control"
                        placeholder="@email"
                        onChange={e => setEmail(e.target.value)}

                    />
                    </div>
                </div>

                <button className="btn btn-outline-primary mt-3 mb-3" type="submit">Salvar</button>


            </form>
            <p className="alert bg-primary"> {nome} - {email} </p>
        </div>
    )
}