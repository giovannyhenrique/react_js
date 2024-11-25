import {useState, useEffect} from 'react';

function App(){
    
    const [input, setInput] = useState('');//useState referece ao valor que desejamos que aquela variavel comece, e depois como podemos alterar esse valor para manipulação
    const [tarefas, setTarefas] = useState([
        'Pagar a conta de luz',
        'Pagar a conta de água'
    ]);//useState referece ao valor que desejamos que aquela variavel comece, e depois como podemos alterar esse valor para manipulação

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefas'); // Busca as tarefas salvas no localStorage identificado pela chave
        if(tarefasStorage){//Verifica se há alguma tarefa
            setTarefas(JSON.parse(tarefasStorage))//Salva a nova tarefa no array de tarefas convertendo a string para array
        }
    }, []);

    useEffect(() => {//Quando a pagina no navegador com o nosso componente é iniciada o useEffect é executado.
        localStorage.setItem(//A atividade do useEffect será armazenar um item
            "@tarefa", //Fornecendo uma key
            JSON.stringify(tarefas)) // Passando um array para ser salvo no localStorage.(O array não pode ser salvo, por isso, passamos em JSON e convertemos para string)
    }, [tarefas]);//Caso o array esteja preenchido, toda vez que o useState tarefas for editado, o useEffect será executado.

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
, useEffect
export default App;