import {useState} from 'react';

function App(){
    
    const [input, setInput] = useState('');//useState referece ao valor que desejamos que aquela variavel comece, e depois como podemos alterar esse valor para manipulação
    const [tarefas, setTarefas] = useState([
        'Pagar a conta de luz',
        'Pagar a conta de água'
    ]);//useState referece ao valor que desejamos que aquela variavel comece, e depois como podemos alterar esse valor para manipulação

    function handleRegister(e){
        e.preventDefault();//Elimina o recarregamento da pagina ao submeter o formulario
        setTarefas([...tarefas, input]);// Usa Spreed Operator para incluir todas as tarefas já salvas anteriormente, e puxar a nova tarefa cadastrada
        setInput(''); // Reseta o campo que o usuario havia preenchido para adicionar uma tarefa

    }

    return(
        <div>
            <foms onSubmit={handleRegister}>
                <label>Taefas:</label><br/>
                <input placeholder="Digite uma tarefa"
                value={input}
                onChanhe={ (e) => setInput(e.target.value)}
                /><br/>

                <button type="submit">Registrar</button>
            </foms>

            <br/><br/>

            <ul>
                {tarefas.map( tarefa => (
                    <li key={tarefa}> {tarefa} </li>
                ))}
            </ul>

        </div>
    );
}

export default App;