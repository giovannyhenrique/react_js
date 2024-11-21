import {useState} from 'react';

function App(){
    const [aluno, setAluno] = useState('Sujeito Programador')

    function hanleName(nome){
        setAluno(nome);
    }

    return(
        <div>
            <h1>Componente App</h1>
            <h2> Olá: {aluno}</h2>
            <Nome aluno = "Lucas" idade={30}/>
            <button onclick={ () => hanleName('Aluno Aprendizado')}>
                Mudar Nome
            </button>
        </div>
    );
}