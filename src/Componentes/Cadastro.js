import { useState, useEffect } from "react";

function Cadastro() {
    const [input, setInput] = useState("");
    const [tarefa, setTarefa] = useState([]);
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [corFundo, setCorFundo] = useState("white");

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa');
        if (tarefasStorage) {
            setTarefa(JSON.parse(tarefasStorage));
        }

        const nomeSalvo = localStorage.getItem('@nomeUsuario');
        if (!nomeSalvo) {
            const nome = prompt("Qual é o seu nome?");
            if (nome) {
                setNomeUsuario(nome);
                localStorage.setItem('@nomeUsuario', nome);
            }
        } else {
            setNomeUsuario(nomeSalvo);
        }

        const corSalva = localStorage.getItem('@corFundo');
        if (corSalva) {
            setCorFundo(corSalva);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefa));
    }, [tarefa]);

    function handleRegistro(e) {
        e.preventDefault();
        if (input.trim()) {
            setTarefa([...tarefa, input]);
            setInput("");
        }
    }

    function handleCorChange(e) {
        const novaCor = e.target.value;
        setCorFundo(novaCor);
        localStorage.setItem('@corFundo', novaCor);
    }

    return (
        <div style={{ backgroundColor: corFundo, minHeight: "100vh", padding: "20px" }}>
            <h1>{nomeUsuario && `${nomeUsuario}, sua lista de tarefas`}</h1>
            <br />
            <form onSubmit={handleRegistro}>
                <label>Nome tarefa:</label>
                <br />
                <input type="text" placeholder="Digite a tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
                <br /><br/>
                <button type="submit">Cadastrar</button>
            </form>
            <br />
            <ul>
                {tarefa.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
            <br />
            <div>
                <h3>Escolha a cor de fundo:</h3>
                <label>
                    <input type="radio" name="cor" value="white" checked={corFundo === "white"} onChange={handleCorChange} /> Branco
                </label>
                <label>
                    <input type="radio" name="cor" value="lightblue" checked={corFundo === "lightblue"} onChange={handleCorChange} /> Azul Claro
                </label>
                <label>
                    <input type="radio" name="cor" value="lightgreen" checked={corFundo === "lightgreen"} onChange={handleCorChange} /> Verde Claro
                </label>
                <label>
                    <input type="radio" name="cor" value="black" checked={corFundo === "black"} onChange={handleCorChange} /> Preto
                </label>
            </div>
        </div>
    );
}

export default Cadastro;