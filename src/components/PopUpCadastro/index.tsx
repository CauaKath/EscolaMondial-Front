import React from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify, successfulNotify } from '../../hooks/SystemToasts';

import api from '../../services/api';

/**
 * PopUp de cadastro de novos alunos
 */

interface IAluno {
  matricula: number;
  nome: string;
  nascimento: string;
}

interface IPopupVerbaCadastro {
  fechar: () => void;
}

let aluno: IAluno = {
  matricula: 0,
  nome: "",
  nascimento: ""
}

const Cadastro: React.FC<IPopupVerbaCadastro> = ({ fechar }) => {
  const handleMatricula = (event: React.ChangeEvent<HTMLInputElement>) => {
    aluno.matricula = Number(event.target.value);
  }

  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    aluno.nome = event.target.value;
  }

  const handleNascimento = (event: React.ChangeEvent<HTMLInputElement>) => {
    aluno.nascimento = event.target.value;
  }

  async function cadastrarAluno() {
    try {
      await api.post<IAluno>(`alunos`, aluno)
      .then(() => {
        successfulNotify("Aluno cadastrado com sucesso");
        fechar();
      })
      .catch((error) => errorfulNotify(error.response.data.titulo));
    } catch(e) {
      console.log(`Error: ${e}`);
      errorfulNotify("Erro ao cadastrar aluno");
    }
  }

  return (
    <Container>
      <PopUp>
        <Title>
          <h1>Cadastro</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Scroll>
          <div>
            <label>Matrícula:</label>
            <input type="number" id="matricula" onChange={handleMatricula} />
          </div>                 
          <div>
            <label>Nome:</label>
            <input type="text" id="nome" onChange={handleNome} />
          </div>
          <div>
            <label>Nascimento:</label>
            <input type="date" id="nascimento" onChange={handleNascimento} />
          </div>                      
          <div>
            <button onClick={() => cadastrarAluno()}>Enviar</button>
          </div>                          
        </Scroll>
      </PopUp>
    </Container>
  );
}

export default Cadastro;