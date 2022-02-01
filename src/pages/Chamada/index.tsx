import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Container, Lista, Bg  } from './styles'

import { errorfulNotify } from '../../hooks/SystemToasts';

import api from '../../services/api';

/**
 * Tela para realizar chamada dos alunos
 */

interface IAlunos {
  matricula: number;
  nome: string;
}

interface IChamada {
  nome: string;
  status: boolean;
}

let chamada = [
  {
    nome: "",
    status: false
  }
]

const Chamada: React.FC = () => {
  const [alunos, setAlunos] = useState<IAlunos[]>([]);

  const handleAlunos = async() => {
    try {
      await api.get<IAlunos[]>(`alunos`)
      .then((response) => {
        setAlunos(response.data);

        chamada.pop();

        response.data.map(aluno => chamada.push({
          nome: aluno.nome,
          status: false
        }))})
      .catch(() => errorfulNotify("Não foi possível encontrar os alunos."));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleAlunos();
  }, []);

  const enviarChamada = async() => {
    try {
      await api.put<IChamada[]>(`chamadas`, chamada);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <Bg>
        <Container>
          <div id="menu">
            <Link to={"/"}>
              <button>Voltar</button>
            </Link>
            <h1>Chamada</h1>
          </div>
          <Lista>
            <div id="table">
              <h1>Nome</h1>
              <h2>Presente</h2>
            </div>
            {
              alunos && alunos.length ?
                alunos.map((aluno, index) => (
                  <div id="lista" key={aluno.matricula}>
                    <p>{aluno.nome}</p>
                    <input type="checkbox" name="true" id={`true${index}`} onChange={() => {
                      for (let i = 0; i < chamada.length; i ++) {
                        if (chamada[i].nome === aluno.nome) {
                          chamada[i].status = !chamada[i].status;

                          return;
                        }
                      }
                    }} />
                  </div>
                ))
              : ''
            }
            <button id="sendBtn" onClick={enviarChamada} >Enviar</button>
          </Lista>
        </Container>
      </Bg>
    </>
  );
};

export default Chamada;