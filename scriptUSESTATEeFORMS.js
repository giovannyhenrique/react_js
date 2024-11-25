import {useState} from 'react';

function App(){
    
    const [nome, setNome] = useState('');//useState referece ao valor que desejamos que aquela variavel comece, e depois como podemos alterar esse valor para manipulação
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);

    const [user, setUser] = useState({});

    function handleRegister(e){
        e.preventDefault();//Elimina o recarregamento da pagina ao submeter o formulario

        setUser(
            {
                nome:nome,
                email:email,
                idade:idade,
            }
        )
    }

    return(
        <div>
            <foms onSubmit={handleRegister}>
                <label>Nome:</label><br/>
                <input placeholder="Digite seu nome"
                value={nome}
                onChanhe={ (e) => setNome(e.target.value)}
                /><br/>

                <label>Idade:</label><br/>
                <input placeholder="Digite sua idade"
                value={idade}
                onChanhe={ (e) => setIdade(e.target.value)}
                /><br/>

                <label>Email:</label><br/>
                <input placeholder="Digite seu email"
                value={email}
                onChanhe={ (e) => setEmail(e.target.value)}
                /><br/>

                <button type="submit">Registrar</button>
            </foms>

            <br/><br/>

            <div>
                <span>Bem vindo: {user.nome}</span>
                <span>Idade: {user.idade}anos</span>
                <span>Email: {user.email}</span>
            </div>
        </div>
    );
}

export default App;