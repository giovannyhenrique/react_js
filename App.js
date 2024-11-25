import React, {useEffect, useState} from 'react';
import './style.css';
// //https://sujeitoprogramador.com/rn-api/?api=posts



function App(){

    const [nutri, setNutri] = useState([]);
    useEffect(()=>{
        function loadApi(){
            let url = 'https:\/\/sujeitoprogramador.com\/nutriapp\/wp-content\/uploads\/2017\/12\/Screenshot_3-2.jpg';
            
            fetch(url)//Verifica se a requisão na url deu certo
            .then((r)=> r.json())//converte o retorno para json
            .then((json)=>{//Caso a conversão dê certo, recebemos o json
                console.log(json);
                setNutri(json)

            })
        }

        loadApi();
    }, [nutri])
    return(
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>
            {nutri.map((item)=>{
                return(
                    <article key={item.id} className="post">
                        <strong className="titulo">{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} className="capa"/>
                        <p className="subtitulo">
                            {item.subtitulo}
                        </p>
                        <a className="botao">Acessae</a>
                    </article>
                )
            })}
        </div>
    );
}

export default App;