import React, { useState, useEffect } from 'react';

import { Container, PopUp, Title, Scroll } from './styles';

import { errorfulNotify } from '../../hooks/SystemToasts';

import api from '../../services/api';

interface IAluno {
  matricula: number;
  nome: string;
  nascimento: string;
}

interface IPopupVerbaAtualizar {
    fechar: () => void;
    matricula: number;
}

let aluno: IAluno = {
  matricula: 0,
  nome: "",
  nascimento: ""
}

const Atualizar: React.FC<IPopupVerbaAtualizar> = ({ fechar, matricula }) => {

  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    aluno.nome = event.target.value;
  }

  const handleNascimento = (event: React.ChangeEvent<HTMLInputElement>) => {
    aluno.nascimento = event.target.value;
  }

  async function handleAluno() {
    try {
      await api.get<IAluno>(`alunos/${matricula}`)
      .catch(() => errorfulNotify("Não foi possível encontrar o aluno."));
    } catch(e) {
      console.log(e);
    }
  }

  async function editarAluno() {
    try {
      aluno.matricula = matricula;

      await api.put<IAluno>(`alunos/${matricula}`, aluno)
      .catch(() => errorfulNotify("Não foi possível editar as informações."));
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleAluno();
  });

  return (
    <Container>
      <PopUp>
        <Title>
          <h1>Editar</h1>
          <span onClick={() => fechar()} />
        </Title>
        <Scroll>
          <div>
              <label>Matrícula:</label>
              <input type="number" id="matricula" value={matricula} disabled />
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
              <button onClick={() => editarAluno()}>Enviar</button>
          </div>                          
        </Scroll>
      </PopUp>
    </Container>
  );
}

export default Atualizar;